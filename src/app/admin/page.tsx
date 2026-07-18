"use client";

import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";
import type { CmsData, ContactRequest, FooterGroup, ManagedAsset, ManagedFooter, ManagedNewsItem, ManagedProject } from "../../lib/cmsTypes";
import { defaultFooter } from "../../lib/cmsDefaults";
import { translate } from "../../lib/i18n";
import type { ProductSubcategoryGroup } from "../../lib/site";
import styles from "./Admin.module.css";

type Tab = "dashboard" | "assets" | "productGroups" | "footer" | "news" | "projects" | "requests";
type Notice = { tone: "success" | "error" | "info"; text: string } | null;

const emptyCms: CmsData = { assets: [], productGroups: [], news: [], projects: [], footer: defaultFooter };

const navItems: Array<{ id: Tab; label: string; description: string; icon: IconName }> = [
  { id: "dashboard", label: "Tổng quan", description: "Tình hình website", icon: "dashboard" },
  { id: "assets", label: "Thư viện ảnh", description: "Ảnh và tệp truyền thông", icon: "image" },
  { id: "productGroups", label: "Sản phẩm", description: "Danh mục và thư mục con", icon: "products" },
  { id: "footer", label: "Chân trang", description: "Thông tin và liên kết cuối trang", icon: "footer" },
  { id: "news", label: "Tin tức", description: "Bài viết mới nhất", icon: "news" },
  { id: "projects", label: "Dự án", description: "Hồ sơ dự án", icon: "projects" },
  { id: "requests", label: "Yêu cầu khách hàng", description: "Thông tin liên hệ", icon: "inbox" },
];

const pageMeta: Record<Tab, { eyebrow: string; title: string; description: string }> = {
  dashboard: { eyebrow: "Trung tâm quản trị", title: "Tổng quan website", description: "Theo dõi nội dung và các yêu cầu mới tại một nơi." },
  assets: { eyebrow: "Nội dung", title: "Thư viện ảnh", description: "Tải lên, tìm kiếm và quản lý ảnh dùng trên website." },
  productGroups: { eyebrow: "Nội dung", title: "Danh mục sản phẩm", description: "Sắp xếp danh mục chính và các sản phẩm con trong menu." },
  footer: { eyebrow: "Nội dung", title: "Chân trang website", description: "Chỉnh sửa thông tin văn phòng, các cột liên kết và nội dung pháp lý." },
  news: { eyebrow: "Nội dung", title: "Tin tức", description: "Soạn, lưu nháp và xuất bản tin tức mới nhất." },
  projects: { eyebrow: "Nội dung", title: "Dự án", description: "Quản lý thông tin và trang chi tiết của các dự án." },
  requests: { eyebrow: "Khách hàng", title: "Yêu cầu gửi về", description: "Tiếp nhận và theo dõi các yêu cầu từ website." },
};

function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function slugify(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function matchesSearch(value: string, query: string) {
  const normalize = (text: string) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  const searchable = normalize(value);
  return terms.every((term) => searchable.includes(term));
}

function toLines(value: string) {
  return value.split("\n").map((line) => line.trim()).filter(Boolean);
}

function formatDate(value: string) {
  try {
    return new Intl.DateTimeFormat("vi-VN", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
  } catch {
    return value;
  }
}

async function responseError(response: Response, fallback: string) {
  const data = await response.json().catch(() => null) as { error?: string } | null;
  return data?.error || fallback;
}

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>("dashboard");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [configured, setConfigured] = useState(true);
  const [checkingSession, setCheckingSession] = useState(true);
  const [loading, setLoading] = useState(false);
  const [busyKey, setBusyKey] = useState("");
  const [cms, setCms] = useState<CmsData>(emptyCms);
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [notice, setNotice] = useState<Notice>(null);
  const [dirty, setDirty] = useState<Set<keyof CmsData>>(new Set());
  const [mobileMenu, setMobileMenu] = useState(false);

  const newRequests = useMemo(() => requests.filter((item) => item.status === "new").length, [requests]);

  useEffect(() => {
    fetch("/api/admin/session")
      .then((response) => response.json())
      .then((data) => {
        setConfigured(Boolean(data.configured));
        setAuthenticated(Boolean(data.authenticated));
      })
      .catch(() => setNotice({ tone: "error", text: "Không thể kết nối tới hệ thống quản trị." }))
      .finally(() => setCheckingSession(false));
  }, []);

  useEffect(() => {
    if (!authenticated) return;
    setLoading(true);
    Promise.all([loadCms(), loadRequests()]).finally(() => setLoading(false));
  }, [authenticated]);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(null), 4200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  async function loadCms() {
    try {
      const response = await fetch("/api/admin/cms");
      if (response.ok) setCms(await response.json());
      else if (response.status === 401) setAuthenticated(false);
      else setNotice({ tone: "error", text: await responseError(response, "Không thể tải dữ liệu CMS.") });
    } catch {
      setNotice({ tone: "error", text: "Không thể kết nối tới CMS." });
    }
  }

  async function loadRequests() {
    try {
      const response = await fetch("/api/admin/requests");
      if (response.ok) setRequests(await response.json());
      else if (response.status === 401) setAuthenticated(false);
      else setNotice({ tone: "error", text: await responseError(response, "Không thể tải yêu cầu khách hàng.") });
    } catch {
      setNotice({ tone: "error", text: "Không thể kết nối tới hộp thư khách hàng." });
    }
  }

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusyKey("login");
    setNotice(null);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) {
        setNotice({ tone: "error", text: "Mật khẩu không đúng. Vui lòng kiểm tra và thử lại." });
        return;
      }
      setAuthenticated(true);
      setPassword("");
    } catch {
      setNotice({ tone: "error", text: "Không thể kết nối tới hệ thống quản trị." });
    } finally {
      setBusyKey("");
    }
  }

  function updateSection<K extends keyof CmsData>(section: K, value: CmsData[K]) {
    setCms((current) => ({ ...current, [section]: value }));
    setDirty((current) => new Set(current).add(section));
  }

  async function saveSection<K extends keyof CmsData>(section: K, value: CmsData[K]) {
    setBusyKey(`save-${section}`);
    try {
      const response = await fetch(`/api/admin/cms/${section}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      });
      if (!response.ok) {
        setNotice({ tone: "error", text: await responseError(response, "Chưa thể lưu thay đổi. Vui lòng thử lại.") });
        return false;
      }
      setDirty((current) => {
        const next = new Set(current);
        next.delete(section);
        return next;
      });
      setNotice({ tone: "success", text: "Đã lưu thay đổi thành công." });
      return true;
    } catch {
      setNotice({ tone: "error", text: "Mất kết nối khi lưu. Thay đổi vẫn được giữ trên màn hình để anh/chị thử lại." });
      return false;
    } finally {
      setBusyKey("");
    }
  }

  async function uploadImage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setBusyKey("upload");
    try {
      const response = await fetch("/api/admin/upload", { method: "POST", body: form });
      if (!response.ok) {
        setNotice({ tone: "error", text: await responseError(response, "Tải ảnh thất bại.") });
        return;
      }
      const asset = await response.json();
      setCms((current) => ({ ...current, assets: [asset, ...current.assets] }));
      formElement.reset();
      setNotice({ tone: "success", text: "Ảnh đã được tải lên và lưu vào thư viện." });
    } catch {
      setNotice({ tone: "error", text: "Mất kết nối khi tải ảnh. Không có thay đổi nào được xác nhận." });
    } finally {
      setBusyKey("");
    }
  }

  async function deleteAsset(asset: ManagedAsset) {
    if (!window.confirm(`Xóa ảnh “${asset.title}”? Ảnh đang được dùng trên website có thể không còn hiển thị.`)) return;
    setBusyKey(`asset-${asset.id}`);
    const next = cms.assets.filter((item) => item.id !== asset.id);
    try {
      const response = await fetch("/api/admin/delete-asset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId: asset.publicId, assets: next }),
      });
      if (!response.ok) {
        setNotice({ tone: "error", text: await responseError(response, "Chưa thể xóa ảnh.") });
        return;
      }
      const result = await response.json() as { assets?: ManagedAsset[]; cleanupPending?: boolean };
      setCms((current) => ({ ...current, assets: result.assets ?? next }));
      setDirty((current) => {
        const updated = new Set(current);
        updated.delete("assets");
        return updated;
      });
      setNotice({
        tone: result.cleanupPending ? "info" : "success",
        text: result.cleanupPending
          ? "Đã xóa ảnh khỏi thư viện; file Cloudinary sẽ cần được dọn lại sau."
          : "Đã xóa ảnh an toàn khỏi thư viện.",
      });
    } catch {
      setNotice({ tone: "error", text: "Mất kết nối khi xóa ảnh. Ảnh chưa bị xóa khỏi thư viện." });
    } finally {
      setBusyKey("");
    }
  }

  async function saveRequestStatus(id: string, status: "new" | "read") {
    setBusyKey(`request-${id}`);
    try {
      const response = await fetch(`/api/admin/requests/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) {
        setNotice({ tone: "error", text: await responseError(response, "Không thể cập nhật yêu cầu.") });
        return;
      }
      setRequests((current) => current.map((item) => item.id === id ? { ...item, status } : item));
      setNotice({ tone: "success", text: status === "read" ? "Đã đánh dấu yêu cầu là đã xử lý." : "Đã chuyển yêu cầu về trạng thái mới." });
    } catch {
      setNotice({ tone: "error", text: "Mất kết nối khi cập nhật yêu cầu." });
    } finally {
      setBusyKey("");
    }
  }

  async function deleteRequest(id: string) {
    if (!window.confirm("Xóa yêu cầu này? Thao tác không thể hoàn tác.")) return;
    setBusyKey(`request-${id}`);
    try {
      const response = await fetch(`/api/admin/requests/${id}`, { method: "DELETE" });
      if (!response.ok) {
        setNotice({ tone: "error", text: await responseError(response, "Không thể xóa yêu cầu.") });
        return;
      }
      setRequests((current) => current.filter((item) => item.id !== id));
      setNotice({ tone: "success", text: "Đã xóa yêu cầu." });
    } catch {
      setNotice({ tone: "error", text: "Mất kết nối khi xóa yêu cầu." });
    } finally {
      setBusyKey("");
    }
  }

  function navigate(next: Tab) {
    setTab(next);
    setMobileMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (checkingSession) return <AdminLoading />;
  if (!configured) return <ConfigurationScreen />;
  if (!authenticated) return <LoginScreen password={password} busy={busyKey === "login"} notice={notice} onPassword={setPassword} onSubmit={login} />;

  const meta = pageMeta[tab];
  return (
    <main className={styles.app}>
      <aside className={`${styles.sidebar} ${mobileMenu ? styles.sidebarOpen : ""}`}>
        <div className={styles.brand}>
          <div className={styles.brandMark}>T</div>
          <div><strong>THERMAX</strong><span>Quản trị nội dung</span></div>
          <button className={styles.mobileClose} type="button" onClick={() => setMobileMenu(false)} aria-label="Đóng menu"><Icon name="close" /></button>
        </div>
        <div className={styles.navLabel}>Không gian làm việc</div>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <button key={item.id} type="button" className={tab === item.id ? styles.navActive : ""} onClick={() => navigate(item.id)}>
              <span className={styles.navIcon}><Icon name={item.icon} /></span>
              <span><strong>{item.label}</strong><small>{item.description}</small></span>
              {item.id === "requests" && newRequests > 0 ? <b className={styles.navBadge}>{newRequests}</b> : null}
            </button>
          ))}
        </nav>
        <div className={styles.sidebarFooter}>
          <a href="/" target="_blank" rel="noreferrer"><Icon name="external" /> Xem website</a>
          <button type="button" onClick={async () => { await fetch("/api/admin/logout", { method: "POST" }); setAuthenticated(false); }}><Icon name="logout" /> Đăng xuất</button>
        </div>
      </aside>

      {mobileMenu ? <button className={styles.backdrop} type="button" aria-label="Đóng menu" onClick={() => setMobileMenu(false)} /> : null}

      <section className={styles.workspace}>
        <header className={styles.topbar}>
          <button className={styles.mobileMenuButton} type="button" onClick={() => setMobileMenu(true)} aria-label="Mở menu"><Icon name="menu" /></button>
          <div className={styles.breadcrumb}><span>Thermax Vietnam</span><Icon name="chevron" /><strong>{meta.title}</strong></div>
          <div className={styles.topbarActions}>
            {dirty.size > 0 ? <span className={styles.unsaved}><i /> Có thay đổi chưa lưu</span> : <span className={styles.synced}><Icon name="check" /> Dữ liệu đã đồng bộ</span>}
            <a href="/" target="_blank" rel="noreferrer" className={styles.previewButton}><Icon name="external" /> Xem website</a>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.pageHeader}>
            <div><span>{meta.eyebrow}</span><h1>{meta.title}</h1><p>{meta.description}</p></div>
            <div className={styles.pageHeaderDate}><span>Hôm nay</span><strong>{new Intl.DateTimeFormat("vi-VN", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date())}</strong></div>
          </div>

          {loading ? <AdminSkeleton /> : (
            <>
              {tab === "dashboard" ? <Dashboard cms={cms} requests={requests} onNavigate={navigate} /> : null}
              {tab === "assets" ? <AssetsPanel assets={cms.assets} busyKey={busyKey} dirty={dirty.has("assets")} onUpload={uploadImage} onChange={(value) => updateSection("assets", value)} onSave={() => saveSection("assets", cms.assets)} onDelete={deleteAsset} /> : null}
              {tab === "productGroups" ? <ProductsPanel groups={cms.productGroups} dirty={dirty.has("productGroups")} busy={busyKey === "save-productGroups"} onChange={(value) => updateSection("productGroups", value)} onSave={() => saveSection("productGroups", cms.productGroups)} /> : null}
              {tab === "footer" ? <FooterPanel footer={cms.footer} dirty={dirty.has("footer")} busy={busyKey === "save-footer"} onChange={(value) => updateSection("footer", value)} onSave={() => saveSection("footer", cms.footer)} /> : null}
              {tab === "news" ? <NewsPanel news={cms.news} assets={cms.assets} dirty={dirty.has("news")} busy={busyKey === "save-news"} onChange={(value) => updateSection("news", value)} onSave={() => saveSection("news", cms.news)} /> : null}
              {tab === "projects" ? <ProjectsPanel projects={cms.projects} assets={cms.assets} dirty={dirty.has("projects")} busy={busyKey === "save-projects"} onChange={(value) => updateSection("projects", value)} onSave={() => saveSection("projects", cms.projects)} /> : null}
              {tab === "requests" ? <RequestsPanel requests={requests} busyKey={busyKey} onRead={saveRequestStatus} onDelete={deleteRequest} onRefresh={loadRequests} /> : null}
            </>
          )}
        </div>
      </section>
      {notice ? <Toast notice={notice} onClose={() => setNotice(null)} /> : null}
    </main>
  );
}

function Dashboard({ cms, requests, onNavigate }: { cms: CmsData; requests: ContactRequest[]; onNavigate: (tab: Tab) => void }) {
  const fresh = requests.filter((item) => item.status === "new");
  const publishedNews = cms.news.filter((item) => item.status !== "draft").length;
  const publishedProjects = cms.projects.filter((item) => item.status !== "draft").length;
  return (
    <div className={styles.dashboard}>
      <div className={styles.statGrid}>
        <StatCard label="Yêu cầu mới" value={fresh.length} note={fresh.length ? "Cần kiểm tra và phản hồi" : "Không có yêu cầu chờ"} icon="inbox" tone="red" onClick={() => onNavigate("requests")} />
        <StatCard label="Tin đã xuất bản" value={publishedNews} note={`${cms.news.length - publishedNews} bản nháp`} icon="news" tone="blue" onClick={() => onNavigate("news")} />
        <StatCard label="Dự án đang hiển thị" value={publishedProjects} note={`${cms.projects.length} dự án trong CMS`} icon="projects" tone="green" onClick={() => onNavigate("projects")} />
        <StatCard label="Ảnh trong thư viện" value={cms.assets.length} note="Sẵn sàng dùng cho nội dung" icon="image" tone="purple" onClick={() => onNavigate("assets")} />
      </div>
      <div className={styles.dashboardGrid}>
        <section className={styles.surface}>
          <SectionHeading title="Việc cần xử lý" description="Các đầu việc quan trọng trong ngày" />
          <div className={styles.taskList}>
            <DashboardTask icon="inbox" title={fresh.length ? `${fresh.length} yêu cầu khách hàng chưa đọc` : "Yêu cầu khách hàng đã được xử lý"} description={fresh.length ? "Mở hộp thư để xem thông tin và phản hồi." : "Hiện không có yêu cầu mới cần xử lý."} action={fresh.length ? "Kiểm tra ngay" : "Xem hộp thư"} onClick={() => onNavigate("requests")} urgent={fresh.length > 0} />
            <DashboardTask icon="news" title="Cập nhật tin tức mới nhất" description="Duy trì nội dung mới giúp website đáng tin cậy hơn." action="Quản lý tin tức" onClick={() => onNavigate("news")} />
            <DashboardTask icon="image" title="Kiểm tra thư viện hình ảnh" description="Đặt tên và mô tả ảnh rõ ràng trước khi sử dụng." action="Mở thư viện" onClick={() => onNavigate("assets")} />
          </div>
        </section>
        <section className={styles.surface}>
          <SectionHeading title="Truy cập nhanh" description="Tạo và cập nhật nội dung thường dùng" />
          <div className={styles.quickGrid}>
            <QuickAction icon="news" title="Thêm tin tức" text="Soạn bài và lưu nháp" onClick={() => onNavigate("news")} />
            <QuickAction icon="projects" title="Thêm dự án" text="Tạo hồ sơ dự án mới" onClick={() => onNavigate("projects")} />
            <QuickAction icon="image" title="Tải ảnh lên" text="Thêm ảnh vào thư viện" onClick={() => onNavigate("assets")} />
            <QuickAction icon="products" title="Sửa sản phẩm" text="Cập nhật menu và mục con" onClick={() => onNavigate("productGroups")} />
          </div>
        </section>
      </div>
      <section className={styles.surface}>
        <SectionHeading title="Yêu cầu gần đây" description="Thông tin mới nhất gửi từ biểu mẫu trên website" action={requests.length ? <button className={styles.textButton} type="button" onClick={() => onNavigate("requests")}>Xem tất cả <Icon name="arrow" /></button> : undefined} />
        {requests.length ? <div className={styles.recentTable}>{requests.slice(0, 5).map((request) => <div key={request.id}><span className={request.status === "new" ? styles.statusNew : styles.statusRead}>{request.status === "new" ? "Mới" : "Đã đọc"}</span><strong>{request.fullName}</strong><span>{request.companyName || "Khách hàng cá nhân"}</span><a href={`mailto:${request.email}`}>{request.email}</a><time>{formatDate(request.createdAt)}</time></div>)}</div> : <EmptyState icon="inbox" title="Chưa có yêu cầu nào" text="Yêu cầu từ biểu mẫu liên hệ sẽ xuất hiện tại đây." />}
      </section>
    </div>
  );
}

function AssetsPanel({ assets, busyKey, dirty, onUpload, onChange, onSave, onDelete }: { assets: ManagedAsset[]; busyKey: string; dirty: boolean; onUpload: (event: FormEvent<HTMLFormElement>) => void; onChange: (assets: ManagedAsset[]) => void; onSave: () => void; onDelete: (asset: ManagedAsset) => void }) {
  const [query, setQuery] = useState("");
  const filtered = assets.filter((asset) => matchesSearch(`${asset.title} ${asset.alt ?? ""}`, query));
  return <div className={styles.panelStack}>
    <section className={`${styles.surface} ${styles.uploadSurface}`}>
      <div className={styles.uploadIntro}><span className={styles.bigIcon}><Icon name="upload" /></span><div><h2>Tải ảnh mới</h2><p>Hỗ trợ JPG, PNG, WEBP. Nên dùng ảnh dưới 5 MB và đặt mô tả rõ ràng.</p></div></div>
      <form className={styles.uploadForm} onSubmit={onUpload}>
        <Field label="Tên ảnh" hint="Ví dụ: Nhà máy xử lý nước"><input name="title" required placeholder="Nhập tên dễ nhận biết" /></Field>
        <Field label="Mô tả ảnh (Alt text)" hint="Giúp tìm kiếm và hỗ trợ người khiếm thị"><input name="alt" placeholder="Mô tả ngắn nội dung ảnh" /></Field>
        <label className={styles.fileInput}><input name="file" type="file" accept="image/*" required /><Icon name="upload" /><span><strong>Chọn ảnh từ máy tính</strong><small>JPG, PNG hoặc WEBP</small></span></label>
        <button className={styles.primaryButton} disabled={busyKey === "upload"} type="submit">{busyKey === "upload" ? <><Spinner /> Đang tải...</> : <><Icon name="upload" /> Tải ảnh lên</>}</button>
      </form>
    </section>
    <section className={styles.surface}>
      <SectionHeading title={`Thư viện ảnh (${assets.length})`} description="Chỉnh sửa tên, mô tả hoặc sao chép đường dẫn để dùng trong nội dung." action={<div className={styles.toolbar}><Search value={query} onChange={setQuery} placeholder="Tìm ảnh..." />{dirty ? <button className={styles.primaryButton} type="button" onClick={onSave}><Icon name="save" /> Lưu chỉnh sửa</button> : null}</div>} />
      {filtered.length ? <div className={styles.assetGrid}>{filtered.map((asset) => {
        const index = assets.findIndex((item) => item.id === asset.id);
        return <article className={styles.assetCard} key={asset.id}>
          <div className={styles.assetImage}><img src={asset.url} alt={asset.alt || asset.title} /><span><Icon name="image" /></span></div>
          <div className={styles.assetBody}>
            <Field label="Tên ảnh"><input value={asset.title} onChange={(event) => { const next = [...assets]; next[index] = { ...asset, title: event.target.value }; onChange(next); }} /></Field>
            <Field label="Mô tả ảnh"><input value={asset.alt ?? ""} placeholder="Chưa có mô tả" onChange={(event) => { const next = [...assets]; next[index] = { ...asset, alt: event.target.value }; onChange(next); }} /></Field>
            <div className={styles.cardActions}><button type="button" onClick={() => { navigator.clipboard.writeText(asset.url); }}><Icon name="copy" /> Sao chép URL</button><button className={styles.dangerText} disabled={busyKey === `asset-${asset.id}`} type="button" onClick={() => onDelete(asset)}><Icon name="trash" /> Xóa</button></div>
          </div>
        </article>;
      })}</div> : <EmptyState icon="image" title="Không tìm thấy ảnh" text="Thử từ khóa khác hoặc tải một ảnh mới lên thư viện." />}
    </section>
  </div>;
}

function ProductsPanel({ groups, dirty, busy, onChange, onSave }: { groups: ProductSubcategoryGroup[]; dirty: boolean; busy: boolean; onChange: (groups: ProductSubcategoryGroup[]) => void; onSave: () => void }) {
  const [openIndex, setOpenIndex] = useState(0);
  function updateGroup(index: number, patch: Partial<ProductSubcategoryGroup>) { const next = [...groups]; next[index] = { ...next[index], ...patch }; onChange(next); }
  function move(index: number, direction: -1 | 1) { const target = index + direction; if (target < 0 || target >= groups.length) return; const next = [...groups]; [next[index], next[target]] = [next[target], next[index]]; onChange(next); setOpenIndex(target); }
  return <div className={styles.panelStack}>
    <section className={styles.surface}>
      <SectionHeading title="Cấu trúc menu sản phẩm" description="Nhấn vào từng danh mục để chỉnh sửa. Các mục con sẽ hiển thị khi khách rê chuột trên menu Sản phẩm." action={<div className={styles.toolbar}><button className={styles.secondaryButton} type="button" onClick={() => { const next = [...groups, { label: "Danh mục mới", href: "/industrial-products/danh-muc-moi", children: [] }]; onChange(next); setOpenIndex(next.length - 1); }}><Icon name="plus" /> Thêm danh mục</button><button className={styles.primaryButton} disabled={!dirty || busy} type="button" onClick={onSave}>{busy ? <Spinner /> : <Icon name="save" />} Lưu thay đổi</button></div>} />
      <div className={styles.categoryList}>{groups.map((group, index) => <article className={`${styles.categoryCard} ${openIndex === index ? styles.categoryOpen : ""}`} key={`${group.label}-${index}`}>
        <button className={styles.categorySummary} type="button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}><span className={styles.orderNumber}>{String(index + 1).padStart(2, "0")}</span><span><strong>{group.label || "Danh mục chưa đặt tên"}</strong><small>{group.children.length} thư mục con</small></span><Icon name={openIndex === index ? "chevronUp" : "chevronDown"} /></button>
        {openIndex === index ? <div className={styles.categoryEditor}>
          <div className={styles.formGrid2}><Field label="Tên danh mục" required><input value={group.label} onChange={(event) => updateGroup(index, { label: event.target.value })} /></Field><Field label="Đường dẫn"><input value={group.href} onChange={(event) => updateGroup(index, { href: event.target.value })} /></Field></div>
          <div className={styles.subcategoryHeader}><div><h3>Thư mục con</h3><p>Danh sách sản phẩm hiển thị bên cạnh danh mục này.</p></div><button className={styles.secondaryButton} type="button" onClick={() => updateGroup(index, { children: [...group.children, { label: "Sản phẩm mới", href: "/industrial-products/san-pham-moi" }] })}><Icon name="plus" /> Thêm mục con</button></div>
          <div className={styles.childList}>{group.children.map((child, childIndex) => <div className={styles.childRow} key={`${child.label}-${childIndex}`}><span className={styles.dragHandle}><Icon name="drag" /></span><Field label="Tên sản phẩm"><input value={child.label} onChange={(event) => { const children = [...group.children]; children[childIndex] = { ...child, label: event.target.value }; updateGroup(index, { children }); }} /></Field><Field label="Đường dẫn"><input value={child.href} onChange={(event) => { const children = [...group.children]; children[childIndex] = { ...child, href: event.target.value }; updateGroup(index, { children }); }} /></Field><button className={styles.iconDanger} type="button" title="Xóa mục con" onClick={() => updateGroup(index, { children: group.children.filter((_, current) => current !== childIndex) })}><Icon name="trash" /></button></div>)}</div>
          {!group.children.length ? <div className={styles.inlineEmpty}>Chưa có thư mục con. Nhấn “Thêm mục con” để bắt đầu.</div> : null}
          <div className={styles.editorFooter}><div><button type="button" disabled={index === 0} onClick={() => move(index, -1)}><Icon name="arrowUp" /> Đưa lên</button><button type="button" disabled={index === groups.length - 1} onClick={() => move(index, 1)}><Icon name="arrowDown" /> Đưa xuống</button></div><button className={styles.dangerButton} type="button" onClick={() => { if (window.confirm(`Xóa danh mục “${group.label}”?`)) { onChange(groups.filter((_, current) => current !== index)); setOpenIndex(0); } }}><Icon name="trash" /> Xóa danh mục</button></div>
        </div> : null}
      </article>)}</div>
    </section>
  </div>;
}

function FooterPanel({ footer, dirty, busy, onChange, onSave }: { footer: ManagedFooter; dirty: boolean; busy: boolean; onChange: (footer: ManagedFooter) => void; onSave: () => void }) {
  const [openGroupId, setOpenGroupId] = useState(footer.groups[0]?.id ?? "");
  const update = (patch: Partial<ManagedFooter>) => onChange({ ...footer, ...patch });
  const updateGroup = (groupId: string, patch: Partial<FooterGroup>) => update({
    groups: footer.groups.map((group) => group.id === groupId ? { ...group, ...patch } : group),
  });
  const addGroup = () => {
    const group: FooterGroup = { id: createId("footer-group"), title: "Cột liên kết mới", links: [] };
    update({ groups: [...footer.groups, group] });
    setOpenGroupId(group.id);
  };
  const moveGroup = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= footer.groups.length) return;
    const groups = [...footer.groups];
    [groups[index], groups[target]] = [groups[target], groups[index]];
    update({ groups });
  };

  return <div className={styles.panelStack}>
    <section className={styles.surface}>
      <SectionHeading title="Thông tin văn phòng" description="Nội dung hiển thị ở cột bên trái của chân trang." action={<button className={styles.primaryButton} disabled={!dirty || busy} type="button" onClick={onSave}>{busy ? <Spinner /> : <Icon name="save" />} Lưu thay đổi</button>} />
      <div className={styles.footerSettingsGrid}>
        <Field label="URL logo"><input value={footer.logoUrl} onChange={(event) => update({ logoUrl: event.target.value })} placeholder="/thermax-logo.svg" /></Field>
        <Field label="Tên văn phòng" required><input value={footer.officeLabel} onChange={(event) => update({ officeLabel: event.target.value })} /></Field>
        <Field label="Địa chỉ" hint="Mỗi dòng sẽ hiển thị thành một dòng riêng"><textarea rows={6} value={footer.address.join("\n")} onChange={(event) => update({ address: toLines(event.target.value) })} /></Field>
        <div className={styles.footerContactFields}>
          <div className={styles.formGrid2}><Field label="Số điện thoại"><input value={footer.phone} onChange={(event) => update({ phone: event.target.value })} /></Field><Field label="Liên kết điện thoại"><input value={footer.phoneHref} onChange={(event) => update({ phoneHref: event.target.value })} placeholder="tel:+84..." /></Field></div>
          <div className={styles.formGrid2}><Field label="Email"><input type="email" value={footer.email} onChange={(event) => update({ email: event.target.value })} /></Field><Field label="Liên kết email"><input value={footer.emailHref} onChange={(event) => update({ emailHref: event.target.value })} placeholder="mailto:..." /></Field></div>
        </div>
      </div>
    </section>

    <section className={styles.surface}>
      <SectionHeading title="Các cột liên kết" description="Thêm, chỉnh sửa, sắp xếp hoặc xóa các nhóm và liên kết xuất hiện trong chân trang." action={<button className={styles.secondaryButton} type="button" onClick={addGroup}><Icon name="plus" /> Thêm cột</button>} />
      <div className={styles.categoryList}>{footer.groups.map((group, index) => <article className={`${styles.categoryCard} ${openGroupId === group.id ? styles.categoryOpen : ""}`} key={group.id}>
        <button className={styles.categorySummary} type="button" onClick={() => setOpenGroupId(openGroupId === group.id ? "" : group.id)}><span className={styles.orderNumber}>{String(index + 1).padStart(2, "0")}</span><span><strong>{group.title || "Cột chưa đặt tên"}</strong><small>{group.links.length} liên kết</small></span><Icon name={openGroupId === group.id ? "chevronUp" : "chevronDown"} /></button>
        {openGroupId === group.id ? <div className={styles.categoryEditor}>
          <Field label="Tiêu đề cột" required><input value={group.title} onChange={(event) => updateGroup(group.id, { title: event.target.value })} /></Field>
          <div className={styles.subcategoryHeader}><div><h3>Liên kết</h3><p>Mỗi liên kết gồm tên hiển thị và đường dẫn đích.</p></div><button className={styles.secondaryButton} type="button" onClick={() => updateGroup(group.id, { links: [...group.links, { id: createId("footer-link"), label: "Liên kết mới", href: "/" }] })}><Icon name="plus" /> Thêm liên kết</button></div>
          <div className={styles.childList}>{group.links.map((link, linkIndex) => <div className={styles.childRow} key={link.id}><span className={styles.dragHandle}><Icon name="drag" /></span><Field label="Tên hiển thị"><input value={link.label} onChange={(event) => { const links = [...group.links]; links[linkIndex] = { ...link, label: event.target.value }; updateGroup(group.id, { links }); }} /></Field><Field label="Đường dẫn"><input value={link.href} onChange={(event) => { const links = [...group.links]; links[linkIndex] = { ...link, href: event.target.value }; updateGroup(group.id, { links }); }} /></Field><button className={styles.iconDanger} type="button" title="Xóa liên kết" onClick={() => updateGroup(group.id, { links: group.links.filter((item) => item.id !== link.id) })}><Icon name="trash" /></button></div>)}</div>
          {!group.links.length ? <div className={styles.inlineEmpty}>Chưa có liên kết. Nhấn “Thêm liên kết” để bắt đầu.</div> : null}
          <div className={styles.editorFooter}><div><button type="button" disabled={index === 0} onClick={() => moveGroup(index, -1)}><Icon name="arrowUp" /> Đưa lên</button><button type="button" disabled={index === footer.groups.length - 1} onClick={() => moveGroup(index, 1)}><Icon name="arrowDown" /> Đưa xuống</button></div><button className={styles.dangerButton} type="button" onClick={() => { if (window.confirm(`Xóa cột “${group.title}” và toàn bộ liên kết bên trong?`)) { update({ groups: footer.groups.filter((item) => item.id !== group.id) }); setOpenGroupId(footer.groups.find((item) => item.id !== group.id)?.id ?? ""); } }}><Icon name="trash" /> Xóa cột</button></div>
        </div> : null}
      </article>)}</div>
      {!footer.groups.length ? <div className={styles.inlineEmpty}>Chưa có cột liên kết nào. Nhấn “Thêm cột” để tạo nội dung.</div> : null}
    </section>

    <section className={styles.surface}>
      <SectionHeading title="Dòng cuối chân trang" description="Chỉnh sửa bản quyền và các liên kết pháp lý." />
      <Field label="Nội dung bản quyền"><input value={footer.copyright} onChange={(event) => update({ copyright: event.target.value })} /></Field>
      <div className={styles.subcategoryHeader}><div><h3>Liên kết pháp lý</h3><p>Có thể chỉnh sửa hoặc xóa từng liên kết.</p></div><button className={styles.secondaryButton} type="button" onClick={() => update({ legalLinks: [...footer.legalLinks, { id: createId("footer-legal"), label: "Liên kết mới", href: "/" }] })}><Icon name="plus" /> Thêm liên kết</button></div>
      <div className={styles.childList}>{footer.legalLinks.map((link, index) => <div className={styles.childRow} key={link.id}><span className={styles.dragHandle}><Icon name="drag" /></span><Field label="Tên hiển thị"><input value={link.label} onChange={(event) => { const legalLinks = [...footer.legalLinks]; legalLinks[index] = { ...link, label: event.target.value }; update({ legalLinks }); }} /></Field><Field label="Đường dẫn"><input value={link.href} onChange={(event) => { const legalLinks = [...footer.legalLinks]; legalLinks[index] = { ...link, href: event.target.value }; update({ legalLinks }); }} /></Field><button className={styles.iconDanger} type="button" title="Xóa liên kết" onClick={() => update({ legalLinks: footer.legalLinks.filter((item) => item.id !== link.id) })}><Icon name="trash" /></button></div>)}</div>
      {!footer.legalLinks.length ? <div className={styles.inlineEmpty}>Chưa có liên kết pháp lý.</div> : null}
      <div className={styles.footerSaveBar}><span>{dirty ? "Có thay đổi chưa lưu" : "Dữ liệu đã được lưu"}</span><button className={styles.primaryButton} disabled={!dirty || busy} type="button" onClick={onSave}>{busy ? <Spinner /> : <Icon name="save" />} {busy ? "Đang lưu..." : "Lưu thay đổi"}</button></div>
    </section>
  </div>;
}

function NewsPanel({ news, assets, dirty, busy, onChange, onSave }: { news: ManagedNewsItem[]; assets: ManagedAsset[]; dirty: boolean; busy: boolean; onChange: (news: ManagedNewsItem[]) => void; onSave: () => void }) {
  const [activeId, setActiveId] = useState(news[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const activeIndex = news.findIndex((item) => item.id === activeId);
  const active = news[activeIndex] ?? news[0];
  const filtered = news.filter((item) => matchesSearch(`${item.title} ${translate(item.title, "vi")} ${item.category} ${translate(item.category, "vi")}`, query));
  function update(patch: Partial<ManagedNewsItem>) { const index = news.findIndex((item) => item.id === active?.id); if (index < 0) return; const next = [...news]; next[index] = { ...next[index], ...patch }; onChange(next); }
  function add() { const item: ManagedNewsItem = { id: createId("news"), title: "Tin tức mới", date: new Date().toLocaleDateString("vi-VN"), category: "Tin doanh nghiệp", image: "", summary: "", highlights: [], status: "draft" }; onChange([item, ...news]); setActiveId(item.id); }
  return <ContentEditorLayout title="Danh sách tin tức" count={news.length} query={query} onQuery={setQuery} onAdd={add} addLabel="Thêm tin tức" dirty={dirty} busy={busy} onSave={onSave}
    list={filtered.map((item) => <button type="button" key={item.id} className={`${styles.contentListItem} ${active?.id === item.id ? styles.contentListActive : ""}`} onClick={() => setActiveId(item.id)}><div className={styles.listThumb}>{item.image ? <img src={item.image} alt="" /> : <Icon name="image" />}</div><span><strong>{item.title}</strong><small>{item.category || "Chưa phân loại"} · {item.date || "Chưa có ngày"}</small></span><StatusBadge status={item.status} /></button>)}>
      {active ? <EditorCard eyebrow="Biên tập tin tức" title={active.title} status={active.status} onStatus={(status) => update({ status })} onDelete={() => { if (window.confirm(`Xóa tin “${active.title}”?`)) { const next = news.filter((item) => item.id !== active.id); onChange(next); setActiveId(next[0]?.id ?? ""); } }}>
        <Field label="Tiêu đề tin" required><input value={active.title} onChange={(event) => update({ title: event.target.value })} placeholder="Nhập tiêu đề rõ ràng" /></Field>
        <div className={styles.formGrid2}><Field label="Ngày đăng"><input value={active.date} onChange={(event) => update({ date: event.target.value })} placeholder="14/07/2026" /></Field><Field label="Chuyên mục"><input value={active.category} onChange={(event) => update({ category: event.target.value })} placeholder="Tin doanh nghiệp" /></Field></div>
        <ImageField value={active.image} assets={assets} onChange={(image) => update({ image })} />
        <Field label="Tóm tắt" hint="Đoạn giới thiệu hiển thị trên thẻ tin tức"><textarea rows={5} value={active.summary} onChange={(event) => update({ summary: event.target.value })} /></Field>
        <Field label="Điểm nổi bật" hint="Mỗi dòng là một ý"><textarea rows={5} value={(active.highlights ?? []).join("\n")} onChange={(event) => update({ highlights: toLines(event.target.value) })} placeholder={"Nội dung nổi bật thứ nhất\nNội dung nổi bật thứ hai"} /></Field>
        <div className={styles.formGrid2}><Field label="Tên nút liên kết"><input value={active.sourceLabel ?? ""} onChange={(event) => update({ sourceLabel: event.target.value })} placeholder="Xem chi tiết" /></Field><Field label="Đường dẫn nguồn"><input value={active.sourceUrl ?? ""} onChange={(event) => update({ sourceUrl: event.target.value })} placeholder="https://..." /></Field></div>
      </EditorCard> : <EmptyState icon="news" title="Chưa có tin tức" text="Nhấn “Thêm tin tức” để tạo nội dung đầu tiên." />}
    </ContentEditorLayout>;
}

function ProjectsPanel({ projects, assets, dirty, busy, onChange, onSave }: { projects: ManagedProject[]; assets: ManagedAsset[]; dirty: boolean; busy: boolean; onChange: (projects: ManagedProject[]) => void; onSave: () => void }) {
  const [activeId, setActiveId] = useState(projects[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const activeIndex = projects.findIndex((item) => item.id === activeId);
  const active = projects[activeIndex] ?? projects[0];
  const filtered = projects.filter((item) => matchesSearch(`${item.title} ${translate(item.title, "vi")} ${item.region} ${translate(item.region, "vi")} ${item.category} ${translate(item.category, "vi")}`, query));
  function update(patch: Partial<ManagedProject>) { const index = projects.findIndex((item) => item.id === active?.id); if (index < 0) return; const next = [...projects]; next[index] = { ...next[index], ...patch }; onChange(next); }
  function add() { const slug = `du-an-moi-${Date.now().toString().slice(-5)}`; const item: ManagedProject = { id: createId("project"), slug, title: "Dự án mới", category: "Dự án", description: "", image: "", href: `/projects/${slug}`, region: "", capacity: "", scope: "", status: "draft" }; onChange([item, ...projects]); setActiveId(item.id); }
  return <ContentEditorLayout title="Danh sách dự án" count={projects.length} query={query} onQuery={setQuery} onAdd={add} addLabel="Thêm dự án" dirty={dirty} busy={busy} onSave={onSave}
    list={filtered.map((item) => <button type="button" key={item.id} className={`${styles.contentListItem} ${active?.id === item.id ? styles.contentListActive : ""}`} onClick={() => setActiveId(item.id)}><div className={styles.listThumb}>{item.image ? <img src={item.image} alt="" /> : <Icon name="projects" />}</div><span><strong>{item.title}</strong><small>{item.region || "Chưa có khu vực"} · {item.category || "Dự án"}</small></span><StatusBadge status={item.status} /></button>)}>
      {active ? <EditorCard eyebrow="Biên tập dự án" title={active.title} status={active.status} onStatus={(status) => update({ status })} onDelete={() => { if (window.confirm(`Xóa dự án “${active.title}”?`)) { const next = projects.filter((item) => item.id !== active.id); onChange(next); setActiveId(next[0]?.id ?? ""); } }}>
        <Field label="Tên dự án" required><input value={active.title} onChange={(event) => { const title = event.target.value; update({ title, ...(active.slug.startsWith("du-an-moi-") ? { slug: slugify(title), href: `/projects/${slugify(title)}` } : {}) }); }} /></Field>
        <div className={styles.formGrid2}><Field label="Nhóm dự án"><input value={active.category} onChange={(event) => update({ category: event.target.value })} placeholder="Triển khai quốc tế" /></Field><Field label="Đường dẫn trang"><input value={active.href} onChange={(event) => update({ href: event.target.value })} /></Field></div>
        <ImageField value={active.image} assets={assets} onChange={(image) => update({ image })} />
        <Field label="Mô tả ngắn"><textarea rows={5} value={active.description} onChange={(event) => update({ description: event.target.value })} /></Field>
        <div className={styles.formGrid3}><Field label="Khu vực"><input value={active.region} onChange={(event) => update({ region: event.target.value })} placeholder="Việt Nam" /></Field><Field label="Công suất"><input value={active.capacity} onChange={(event) => update({ capacity: event.target.value })} placeholder="4 x 400 TPH" /></Field><Field label="Phạm vi"><input value={active.scope} onChange={(event) => update({ scope: event.target.value })} placeholder="Thiết kế và cung cấp" /></Field></div>
        <Field label="Slug" hint={`Trang chi tiết: /projects/${active.slug}`}><input value={active.slug} onChange={(event) => { const slug = slugify(event.target.value); update({ slug, href: `/projects/${slug}` }); }} /></Field>
      </EditorCard> : <EmptyState icon="projects" title="Chưa có dự án" text="Nhấn “Thêm dự án” để tạo hồ sơ đầu tiên." />}
    </ContentEditorLayout>;
}

function RequestsPanel({ requests, busyKey, onRead, onDelete, onRefresh }: { requests: ContactRequest[]; busyKey: string; onRead: (id: string, status: "new" | "read") => void; onDelete: (id: string) => void; onRefresh: () => void }) {
  const [filter, setFilter] = useState<"all" | "new" | "read">("all");
  const [query, setQuery] = useState("");
  const filtered = requests.filter((item) => (filter === "all" || item.status === filter) && matchesSearch(`${item.fullName} ${item.email} ${item.phone} ${item.companyName ?? ""}`, query));
  return <section className={styles.surface}>
    <SectionHeading title={`Hộp thư (${requests.length})`} description="Các yêu cầu được gửi từ biểu mẫu liên hệ và nút Gửi yêu cầu trên website." action={<button className={styles.secondaryButton} type="button" onClick={onRefresh}><Icon name="refresh" /> Làm mới</button>} />
    <div className={styles.requestToolbar}><div className={styles.segmented}><button className={filter === "all" ? styles.segmentActive : ""} type="button" onClick={() => setFilter("all")}>Tất cả <span>{requests.length}</span></button><button className={filter === "new" ? styles.segmentActive : ""} type="button" onClick={() => setFilter("new")}>Chưa đọc <span>{requests.filter((item) => item.status === "new").length}</span></button><button className={filter === "read" ? styles.segmentActive : ""} type="button" onClick={() => setFilter("read")}>Đã xử lý <span>{requests.filter((item) => item.status === "read").length}</span></button></div><Search value={query} onChange={setQuery} placeholder="Tìm tên, email, số điện thoại..." /></div>
    {filtered.length ? <div className={styles.requestList}>{filtered.map((request) => <article className={`${styles.requestCard} ${request.status === "new" ? styles.requestNew : ""}`} key={request.id}>
      <div className={styles.requestAvatar}>{request.fullName.trim().charAt(0).toUpperCase() || "K"}</div>
      <div className={styles.requestMain}><div className={styles.requestTitle}><div><StatusBadge status={request.status} /><h3>{request.fullName}</h3><span>{request.companyName || "Khách hàng cá nhân"}</span></div><time>{formatDate(request.createdAt)}</time></div><p className={styles.requestMessage}>{request.message || "Khách hàng chưa để lại nội dung chi tiết."}</p><div className={styles.contactChips}><a href={`mailto:${request.email}`}><Icon name="mail" /> {request.email}</a><a href={`tel:${request.phone}`}><Icon name="phone" /> {request.phone}</a>{request.country ? <span><Icon name="location" /> {request.country}</span> : null}{request.industry ? <span><Icon name="products" /> {request.industry}</span> : null}</div><div className={styles.requestActions}><a className={styles.primaryButton} href={`mailto:${request.email}?subject=Phản hồi yêu cầu từ Thermax Vietnam`}><Icon name="mail" /> Phản hồi email</a><button className={styles.secondaryButton} disabled={busyKey === `request-${request.id}`} type="button" onClick={() => onRead(request.id, request.status === "new" ? "read" : "new")}><Icon name={request.status === "new" ? "check" : "refresh"} /> {request.status === "new" ? "Đánh dấu đã xử lý" : "Chuyển về chưa đọc"}</button><button className={styles.iconDanger} type="button" title="Xóa yêu cầu" onClick={() => onDelete(request.id)}><Icon name="trash" /></button></div></div>
    </article>)}</div> : <EmptyState icon="inbox" title="Không có yêu cầu phù hợp" text="Các yêu cầu mới từ khách hàng sẽ xuất hiện tại đây." />}
  </section>;
}

function ContentEditorLayout({ title, count, query, onQuery, onAdd, addLabel, dirty, busy, onSave, list, children }: { title: string; count: number; query: string; onQuery: (value: string) => void; onAdd: () => void; addLabel: string; dirty: boolean; busy: boolean; onSave: () => void; list: ReactNode; children: ReactNode }) {
  return <div className={styles.editorLayout}><aside className={styles.contentList}><div className={styles.contentListHeader}><div><h2>{title}</h2><span>{count} nội dung</span></div><button className={styles.primaryButton} type="button" onClick={onAdd}><Icon name="plus" /> {addLabel}</button></div><Search value={query} onChange={onQuery} placeholder="Tìm kiếm nội dung..." /><div className={styles.contentListScroll}>{list}</div></aside><section className={styles.editorPane}>{children}<div className={styles.stickySave}><span>{dirty ? <><i /> Có thay đổi chưa lưu</> : <><Icon name="check" /> Tất cả thay đổi đã được lưu</>}</span><button className={styles.primaryButton} disabled={!dirty || busy} type="button" onClick={onSave}>{busy ? <Spinner /> : <Icon name="save" />} {busy ? "Đang lưu..." : "Lưu thay đổi"}</button></div></section></div>;
}

function EditorCard({ eyebrow, title, status, onStatus, onDelete, children }: { eyebrow: string; title: string; status?: "draft" | "published"; onStatus: (status: "draft" | "published") => void; onDelete: () => void; children: ReactNode }) {
  return <div className={styles.editorCard}><div className={styles.editorCardHeader}><div><span>{eyebrow}</span><h2>{title || "Nội dung chưa đặt tên"}</h2></div><div className={styles.editorHeaderActions}><label className={styles.statusSelect}><span>Trạng thái</span><select value={status ?? "published"} onChange={(event) => onStatus(event.target.value as "draft" | "published")}><option value="published">Đã xuất bản</option><option value="draft">Bản nháp</option></select></label><button className={styles.iconDanger} type="button" title="Xóa nội dung" onClick={onDelete}><Icon name="trash" /></button></div></div><div className={styles.editorForm}>{children}</div></div>;
}

function ImageField({ value, assets, onChange }: { value: string; assets: ManagedAsset[]; onChange: (value: string) => void }) {
  return <div className={styles.imageField}><div className={styles.imagePreview}>{value ? <img src={value} alt="Xem trước" /> : <div><Icon name="image" /><span>Chưa chọn ảnh</span></div>}</div><div className={styles.imageControls}><Field label="Ảnh minh họa" hint="Dán URL hoặc chọn ảnh từ thư viện"><input value={value} onChange={(event) => onChange(event.target.value)} placeholder="https://..." /></Field>{assets.length ? <label className={styles.librarySelect}><span>Chọn nhanh từ thư viện</span><select value="" onChange={(event) => { if (event.target.value) onChange(event.target.value); }}><option value="">-- Chọn một ảnh --</option>{assets.map((asset) => <option key={asset.id} value={asset.url}>{asset.title}</option>)}</select></label> : null}</div></div>;
}

function LoginScreen({ password, busy, notice, onPassword, onSubmit }: { password: string; busy: boolean; notice: Notice; onPassword: (value: string) => void; onSubmit: (event: FormEvent<HTMLFormElement>) => void }) {
  return <main className={styles.loginPage}><div className={styles.loginVisual}><div className={styles.loginBrand}><div className={styles.brandMark}>T</div><div><strong>THERMAX</strong><span>Vietnam</span></div></div><div className={styles.loginMessage}><span>Hệ thống quản trị nội dung</span><h1>Chào mừng anh/chị quay lại.</h1><p>Quản lý nội dung website Thermax Vietnam đơn giản, an toàn và tập trung tại một nơi.</p></div><div className={styles.loginFoot}>© {new Date().getFullYear()} Thermax Vietnam</div></div><div className={styles.loginPanel}><form className={styles.loginCard} onSubmit={onSubmit}><div className={styles.loginIcon}><Icon name="lock" /></div><span>Đăng nhập quản trị</span><h2>Tiếp tục vào hệ thống</h2><p>Sử dụng mật khẩu được cấp để quản lý website.</p><Field label="Mật khẩu"><div className={styles.passwordField}><Icon name="lock" /><input autoFocus type="password" value={password} onChange={(event) => onPassword(event.target.value)} placeholder="Nhập mật khẩu" required /></div></Field>{notice ? <div className={styles.loginError}><Icon name="warning" /> {notice.text}</div> : null}<button className={styles.loginButton} disabled={busy} type="submit">{busy ? <><Spinner /> Đang kiểm tra...</> : <>Đăng nhập <Icon name="arrow" /></>}</button><small>Nếu quên mật khẩu, vui lòng liên hệ đơn vị quản trị website.</small></form></div></main>;
}

function ConfigurationScreen() { return <main className={styles.statePage}><div className={styles.stateCard}><span className={styles.stateIcon}><Icon name="settings" /></span><span>Cần cấu hình hệ thống</span><h1>Trang quản trị chưa sẵn sàng</h1><p>Vui lòng bổ sung mật khẩu quản trị, khóa phiên đăng nhập, MongoDB và Cloudinary trong biến môi trường trước khi bàn giao.</p><a href="/">Quay về website</a></div></main>; }
function AdminLoading() { return <main className={styles.statePage}><div className={styles.loaderCard}><div className={styles.brandMark}>T</div><Spinner /><span>Đang khởi động hệ thống quản trị...</span></div></main>; }
function AdminSkeleton() { return <div className={styles.skeletonGrid}>{[1, 2, 3, 4].map((item) => <div key={item} />)}</div>; }

function StatCard({ label, value, note, icon, tone, onClick }: { label: string; value: number; note: string; icon: IconName; tone: string; onClick: () => void }) { return <button className={`${styles.statCard} ${styles[`tone${tone}`]}`} type="button" onClick={onClick}><span className={styles.statIcon}><Icon name={icon} /></span><span className={styles.statCopy}><small>{label}</small><strong>{value}</strong><span>{note}</span></span><Icon name="arrow" /></button>; }
function DashboardTask({ icon, title, description, action, onClick, urgent = false }: { icon: IconName; title: string; description: string; action: string; onClick: () => void; urgent?: boolean }) { return <div className={styles.dashboardTask}><span className={urgent ? styles.taskUrgent : ""}><Icon name={icon} /></span><div><strong>{title}</strong><p>{description}</p></div><button type="button" onClick={onClick}>{action} <Icon name="arrow" /></button></div>; }
function QuickAction({ icon, title, text, onClick }: { icon: IconName; title: string; text: string; onClick: () => void }) { return <button className={styles.quickAction} type="button" onClick={onClick}><span><Icon name={icon} /></span><strong>{title}</strong><small>{text}</small><Icon name="arrow" /></button>; }
function SectionHeading({ title, description, action }: { title: string; description?: string; action?: ReactNode }) { return <div className={styles.sectionHeading}><div><h2>{title}</h2>{description ? <p>{description}</p> : null}</div>{action}</div>; }
function Field({ label, hint, required, children }: { label: string; hint?: string; required?: boolean; children: ReactNode }) { return <label className={styles.field}><span>{label}{required ? <b> *</b> : null}</span>{children}{hint ? <small>{hint}</small> : null}</label>; }
function Search({ value, onChange, placeholder }: { value: string; onChange: (value: string) => void; placeholder: string }) { return <label className={styles.search}><Icon name="search" /><input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} /></label>; }
function StatusBadge({ status }: { status?: "new" | "read" | "draft" | "published" }) { const normalized = status ?? "published"; const labels = { new: "Mới", read: "Đã xử lý", draft: "Bản nháp", published: "Đã xuất bản" }; return <span className={`${styles.statusBadge} ${styles[`status_${normalized}`]}`}><i />{labels[normalized]}</span>; }
function EmptyState({ icon, title, text }: { icon: IconName; title: string; text: string }) { return <div className={styles.emptyState}><span><Icon name={icon} /></span><h3>{title}</h3><p>{text}</p></div>; }
function Toast({ notice, onClose }: { notice: Exclude<Notice, null>; onClose: () => void }) { return <div className={`${styles.toast} ${styles[`toast_${notice.tone}`]}`}><span><Icon name={notice.tone === "success" ? "check" : notice.tone === "error" ? "warning" : "info"} /></span><p>{notice.text}</p><button type="button" onClick={onClose}><Icon name="close" /></button></div>; }
function Spinner() { return <span className={styles.spinner} aria-hidden="true" />; }

type IconName = "dashboard" | "image" | "products" | "footer" | "news" | "projects" | "inbox" | "external" | "logout" | "menu" | "close" | "chevron" | "chevronUp" | "chevronDown" | "check" | "arrow" | "plus" | "save" | "upload" | "copy" | "trash" | "drag" | "arrowUp" | "arrowDown" | "refresh" | "mail" | "phone" | "location" | "search" | "lock" | "warning" | "settings" | "info";
function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    dashboard: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
    image: <><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m21 15-5-5L5 20"/></>, products: <><path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z"/><path d="m4 12 8 4.5 8-4.5M4 16.5l8 4.5 8-4.5"/></>, footer: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 14h18M7 17h4M14 17h3"/></>, news: <><path d="M5 3h14a2 2 0 0 1 2 2v14H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M7 7h8M7 11h10M7 15h6"/></>, projects: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/></>, inbox: <><path d="M4 4h16l2 10v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5L4 4Z"/><path d="M2 14h6l2 3h4l2-3h6"/></>, external: <><path d="M14 3h7v7M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></>, logout: <><path d="M10 17l5-5-5-5M15 12H3"/><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/></>, menu: <path d="M4 7h16M4 12h16M4 17h16"/>, close: <path d="m6 6 12 12M18 6 6 18"/>, chevron: <path d="m9 18 6-6-6-6"/>, chevronUp: <path d="m18 15-6-6-6 6"/>, chevronDown: <path d="m6 9 6 6 6-6"/>, check: <path d="m5 12 4 4L19 6"/>, arrow: <path d="M5 12h14M13 6l6 6-6 6"/>, plus: <path d="M12 5v14M5 12h14"/>, save: <><path d="M5 3h12l4 4v14H3V3h2Z"/><path d="M7 3v6h10V3M7 21v-8h10v8"/></>, upload: <><path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 15v5h16v-5"/></>, copy: <><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M15 9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4"/></>, trash: <><path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V3h6v4"/></>, drag: <path d="M8 6h.01M8 12h.01M8 18h.01M16 6h.01M16 12h.01M16 18h.01"/>, arrowUp: <path d="M12 19V5M6 11l6-6 6 6"/>, arrowDown: <path d="M12 5v14M18 13l-6 6-6-6"/>, refresh: <><path d="M20 7h-5V2"/><path d="M20 7a9 9 0 1 0 1 8"/></>, mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>, phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.8 2.1Z"/>, location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>, search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>, lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>, warning: <><path d="M12 3 2 21h20L12 3Z"/><path d="M12 9v5M12 18h.01"/></>, settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></>, info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}
