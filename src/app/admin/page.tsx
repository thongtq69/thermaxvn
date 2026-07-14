"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import type { CmsData, ContactRequest, ManagedAsset, ManagedNewsItem, ManagedProject } from "../../lib/cmsTypes";
import type { ProductSubcategoryGroup } from "../../lib/site";

type Tab = "assets" | "productGroups" | "news" | "projects" | "requests";

const emptyCms: CmsData = {
  assets: [],
  productGroups: [],
  news: [],
  projects: [],
};

const tabs: { id: Tab; label: string }[] = [
  { id: "assets", label: "Ảnh" },
  { id: "productGroups", label: "Danh mục sản phẩm" },
  { id: "news", label: "Tin tức mới nhất" },
  { id: "projects", label: "Dự án" },
  { id: "requests", label: "Yêu cầu gửi về" },
];

function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function childrenToText(group: ProductSubcategoryGroup) {
  return group.children.map((child) => `${child.label}|${child.href}`).join("\n");
}

function textToChildren(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, href] = line.split("|").map((part) => part.trim());
      return { label, href: href || `/industrial-products/${slugify(label)}` };
    });
}

function lines(value?: string[]) {
  return (value ?? []).join("\n");
}

function toLines(value: string) {
  return value.split("\n").map((line) => line.trim()).filter(Boolean);
}

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>("assets");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [configured, setConfigured] = useState(true);
  const [cms, setCms] = useState<CmsData>(emptyCms);
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);

  const isReady = useMemo(() => authenticated && configured, [authenticated, configured]);

  async function loadSession() {
    const response = await fetch("/api/admin/session");
    const data = await response.json();
    setConfigured(data.configured);
    setAuthenticated(data.authenticated);
  }

  async function loadCms() {
    const response = await fetch("/api/admin/cms");
    if (response.ok) setCms(await response.json());
  }

  async function loadRequests() {
    const response = await fetch("/api/admin/requests");
    if (response.ok) setRequests(await response.json());
  }

  useEffect(() => {
    loadSession();
  }, []);

  useEffect(() => {
    if (!authenticated) return;
    loadCms();
    loadRequests();
  }, [authenticated]);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setNotice("");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setBusy(false);
    if (!response.ok) {
      setNotice("Đăng nhập chưa đúng hoặc chưa cấu hình ADMIN_PASSWORD.");
      return;
    }
    setAuthenticated(true);
    setPassword("");
  }

  async function saveSection(section: keyof CmsData, value: CmsData[keyof CmsData]) {
    setBusy(true);
    setNotice("");
    const response = await fetch(`/api/admin/cms/${section}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    });
    setBusy(false);
    if (!response.ok) {
      setNotice("Chưa lưu được. Anh kiểm tra MongoDB/env giúp em.");
      return;
    }
    setCms((current) => ({ ...current, [section]: value }));
    setNotice("Đã lưu cập nhật.");
  }

  async function uploadImage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setBusy(true);
    setNotice("");
    const response = await fetch("/api/admin/upload", { method: "POST", body: form });
    setBusy(false);
    if (!response.ok) {
      setNotice("Upload ảnh chưa thành công. Anh kiểm tra Cloudinary env.");
      return;
    }
    const asset = await response.json();
    setCms((current) => ({ ...current, assets: [asset, ...current.assets] }));
    event.currentTarget.reset();
    setNotice("Đã upload ảnh lên Cloudinary.");
  }

  async function saveRequestStatus(id: string, status: "new" | "read") {
    await fetch(`/api/admin/requests/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    loadRequests();
  }

  async function deleteRequest(id: string) {
    await fetch(`/api/admin/requests/${id}`, { method: "DELETE" });
    loadRequests();
  }

  if (!configured) {
    return (
      <main className="admin-shell">
        <section className="admin-login">
          <h1>Chưa cấu hình admin</h1>
          <p>Thêm `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`, MongoDB và Cloudinary vào biến môi trường trước khi dùng.</p>
        </section>
      </main>
    );
  }

  if (!authenticated) {
    return (
      <main className="admin-shell">
        <form className="admin-login" onSubmit={login}>
          <span>Thermax CMS</span>
          <h1>Đăng nhập admin</h1>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Mật khẩu admin"
            required
          />
          <button disabled={busy} type="submit">{busy ? "Đang kiểm tra..." : "Đăng nhập"}</button>
          {notice ? <p>{notice}</p> : null}
        </form>
      </main>
    );
  }

  return (
    <main className="admin-shell">
      <header className="admin-header">
        <div>
          <span>Thermax CMS</span>
          <h1>Quản trị nội dung website</h1>
        </div>
        <button
          type="button"
          onClick={async () => {
            await fetch("/api/admin/logout", { method: "POST" });
            setAuthenticated(false);
          }}
        >
          Đăng xuất
        </button>
      </header>

      <nav className="admin-tabs">
        {tabs.map((item) => (
          <button className={tab === item.id ? "is-active" : ""} key={item.id} onClick={() => setTab(item.id)} type="button">
            {item.label}
          </button>
        ))}
      </nav>

      {notice ? <p className="admin-notice">{notice}</p> : null}
      {!isReady ? null : (
        <>
          {tab === "assets" ? (
            <AssetsPanel
              assets={cms.assets}
              busy={busy}
              onUpload={uploadImage}
              onChange={(assets) => setCms((current) => ({ ...current, assets }))}
              onSave={(assets) => saveSection("assets", assets)}
            />
          ) : null}
          {tab === "productGroups" ? (
            <ProductsPanel
              groups={cms.productGroups}
              onChange={(productGroups) => setCms((current) => ({ ...current, productGroups }))}
              onSave={(productGroups) => saveSection("productGroups", productGroups)}
            />
          ) : null}
          {tab === "news" ? (
            <NewsPanel
              news={cms.news}
              onChange={(news) => setCms((current) => ({ ...current, news }))}
              onSave={(news) => saveSection("news", news)}
            />
          ) : null}
          {tab === "projects" ? (
            <ProjectsPanel
              projects={cms.projects}
              onChange={(projects) => setCms((current) => ({ ...current, projects }))}
              onSave={(projects) => saveSection("projects", projects)}
            />
          ) : null}
          {tab === "requests" ? (
            <RequestsPanel requests={requests} onRead={saveRequestStatus} onDelete={deleteRequest} onRefresh={loadRequests} />
          ) : null}
        </>
      )}
    </main>
  );
}

function AssetsPanel({
  assets,
  busy,
  onUpload,
  onChange,
  onSave,
}: {
  assets: ManagedAsset[];
  busy: boolean;
  onUpload: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (assets: ManagedAsset[]) => void;
  onSave: (assets: ManagedAsset[]) => void;
}) {
  return (
    <section className="admin-panel">
      <form className="admin-card admin-upload" onSubmit={onUpload}>
        <h2>Upload ảnh Cloudinary</h2>
        <input name="title" placeholder="Tên ảnh" required />
        <input name="alt" placeholder="Mô tả ảnh" />
        <input name="file" type="file" accept="image/*" required />
        <button disabled={busy} type="submit">Upload ảnh</button>
      </form>
      <div className="admin-grid">
        {assets.map((asset, index) => (
          <article className="admin-card" key={asset.id}>
            <img className="admin-thumb" src={asset.url} alt={asset.alt || asset.title} />
            <input value={asset.title} onChange={(event) => {
              const next = [...assets];
              next[index] = { ...asset, title: event.target.value };
              onChange(next);
            }} />
            <input value={asset.url} onChange={(event) => {
              const next = [...assets];
              next[index] = { ...asset, url: event.target.value };
              onChange(next);
            }} />
            <input value={asset.alt || ""} placeholder="Alt text" onChange={(event) => {
              const next = [...assets];
              next[index] = { ...asset, alt: event.target.value };
              onChange(next);
            }} />
            <button
              type="button"
              onClick={async () => {
                await fetch("/api/admin/delete-asset", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ publicId: asset.publicId }),
                });
                onChange(assets.filter((item) => item.id !== asset.id));
              }}
            >
              Xóa ảnh
            </button>
          </article>
        ))}
      </div>
      <button className="admin-save" type="button" onClick={() => onSave(assets)}>Lưu danh sách ảnh</button>
    </section>
  );
}

function ProductsPanel({
  groups,
  onChange,
  onSave,
}: {
  groups: ProductSubcategoryGroup[];
  onChange: (groups: ProductSubcategoryGroup[]) => void;
  onSave: (groups: ProductSubcategoryGroup[]) => void;
}) {
  return (
    <section className="admin-panel">
      <div className="admin-actions">
        <button type="button" onClick={() => onChange([...groups, { label: "Danh mục mới", href: "/industrial-products/danh-muc-moi", children: [] }])}>
          Thêm danh mục
        </button>
        <button type="button" onClick={() => onSave(groups)}>Lưu danh mục sản phẩm</button>
      </div>
      <div className="admin-grid">
        {groups.map((group, index) => (
          <article className="admin-card" key={`${group.label}-${index}`}>
            <input value={group.label} onChange={(event) => {
              const next = [...groups];
              next[index] = { ...group, label: event.target.value };
              onChange(next);
            }} />
            <input value={group.href} onChange={(event) => {
              const next = [...groups];
              next[index] = { ...group, href: event.target.value };
              onChange(next);
            }} />
            <label>Thư mục con, mỗi dòng: Tên|đường dẫn</label>
            <textarea value={childrenToText(group)} onChange={(event) => {
              const next = [...groups];
              next[index] = { ...group, children: textToChildren(event.target.value) };
              onChange(next);
            }} />
            <button type="button" onClick={() => onChange(groups.filter((_, groupIndex) => groupIndex !== index))}>Xóa danh mục</button>
          </article>
        ))}
      </div>
    </section>
  );
}

function NewsPanel({
  news,
  onChange,
  onSave,
}: {
  news: ManagedNewsItem[];
  onChange: (news: ManagedNewsItem[]) => void;
  onSave: (news: ManagedNewsItem[]) => void;
}) {
  const add = () => onChange([{ id: createId("news"), title: "Tin tức mới", date: "", category: "Corporate updates", image: "", summary: "", highlights: [] }, ...news]);
  return (
    <section className="admin-panel">
      <div className="admin-actions">
        <button type="button" onClick={add}>Thêm tin tức</button>
        <button type="button" onClick={() => onSave(news)}>Lưu tin tức</button>
      </div>
      <div className="admin-grid">
        {news.map((item, index) => (
          <article className="admin-card" key={item.id}>
            <input value={item.title} placeholder="Tiêu đề" onChange={(event) => {
              const next = [...news];
              next[index] = { ...item, title: event.target.value };
              onChange(next);
            }} />
            <input value={item.date} placeholder="Ngày" onChange={(event) => {
              const next = [...news];
              next[index] = { ...item, date: event.target.value };
              onChange(next);
            }} />
            <input value={item.category} placeholder="Danh mục" onChange={(event) => {
              const next = [...news];
              next[index] = { ...item, category: event.target.value };
              onChange(next);
            }} />
            <input value={item.image} placeholder="URL ảnh" onChange={(event) => {
              const next = [...news];
              next[index] = { ...item, image: event.target.value };
              onChange(next);
            }} />
            <textarea value={item.summary} placeholder="Tóm tắt" onChange={(event) => {
              const next = [...news];
              next[index] = { ...item, summary: event.target.value };
              onChange(next);
            }} />
            <textarea value={lines(item.highlights)} placeholder="Điểm nổi bật, mỗi dòng một ý" onChange={(event) => {
              const next = [...news];
              next[index] = { ...item, highlights: toLines(event.target.value) };
              onChange(next);
            }} />
            <input value={item.sourceLabel || ""} placeholder="Nhãn link nguồn" onChange={(event) => {
              const next = [...news];
              next[index] = { ...item, sourceLabel: event.target.value };
              onChange(next);
            }} />
            <input value={item.sourceUrl || ""} placeholder="URL nguồn" onChange={(event) => {
              const next = [...news];
              next[index] = { ...item, sourceUrl: event.target.value };
              onChange(next);
            }} />
            <button type="button" onClick={() => onChange(news.filter((entry) => entry.id !== item.id))}>Xóa tin</button>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsPanel({
  projects,
  onChange,
  onSave,
}: {
  projects: ManagedProject[];
  onChange: (projects: ManagedProject[]) => void;
  onSave: (projects: ManagedProject[]) => void;
}) {
  const add = () => {
    const slug = "du-an-moi";
    onChange([
      {
        id: createId("project"),
        slug,
        title: "Dự án mới",
        category: "Dự án",
        description: "",
        image: "",
        href: `/projects/${slug}`,
        region: "",
        capacity: "",
        scope: "",
      },
      ...projects,
    ]);
  };

  return (
    <section className="admin-panel">
      <div className="admin-actions">
        <button type="button" onClick={add}>Thêm dự án</button>
        <button type="button" onClick={() => onSave(projects)}>Lưu dự án</button>
      </div>
      <div className="admin-grid">
        {projects.map((project, index) => (
          <article className="admin-card" key={project.id}>
            {(["title", "category", "description", "image", "region", "capacity", "scope"] as const).map((field) => (
              <input key={field} value={project[field]} placeholder={field} onChange={(event) => {
                const next = [...projects];
                next[index] = { ...project, [field]: event.target.value };
                onChange(next);
              }} />
            ))}
            <input value={project.slug} placeholder="slug" onChange={(event) => {
              const slug = slugify(event.target.value);
              const next = [...projects];
              next[index] = { ...project, slug, href: `/projects/${slug}` };
              onChange(next);
            }} />
            <input value={project.href} placeholder="href" onChange={(event) => {
              const next = [...projects];
              next[index] = { ...project, href: event.target.value };
              onChange(next);
            }} />
            <button type="button" onClick={() => onChange(projects.filter((entry) => entry.id !== project.id))}>Xóa dự án</button>
          </article>
        ))}
      </div>
    </section>
  );
}

function RequestsPanel({
  requests,
  onRead,
  onDelete,
  onRefresh,
}: {
  requests: ContactRequest[];
  onRead: (id: string, status: "new" | "read") => void;
  onDelete: (id: string) => void;
  onRefresh: () => void;
}) {
  return (
    <section className="admin-panel">
      <div className="admin-actions">
        <button type="button" onClick={onRefresh}>Tải lại yêu cầu</button>
      </div>
      <div className="admin-grid">
        {requests.map((request) => (
          <article className={request.status === "new" ? "admin-card is-new" : "admin-card"} key={request.id}>
            <span>{request.status === "new" ? "Mới" : "Đã đọc"}</span>
            <h2>{request.fullName}</h2>
            <p>{request.companyName}</p>
            <p>{request.email} · {request.phone}</p>
            <p>{request.country} {request.industry}</p>
            <p>{request.message}</p>
            <small>{request.source} · {new Date(request.createdAt).toLocaleString("vi-VN")}</small>
            <button type="button" onClick={() => onRead(request.id, request.status === "new" ? "read" : "new")}>
              {request.status === "new" ? "Đánh dấu đã đọc" : "Đánh dấu mới"}
            </button>
            <button type="button" onClick={() => onDelete(request.id)}>Xóa yêu cầu</button>
          </article>
        ))}
      </div>
    </section>
  );
}
