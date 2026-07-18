import { PageShell } from "../../../components/PageShell";
import { InnerHero } from "../../../components/InnerHero";
import { IntroBlock } from "../../../components/IntroBlock";
import { SolutionsTabs } from "../../../components/SolutionsTabs";
import { imageUrls } from "../../../lib/site";
import { industrialProductsSolutions } from "../../../lib/segments";
import { IndustrialProductHighlights } from "../../../components/IndustrialProductHighlights";

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

      <IntroBlock
        className="industrial-products-intro"
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
      <IndustrialProductHighlights />
    </PageShell>
  );
}
