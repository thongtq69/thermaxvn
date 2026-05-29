import { PageShell } from "../../../components/PageShell";
import { InnerHero } from "../../../components/InnerHero";
import { ProjectShowcase } from "../../../components/ProjectShowcase";
import { imageUrls } from "../../../lib/site";
import { industrialInfrastructureProjects } from "../../../lib/projects";

export const metadata = {
  title: "Các dự án tại Việt Nam | Thermax Vietnam",
  description:
    "Sự tin tưởng của khách hàng đối với các giải pháp bền vững của Thermax tại Việt Nam là niềm tự hào của chúng tôi",
};

export default function IndustrialInfrastructurePage() {
  return (
    <PageShell>
      <InnerHero
        title="Các dự án tại Việt Nam"
        description="Sự tin tưởng của khách hàng đối với các giải pháp bền vững của Thermax tại Việt Nam là niềm tự hào của chúng tôi"
        image={imageUrls.bannerInfra}
        mobileImage={imageUrls.bannerInfraMobile}
        homeLabel="Trang chủ"
        breadcrumb={[
          { label: "Dự án" },
        ]}
      />

      <ProjectShowcase items={industrialInfrastructureProjects} showHeader={false} />
    </PageShell>
  );
}
