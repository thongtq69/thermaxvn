import { PageShell } from "../../../components/PageShell";
import { InnerHero } from "../../../components/InnerHero";
import { IntroBlock } from "../../../components/IntroBlock";
import { InnerSubNav } from "../../../components/InnerSubNav";
import { SolutionsTabs } from "../../../components/SolutionsTabs";
import { CaseStudiesRow } from "../../../components/CaseStudiesRow";
import { imageUrls } from "../../../lib/site";
import { industrialProductsSolutions, sharedCaseStudies } from "../../../lib/segments";

export const metadata = {
  title: "Sản phẩm | Thermax Vietnam",
  description:
    "Giải pháp công nghiệp tích hợp cho hiệu quả năng lượng, tối ưu quy trình và nhu cầu phát triển bền vững.",
};

export default function IndustrialProductsPage() {
  return (
    <PageShell>
      <InnerHero
        title="Sản phẩm"
        description="Giải pháp công nghiệp tích hợp cho hiệu quả năng lượng, tối ưu quy trình và nhu cầu phát triển bền vững"
        image={imageUrls.bannerPortfolio}
        mobileImage={imageUrls.bannerPortfolioMobile}
        homeLabel="Trang chủ"
        breadcrumb={[
          { label: "Sản phẩm" },
        ]}
      />

      <InnerSubNav
        items={[
          { label: "Overview", href: "#overview" },
          { label: "Solutions", href: "#solutions" },
          { label: "Industries", href: "#industries" },
        ]}
        context="Business Portfolio"
        current="Industrial Products"
        options={[
          { label: "Industrial Infra", href: "/business-portfolio/industrial-infrastructure" },
          { label: "Green Solutions", href: "/business-segments/green-solutions" },
          { label: "Chemicals", href: "/business-portfolio/chemicals" },
        ]}
      />

      <IntroBlock
        headline={
          <>
            Mảng Sản phẩm công nghiệp của chúng tôi được thiết kế để giải quyết ba thách thức trọng yếu của ngành hiện nay:
            <span className="red"> ứng phó biến đổi khí hậu, bảo đảm năng lượng sạch và quản lý khan hiếm nước.</span>
          </>
        }
        body={
          <>
            <p>
              Thông qua các mảng giải pháp chính như kiểm soát ô nhiễm không khí, nhiệt quy trình, kỹ thuật hơi,
              làm mát và gia nhiệt, nước và chất thải, Thermax cung cấp các giải pháp tiên tiến giúp nâng cao
              hiệu quả vận hành, đáp ứng yêu cầu tuân thủ và giảm tác động môi trường.
            </p>
            <p>
              Các giải pháp này được hỗ trợ bởi năng lực kỹ thuật toàn cầu và nền tảng số Thermax EDGE Live®,
              giúp khách hàng theo dõi hiệu suất theo thời gian thực và ra quyết định dựa trên dữ liệu.
            </p>
          </>
        }
      />

      <SolutionsTabs items={industrialProductsSolutions} />

      <CaseStudiesRow items={sharedCaseStudies} />
    </PageShell>
  );
}
