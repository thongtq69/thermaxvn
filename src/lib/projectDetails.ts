import type { Locale } from "./i18n";
import { industrialInfrastructureProjects } from "./projects";

type LocalizedText = Record<Locale, string>;

export type ProjectDetailSection = {
  title: LocalizedText;
  paragraphs?: LocalizedText[];
  bullets?: LocalizedText[];
  image: string;
  imageAlt: LocalizedText;
};

export type ProjectDetail = {
  slug: string;
  title: LocalizedText;
  eyebrow: LocalizedText;
  summary: LocalizedText;
  image: string;
  facts: { label: LocalizedText; value: LocalizedText }[];
  sections: ProjectDetailSection[];
  sourceUrl: string;
};

const projectImage = (index: number) => industrialInfrastructureProjects[index].image;
const s3 = "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public";

export const projectDetails: ProjectDetail[] = [
  {
    slug: "projects-and-energy-solutions",
    title: {
      en: "Projects and Energy Solutions",
      vi: "Dự án và Giải pháp Năng lượng",
    },
    eyebrow: { en: "Turnkey EPC", vi: "EPC trọn gói" },
    summary: {
      en: "Turnkey EPC and asset management solutions from concept to commissioning, engineered for safe execution, assured performance and low lifecycle cost.",
      vi: "Giải pháp EPC trọn gói và quản lý tài sản từ ý tưởng đến chạy thử, được thiết kế để triển khai an toàn, bảo đảm hiệu suất và tối ưu chi phí vòng đời.",
    },
    image: projectImage(0),
    facts: [
      { label: { en: "Installations", vi: "Công trình" }, value: { en: "175+", vi: "175+" } },
      { label: { en: "Countries served", vi: "Quốc gia phục vụ" }, value: { en: "15+", vi: "15+" } },
      { label: { en: "O&M customers", vi: "Khách hàng O&M" }, value: { en: "125+", vi: "125+" } },
    ],
    sections: [
      {
        title: { en: "Overview", vi: "Tổng quan" },
        image: `${s3}/2025-10/process-and-energy-solutions-desktop.jpg`,
        imageAlt: {
          en: "Thermax projects and energy solutions facility",
          vi: "Công trình dự án và giải pháp năng lượng Thermax",
        },
        paragraphs: [
          {
            en: "Thermax delivers EPC and asset management solutions for power plants, refinery and petrochemical units, flue gas desulphurisation, metals and ferroalloys, biofuels, and carbon capture and utilisation plants.",
            vi: "Thermax triển khai các giải pháp EPC và quản lý tài sản cho nhà máy điện, tổ hợp lọc dầu và hóa dầu, hệ thống khử lưu huỳnh khí thải, luyện kim và ferroalloy, nhiên liệu sinh học, cũng như nhà máy thu giữ và sử dụng carbon.",
          },
          {
            en: "Engineering, procurement and construction are integrated with modularisation, standardisation and digital project controls to shorten delivery cycles and support right-first-time execution.",
            vi: "Thiết kế, mua sắm và thi công được tích hợp cùng năng lực module hóa, tiêu chuẩn hóa và công cụ quản lý dự án số nhằm rút ngắn tiến độ và bảo đảm triển khai đúng ngay từ đầu.",
          },
        ],
      },
      {
        title: { en: "Core capabilities", vi: "Năng lực cốt lõi" },
        image: `${s3}/2026-04/Tumbnail_21.jpg`,
        imageAlt: {
          en: "Refinery and petrochemical EPC facility",
          vi: "Tổ hợp EPC lọc dầu và hóa dầu",
        },
        bullets: [
          { en: "Turnkey EPC, EPCM and limited EPC delivery", vi: "Triển khai EPC trọn gói, EPCM và EPC giới hạn" },
          { en: "Power plants and industrial utility systems", vi: "Nhà máy điện và hệ thống tiện ích công nghiệp" },
          { en: "Refinery, petrochemical and process units", vi: "Tổ hợp lọc dầu, hóa dầu và các phân xưởng công nghệ" },
          { en: "Digitally enabled operation and maintenance", vi: "Vận hành và bảo trì được hỗ trợ bằng công nghệ số" },
        ],
      },
      {
        title: { en: "Delivery approach", vi: "Phương thức triển khai" },
        image: `${s3}/2026-03/blurb-modularisation.jpg`,
        imageAlt: {
          en: "Thermax turnkey EPC project execution",
          vi: "Triển khai dự án EPC trọn gói của Thermax",
        },
        paragraphs: [
          {
            en: "Global sourcing, qualified suppliers, real-time project dashboards and disciplined construction management help control schedule, quality, safety and cost across complex industrial projects.",
            vi: "Mạng lưới mua sắm toàn cầu, nhà cung cấp được thẩm định, bảng điều khiển dự án theo thời gian thực và quản lý thi công chặt chẽ giúp kiểm soát tiến độ, chất lượng, an toàn và chi phí của các dự án công nghiệp phức tạp.",
          },
        ],
      },
    ],
    sourceUrl: "https://www.thermaxglobal.com/industrial-infra/projects-and-energy-solutions",
  },
  {
    slug: "large-boilers-and-fired-heaters",
    title: {
      en: "Large Boilers and Fired Heaters",
      vi: "Lò hơi công suất lớn và lò gia nhiệt",
    },
    eyebrow: { en: "Steam and power", vi: "Hơi và điện" },
    summary: {
      en: "Custom-engineered boiler and fired heater solutions for reliable steam generation, power production and demanding process heating duties.",
      vi: "Giải pháp lò hơi và lò gia nhiệt thiết kế theo yêu cầu cho sản xuất hơi, phát điện và các ứng dụng gia nhiệt quy trình khắt khe.",
    },
    image: projectImage(1),
    facts: [
      { label: { en: "Installations", vi: "Công trình" }, value: { en: "2,700+", vi: "2.700+" } },
      { label: { en: "Global presence", vi: "Thị trường" }, value: { en: "50+ countries", vi: "50+ quốc gia" } },
      { label: { en: "Fuels processed", vi: "Loại nhiên liệu" }, value: { en: "140+", vi: "140+" } },
    ],
    sections: [
      {
        title: { en: "Overview", vi: "Tổng quan" },
        image: `${s3}/2026-04/Untitled%20design%20%2842%29.png`,
        imageAlt: {
          en: "Large boiler and fired heater installation",
          vi: "Công trình lò hơi công suất lớn và lò gia nhiệt",
        },
        paragraphs: [
          {
            en: "Thermax Babcock & Wilcox Energy Solutions supplies customised systems for industrial process steam and power generation using solid, liquid and gaseous fuels, turbine or engine exhaust, and industrial waste heat.",
            vi: "Thermax Babcock & Wilcox Energy Solutions cung cấp các hệ thống tùy chỉnh cho hơi quy trình và phát điện, sử dụng nhiên liệu rắn, lỏng, khí, khí xả tuabin hoặc động cơ và nhiệt thải công nghiệp.",
          },
        ],
      },
      {
        title: { en: "Solution portfolio", vi: "Danh mục giải pháp" },
        image: `${s3}/2026-04/Untitled%20design%20%2843%29.png`,
        imageAlt: {
          en: "Thermax fuel conversion solution",
          vi: "Giải pháp chuyển đổi nhiên liệu Thermax",
        },
        bullets: [
          { en: "Solid fuel, agro-waste and biomass-fired boilers", vi: "Lò hơi đốt nhiên liệu rắn, phế phẩm nông nghiệp và sinh khối" },
          { en: "Oil and gas-fired boilers and lean-gas systems", vi: "Lò hơi đốt dầu, khí và hệ thống đốt khí nghèo" },
          { en: "Waste heat recovery boilers and HRSG systems", vi: "Lò thu hồi nhiệt thải và hệ thống HRSG" },
          { en: "Fired heaters and utility boilers", vi: "Lò gia nhiệt và lò hơi tiện ích" },
        ],
      },
      {
        title: { en: "Engineered for performance", vi: "Thiết kế hướng tới hiệu suất" },
        image: `${s3}/2025-09/Fuel-Conversion-Solutions.png`,
        imageAlt: {
          en: "Modularised boiler system prepared for delivery",
          vi: "Hệ thống lò hơi module hóa chuẩn bị bàn giao",
        },
        paragraphs: [
          {
            en: "Modular and skid-mounted configurations reduce site work and commissioning time, while multi-fuel designs, conservative heat release rates and advanced controls support efficiency, flexibility and long service life.",
            vi: "Cấu hình module và skid giúp giảm khối lượng thi công tại công trường và thời gian chạy thử; thiết kế đa nhiên liệu, mật độ tỏa nhiệt phù hợp và điều khiển tiên tiến bảo đảm hiệu suất, tính linh hoạt và tuổi thọ vận hành.",
          },
        ],
      },
    ],
    sourceUrl: "https://www.thermaxglobal.com/industrial-infra/large-boilers-and-fired-heaters",
  },
  {
    slug: "bi-drum-boiler-40-days",
    title: {
      en: "Bi-drum boiler commissioned in just 40 days",
      vi: "Lò hơi hai bao hơi được chạy thử chỉ trong 40 ngày",
    },
    eyebrow: { en: "Project case study", vi: "Dự án điển hình" },
    summary: {
      en: "A fast-track installation and commissioning project for CJ Bio in Indonesia, delivered with zero reported safety incidents.",
      vi: "Dự án lắp đặt và chạy thử rút gọn cho CJ Bio tại Indonesia, hoàn thành mà không ghi nhận sự cố an toàn nào.",
    },
    image: projectImage(2),
    facts: [
      { label: { en: "Location", vi: "Địa điểm" }, value: { en: "Indonesia", vi: "Indonesia" } },
      { label: { en: "Boiler capacity", vi: "Công suất lò" }, value: { en: "40 TPH", vi: "40 TPH" } },
      { label: { en: "Commissioning", vi: "Chạy thử" }, value: { en: "40 days", vi: "40 ngày" } },
    ],
    sections: [
      {
        title: { en: "Project overview", vi: "Tổng quan dự án" },
        image: `${s3}/2026-03/860px-Width-X-550px-Height_18.png`,
        imageAlt: {
          en: "Bi-drum boiler project overview in Indonesia",
          vi: "Tổng quan dự án lò hơi hai bao hơi tại Indonesia",
        },
        paragraphs: [
          {
            en: "CJ Bio required a high-capacity bi-drum boiler to support its pharmaceutical operations. Thermax completed erection and commissioning of the full plant in eight months, compared with a typical twelve-month programme.",
            vi: "CJ Bio cần một lò hơi hai bao hơi công suất lớn cho hoạt động sản xuất dược phẩm. Thermax hoàn thành lắp dựng và chạy thử toàn bộ nhà máy trong tám tháng, thay vì tiến độ thông thường khoảng mười hai tháng.",
          },
        ],
      },
      {
        title: { en: "Challenge and solution", vi: "Thách thức và giải pháp" },
        image: `${s3}/2026-04/Tumbnail_12.jpg`,
        imageAlt: {
          en: "Thermax project team executing the boiler solution",
          vi: "Đội ngũ Thermax triển khai giải pháp lò hơi",
        },
        paragraphs: [
          {
            en: "The project combined a very tight schedule with demanding safety and engineering requirements. Detailed planning, close logistics coordination, experienced site teams and rigorous quality control eliminated rework and kept execution on track.",
            vi: "Dự án có tiến độ rất gấp cùng yêu cầu cao về an toàn và kỹ thuật. Kế hoạch chi tiết, phối hợp logistics chặt chẽ, đội ngũ hiện trường giàu kinh nghiệm và kiểm soát chất lượng nghiêm ngặt đã loại bỏ việc làm lại và giữ đúng tiến độ.",
          },
        ],
      },
      {
        title: { en: "Result", vi: "Kết quả" },
        image: `${s3}/2026-04/Desktop_11.jpg`,
        imageAlt: {
          en: "Completed bi-drum boiler project result",
          vi: "Kết quả dự án lò hơi hai bao hơi sau khi hoàn thành",
        },
        bullets: [
          { en: "Commissioning completed in 40 days", vi: "Hoàn thành chạy thử trong 40 ngày" },
          { en: "Zero reported safety incidents", vi: "Không ghi nhận sự cố an toàn" },
          { en: "Earlier operational readiness and cost savings", vi: "Sẵn sàng vận hành sớm hơn và tiết kiệm chi phí" },
        ],
      },
    ],
    sourceUrl: "https://www.thermaxglobal.com/case-study/thermax-sets-a-record-by-installing-and-commissioning-a-bi-drum-boiler-in-just-40-days-for-a-pharmaceutical-major-in-indonesia",
  },
  {
    slug: "ultra-supercritical-boiler-800-mw",
    title: {
      en: "1x800 MW ultra-supercritical boiler package",
      vi: "Gói lò hơi siêu siêu tới hạn 1×800 MW",
    },
    eyebrow: { en: "Utility power", vi: "Điện quy mô tiện ích" },
    summary: {
      en: "A major boiler package supply order for an ultra-supercritical thermal power project in Central India.",
      vi: "Gói cung cấp lò hơi quy mô lớn cho dự án nhiệt điện siêu siêu tới hạn tại miền Trung Ấn Độ.",
    },
    image: projectImage(3),
    facts: [
      { label: { en: "Location", vi: "Khu vực" }, value: { en: "Central India", vi: "Miền Trung Ấn Độ" } },
      { label: { en: "Plant capacity", vi: "Công suất" }, value: { en: "1x800 MW", vi: "1×800 MW" } },
      { label: { en: "Order value", vi: "Giá trị đơn hàng" }, value: { en: "Approx. INR 1,600 crore", vi: "Khoảng 1.600 crore INR" } },
    ],
    sections: [
      {
        title: { en: "Project overview", vi: "Tổng quan dự án" },
        image: `${s3}/2026-04/Plant%20Improvement%20Projects_0.png`,
        imageAlt: {
          en: "Utility-scale boiler installation",
          vi: "Công trình lò hơi quy mô tiện ích",
        },
        paragraphs: [
          {
            en: "Thermax Babcock & Wilcox Energy Solutions secured the boiler package order from a leading thermal power projects company for a 1x800 MW ultra-supercritical power plant.",
            vi: "Thermax Babcock & Wilcox Energy Solutions nhận đơn hàng gói lò hơi từ một doanh nghiệp dự án nhiệt điện hàng đầu cho nhà máy điện siêu siêu tới hạn 1×800 MW.",
          },
        ],
      },
      {
        title: { en: "Scope of work", vi: "Phạm vi công việc" },
        image: `${s3}/2025-09/Modularization.png`,
        imageAlt: {
          en: "Large boiler modular manufacturing and supply",
          vi: "Sản xuất và cung cấp module lò hơi công suất lớn",
        },
        bullets: [
          { en: "Manufacturing and supply of the boiler package", vi: "Sản xuất và cung cấp gói lò hơi" },
          { en: "Supervision of installation and commissioning", vi: "Giám sát lắp đặt và chạy thử" },
          { en: "Performance testing", vi: "Kiểm thử hiệu suất" },
          { en: "Delivery aligned with contractual project milestones", vi: "Bàn giao theo các mốc tiến độ của hợp đồng" },
        ],
      },
      {
        title: { en: "Strategic significance", vi: "Ý nghĩa chiến lược" },
        image: `${s3}/2026-04/Digital%20Services_0.png`,
        imageAlt: {
          en: "Digital monitoring for advanced boiler performance",
          vi: "Giám sát số cho hiệu suất lò hơi tiên tiến",
        },
        paragraphs: [
          {
            en: "The order strengthens Thermax's position in large-scale energy solutions and demonstrates its capability to manufacture and deliver utility boiler packages for advanced steam parameters.",
            vi: "Đơn hàng củng cố vị thế của Thermax trong các giải pháp năng lượng quy mô lớn và thể hiện năng lực sản xuất, bàn giao gói lò hơi tiện ích cho các thông số hơi tiên tiến.",
          },
        ],
      },
    ],
    sourceUrl: "https://www.thermaxglobal.com/wp-content/uploads/2026/03/SEintimation-pressrelase.pdf",
  },
  {
    slug: "refinery-petrochemical-units",
    title: {
      en: "Industrial EPC – Refinery, Petrochemicals & Chemicals",
      vi: "EPC công nghiệp – Lọc dầu, Hóa dầu & Hóa chất",
    },
    eyebrow: { en: "International delivery", vi: "Triển khai quốc tế" },
    summary: {
      en: "Integrated EPC delivery for complex greenfield and brownfield refinery and petrochemical projects, backed by more than five decades of OEM and engineering experience.",
      vi: "Giải pháp EPC tích hợp cho các dự án lọc dầu và hóa dầu xây mới hoặc cải hoán phức tạp, dựa trên hơn năm thập kỷ kinh nghiệm OEM và kỹ thuật.",
    },
    image: projectImage(4),
    facts: [
      { label: { en: "Project type", vi: "Loại dự án" }, value: { en: "Greenfield & brownfield", vi: "Xây mới & cải hoán" } },
      { label: { en: "Delivery model", vi: "Mô hình triển khai" }, value: { en: "Integrated EPC", vi: "EPC tích hợp" } },
      { label: { en: "Focus", vi: "Trọng tâm" }, value: { en: "Safety, quality & compliance", vi: "An toàn, chất lượng & tuân thủ" } },
    ],
    sections: [
      {
        title: { en: "Overview", vi: "Tổng quan" },
        image: `${s3}/2026-03/overview-fh-refinery-n-petro_0.jpg`,
        imageAlt: {
          en: "Refinery and petrochemical project overview",
          vi: "Tổng quan dự án lọc dầu và hóa dầu",
        },
        paragraphs: [
          {
            en: "Thermax executes complex refinery, petrochemical and chemical projects in accordance with global engineering standards. Delivery spans engineering, procurement, construction, modularisation and commissioning.",
            vi: "Thermax triển khai các dự án lọc dầu, hóa dầu và hóa chất phức tạp theo các tiêu chuẩn kỹ thuật toàn cầu. Phạm vi bao gồm thiết kế, mua sắm, thi công, module hóa và chạy thử.",
          },
        ],
      },
      {
        title: { en: "EPC capabilities", vi: "Năng lực EPC" },
        image: `${s3}/2026-04/Untitled%20design%20%2822%29.png`,
        imageAlt: {
          en: "Refinery and petrochemical EPC units",
          vi: "Các phân xưởng EPC lọc dầu và hóa dầu",
        },
        bullets: [
          { en: "Sulphur recovery units and tail gas treatment units", vi: "Phân xưởng thu hồi lưu huỳnh và xử lý khí đuôi" },
          { en: "Amine regeneration and sour water stripping systems", vi: "Hệ thống tái sinh amine và tách nước chua" },
          { en: "Steam methane reforming and gas sweetening units", vi: "Phân xưởng reforming methane bằng hơi và làm ngọt khí" },
          { en: "Ammonia, ammonium nitrate, urea and synthetic natural gas plants", vi: "Nhà máy ammonia, ammonium nitrate, urê và khí thiên nhiên tổng hợp" },
        ],
      },
      {
        title: { en: "Integrated packages", vi: "Các gói thiết bị tích hợp" },
        image: `${s3}/2025-10/Industrial-EPC.jpg`,
        imageAlt: {
          en: "Integrated refinery and petrochemical equipment packages",
          vi: "Các gói thiết bị tích hợp cho tổ hợp lọc dầu và hóa dầu",
        },
        paragraphs: [
          {
            en: "Critical packages include fired heaters, utility boilers, waste heat recovery boilers, condensers, motor control centre packages and incineration systems, engineered for safe and compliant plant operation.",
            vi: "Các gói thiết bị trọng yếu bao gồm lò gia nhiệt, lò hơi tiện ích, lò thu hồi nhiệt thải, bình ngưng, tủ điều khiển động cơ và hệ thống đốt, được thiết kế để nhà máy vận hành an toàn và tuân thủ tiêu chuẩn.",
          },
        ],
      },
    ],
    sourceUrl: "https://www.thermaxglobal.com/industrial-infra/projects-and-energy-solutions/refinery-petrochemical-units",
  },
];

export function getProjectDetail(slug: string) {
  return projectDetails.find((project) => project.slug === slug);
}
