export type OfficialCatalogProduct = {
  title: string;
  image: string;
  description?: string;
  capacity?: string;
  fuel?: string;
  href?: string;
  slug?: string;
  overview?: string[];
  features?: string[];
};

const s3 = "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public";
const p = (
  title: string,
  path: string,
  details: Omit<OfficialCatalogProduct, "title" | "image"> = {},
): OfficialCatalogProduct => ({ title, image: `${s3}/${path}`, ...details });

export function productCatalogSlug(title: string) {
  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/™/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

export const officialProductCatalog: Record<string, OfficialCatalogProduct[]> = {
  "steam-boilers": [
    p("UltraPac™", "2025-12/Ultrapac-min.jpg"), p("CombiPac™", "2025-12/Combipac.png"),
    p("Bi-Drum (PowerMax)", "2025-12/Bi-Drum.png"), p("GreenPac™", "2025-10/steamboiler-prod-thumb-greenpac.jpg"),
    p("ComBloc", "2025-12/ComBloc-min_0.jpg"), p("HuskPac™ Ultra", "2026-02/Huskpac%20Ultra%20Listing.png"),
    p("TherMeon-A", "2025-12/Thermeon%202.0_TEON%202.jpg"), p("WoodPac", "2025-08/woodpac_product.jpg"),
    p("CocoMax", "2026-02/Cocomax%20Listing.png"), p("ThermoSyphon", "2025-12/Thermosyphon.jpg"),
    p("SteaMatic", "2026-02/Steamatic%20listing.png"), p("ShellMax Global Ultra", "2025-08/product-intro-rhs-pic.png"),
    p("RevoMax Nxt", "2025-10/steamboiler-prod-revomax.png"),
  ],
  "thermal-oil-heaters": [
    p("GreenBloc™", "2025-12/GreenBloc.png"), p("ThermoPac™ Global", "2025-12/Thermopac%20Global.jpg"),
    p("DynaTherm™", "2025-12/Dynatherm_used.jpg"), p("HT Thermal Oil Heater Solutions", "2025-12/HT%20Thermal%20Oil%20Heater.png"),
  ],
  "hot-air-generators": [p("AquaeroTherm-XT", "2025-11/hot-air-thumb-aquaerotherm.jpg")],
  "hot-water-generators": [
    p("ShellMax Global - W", "2026-02/Shellmax%20Global%20-%20W%20Listing.png"), p("AquaTherm", "2026-02/Aquatherm-listing.png"),
    p("AquaMatic", "2026-02/Aquamatic.png"), p("HT Hot Water Generator Solutions", "2026-02/HT%20Hot%20Water%20Generator%20Solutions%20%282%29.png"),
  ],
  "electric-process-heat-solutions": [
    p("Effitron™", "2025-12/Effitron-used.jpg"), p("ThermoTron™", "2025-08/thermotron_product_1.jpg"),
    p("AquaNexa E-Series", "2026-02/Aquanexa%20E-Series-listing.png"),
  ],
  "energy-plant": [
    p("Integrated Energy Plant", "2025-12/ComBloc-min_0.jpg"),
    p("Steam and Power Package", "2025-12/Bi-Drum.png"),
    p("Multi-Fuel Process Heat Plant", "2025-12/GreenBloc.png"),
  ],
  "boiler-house-products": [
    p("A2Zflo-S Steam Flow Meter", "2025-12/A2Zflo-S%20%E2%80%93%20Steam%20Flow%20Meter-listing.png"),
    p("RealSteam™", "2025-12/RealSteam%E2%84%A2.png"), p("SABCO: Surface Auto Blowdown Control System", "2026-03/SABCO%20listing.png"),
    p("Magnetic Level Gauge", "2025-11/prod-intro-banner-mlg_0.jpg"), p("A2Zflo-W Water Flow Meter", "2025-12/A2Zflo-W.png"),
  ],
  "steam-distribution": [
    p("Steam Traps", "2025-12/th-steam-trap.jpg"), p("Pre Fabricated Modules", "2026-03/Prefabricated%20Modules_thumbnail.png"),
    p("Bellow Seal Valves", "2025-12/th-valves.jpg"), p("Pressure Reducing Stations (PRS)", "2026-03/PRS%20thumbnail.png"),
    p("Pressure Reducing and Desuperheating System (PRDS)", "2025-12/th-PRDS.jpg"), p("Steam Line Mountings", "2026-03/Line%20Mountings_thumbnail.png"),
  ],
  "condensate-system-management": [
    p("Compact Pressurised Condensate Recovery System (CPCRS)", "2025-12/CPCRS_product_0.jpg"),
    p("High-Pressure Condensate Recovery System (HPCRS)", "2025-12/Untitled%20design%20%2829%29.png"),
    p("Pumping Trap Condensate Recovery System (PTCRS)", "2025-12/PTCRS_product.jpg"),
    p("Thermax Compact Automatic Condensate Transfer Pump (TACTS-RX)", "2025-12/TACT-RS_product%20listing.jpg"),
    p("Thermax Automatic Condensate Transfer System (TACTS)", "2025-12/TACTS-Pump_0.jpg"),
    p("Thermax Atmospheric Deaerator with Immersion Tube (TADIT)", "2025-12/TADIT_1300X800_0.jpg"),
    p("Thermax Atmospheric Flash System (TAFS)", "2025-12/Untitled%20design%20%2832%29.png"),
  ],
  "process-automation": [
    p("PlyMax – Press Automation System", "2026-03/PlyMax%20listing.png", {
      description: "Tự động hóa toàn diện máy sấy ván lạng và máy ép nhiệt trong sản xuất ván ép.",
      overview: ["PlyMax kiểm soát thông minh nhiệt độ, áp suất và thời gian của các công đoạn dùng hơi, giúp sấy đồng đều, đóng rắn tối ưu, giảm năng lượng và hạn chế lỗi sản phẩm."],
      features: ["Điều khiển chính xác nhiệt độ và áp suất", "Công thức vận hành linh hoạt trên PLC/HMI", "Theo dõi dữ liệu để kiểm soát chất lượng", "Giảm tiêu thụ năng lượng và phế phẩm"],
    }),
    p("RiceMax – Rice Dryer Automation System", "2026-03/Ricemax%20thumbnail.png", {
      description: "Hệ thống tự động hóa máy sấy gạo giúp duy trì độ ẩm tối ưu và giảm tỷ lệ gãy hạt.",
      overview: ["RiceMax tích hợp cảm biến nhiệt độ, độ ẩm, van điều khiển và bộ điều khiển thông minh để duy trì thông số sấy ổn định, tăng năng suất và chất lượng gạo."],
      features: ["Kiểm soát độ ẩm theo thời gian thực", "Giảm sấy quá mức hoặc chưa đủ", "Tối ưu nhiên liệu và năng lượng", "Nâng cao chất lượng và giá trị hạt gạo"],
    }),
    p("Blow-Through System", "2026-03/Blow%20through%20thumbnail.png", {
      description: "Duy trì dòng hơi để cuốn trôi nước ngưng tụ và không khí khỏi máy sấy quay nhằm đảm bảo truyền nhiệt đồng đều.",
      overview: ["Hệ thống thổi khí hỗ trợ thoát nước ngưng và khí không ngưng trong thiết bị quay, giữ bề mặt gia nhiệt ổn định và cải thiện hiệu suất quá trình."],
      features: ["Truyền nhiệt ổn định", "Loại bỏ nước ngưng hiệu quả", "Giảm thời gian dừng máy", "Tích hợp với hệ thống hơi hiện hữu"],
    }),
  ],
  "customised-solutions": [
    p("Packaged Hot Water System", "2026-02/Aquatherm-listing.png"),
    p("Washdown and Hygiene System", "2026-03/Prefabricated%20Modules_thumbnail.png"),
  ],
  "absorption-chillers": [
    p("Steam-Driven Absorption Chiller", "2025-09/steam-driven-absorption-chiller-listing.jpg"),
    p("Direct Fired Absorption Chiller", "2026-01/th-direct-fired-absorption-chiller.jpg"),
    p("Hot Water Driven Absorption Chiller", "2026-01/th-hot-water-absorption-chiller.jpg"),
    p("Exhaust Driven Absorption Chillers", "2026-01/th-exhaust-absorption-chiller.jpg"),
    p("Multi-Energy Absorption Chiller", "2026-01/th-multi-energy-absorption-chiller.jpg"),
    p("Thermic Fluid Driven Absorption Chiller", "2026-01/th-thermic-fluid-driven-chiller.jpg"),
  ],
  "absorption-chiller-heaters": [
    p("Steam-Driven Absorption Chiller-Heater", "2026-01/th-steam-driven-absorption-chiller-heater.jpg"),
    p("Hot Water-Driven Absorption Chiller-Heater", "2026-01/th-hot-water-driven-absorption-chiller-heater.jpg"),
    p("Exhaust Gas-Driven Absorption Chiller-Heater", "2026-04/Exhaust%20Gas-Driven%20Absorption%20Chiller-Heater%20listing.png"),
  ],
  "absorption-heat-pumps": [
    p("Steam-Driven Absorption Heat Pump", "2026-04/Steam-Driven%20Absorption%20Heat%20Pump_0.png"),
    p("Hot Water-Driven Absorption Heat Pump", "2026-01/th-steam-driven-absorption-heat-pump_0.jpg"),
    p("Exhaust-Driven Absorption Heat Pump", "2026-04/Exhaust-Driven%20Absorption%20Heat%20Pump%20Listing.png"),
    p("Heat Pump Chiller", "2026-01/th-heat-pump-chiller.jpg"), p("Chiller Heat Pump", "2026-01/th-chiller-heat-pump_0.jpg"),
  ],
  "heating-solutions": [
    p("Hybrid Heat Pump", "2026-01/th-hybrid-heat-pump.jpg"), p("Electrical Heat Pump", "2026-01/th-electrical-heat-pump.jpg"),
  ],
  "absorption-heat-transformer": [
    p("Absorption Heat Transformer", "2026-04/Steam-Driven%20Absorption%20Heat%20Pump_0.png"),
  ],
  "hybrid-chiller": [
    p("Hybrid Chiller", "2026-01/th-hybrid-heat-pump.jpg"),
  ],
  "industrial-refrigeration-unit": [
    p("Industrial Refrigeration Unit", "2026-01/th-dry-cooler.jpg"),
  ],
  "wet-cooling-solutions": [
    p("Adiabatic Cooling Tower", "2026-01/th-adct.jpg"), p("Evaporative Condenser", "2026-01/th-evaporative-condenser.jpg"),
    p("Hybrid Closed Loop Cooling Tower", "2026-01/th-hybrid-closed-loop-cooling-tower.jpg"),
    p("Closed Loop Cooling Tower", "2026-01/th-closed-loop-cooling-tower.jpg"),
  ],
  "dry-cooling-solutions": [
    p("Dry Cooler", "2026-01/th-dry-cooler.jpg"), p("Air Cooled Heat Exchanger", "2026-01/th-heat-exchnager.jpg"),
  ],
  "water-treatment-solutions": [
    p("Automated Softeners", "2026-04/Automated%20Softeners%20Listing.png"), p("Containerised Plants", "2026-03/th-containerised-plant.jpg"),
    p("Demineralisation Plant (DM)", "2026-04/Demineralisation%20Plant%20Listing.png"), p("Klarimax", "2026-03/th-klarimax_0.jpg"),
    p("PuriSmart", "2026-04/PuriSmart%20Listing.png"), p("Digilite", "2026-04/Digilite%20Listing.png"),
    p("E Series RO", "2026-03/th-e-series.jpg"), p("LoFlo RO", "2026-04/LoFlo%20RO%20Listing.png"),
    p("SIRO", "2026-04/SIRO%20Lisitng.png"), p("eFlo", "2026-03/th-eflo.jpg"), p("Port D-Sal", "2026-03/th-port-d-sal_0.jpg"),
    p("Nanofiltration", "2026-03/th-nanofiltration.jpg"), p("Ultra Pure Water (UPW)", "2026-03/th-upw.jpg"),
    p("Ultrafiltration", "2026-02/th-ultrafiltration.jpg"), p("Low Pressure Condensate Polishing Unit", "2026-02/th-hl-condenstae-polishing-unit.jpg"),
    p("High-Pressure Condensate Polishing Unit (CPCU)", "2026-02/th-hl-condenstae-polishing-unit.jpg"),
    p("RO Plants", "2026-02/th-ro-plants.jpg"), p("Specialised Ion Exchange Removal", "2026-02/th-spl-ion-exchange-removal.jpg"),
    p("Dealkaliser", "2026-02/th-dealkaliser.jpg"), p("Softening Plant", "2026-02/th-softening-plant.jpg"),
    p("Demineralisation Plant", "2026-02/th-dimeralisation-plant.jpg"), p("Side Stream Filters", "2026-02/th-side-stream-filters_0.jpg"),
    p("Gravity Filter", "2026-02/th-gravity-filter.jpg"), p("Pressurised Filters (DMF & ACF)", "2026-02/th-pressurised-filters.jpg"),
    p("Clarifiers", "2026-02/th-clarifier.jpg"),
  ],
  "sewage-treatment-and-recycling-plants": [
    p("Special Media Filter", "2026-04/Special%20Media%20Filter%20Listing.png"), p("BioSONR", "2026-03/th-biosonr.jpg"),
    p("SBR-Based", "2026-03/th-sbr.jpg"), p("Membrane Bioreactor (MBR) based", "2026-03/th-mbr-based.jpg"),
    p("MBBR-Based", "2026-03/th-mbbr.jpg"), p("Trickling Filter-Based", "2026-03/th-trickling-filter.jpg"),
    p("Activated Sludge Process (ASP)", "2026-03/th-activated-sludge.jpg"), p("atoM", "2026-03/th-atoM.jpg"),
    p("SeqtreaT", "2026-03/th-SeqtreaT.jpg"), p("BioCask", "2026-03/th-Biocask.jpg"), p("CuBe", "2026-03/th-cuBe.jpg"),
    p("BioFilter Pro", "2026-03/th-Biofilter-Pro.jpg"), p("FABx", "2026-03/th-FABx.jpg"),
  ],
  "effluent-treatment-recycling-plants": [
    p("Physico Chemical Treatment", "2026-03/th-physico-chemical-treatment.jpg"), p("Anaerobic Treatment", "2026-04/Anaerobic%20Filter%20Listing.png"),
    p("Aerobic Treatment", "2026-04/Aerobic%20Treatment%20Listing.png"), p("Special Media Filter", "2026-03/th-spl-media-filter.jpg"),
    p("Advance Oxidation", "2026-03/th-advance-oxidation.jpg"), p("Oil Removing System", "2026-03/Oil%20Removing%20System%20Listing.png"),
  ],
  "minimum-liquid-discharge": [
    p("Electrodialysis Reversal (EDR)", "2026-03/th-edr.jpg"), p("Advanced Reverse Osmosis (ARO)", "2026-03/th-aro.jpg"),
  ],
  "zero-liquid-discharge-system": [
    p("Agitated Thin Film Dryer (ATFD)", "2026-03/th-atfd.jpg"), p("Stripper", "2026-03/th-stripper.jpg"),
    p("SteMNovas+", "2026-03/SteMNovas%2B%20listing.png"), p("VapoNovae+", "2026-03/VapoNovae%2B.png"),
  ],
};

type CatalogLocale = "vi" | "en";

const absorptionProductDetails: Record<
  string,
  { viTitle: string; viDescription: string; enDescription: string; fuelVi: string; fuelEn: string }
> = {
  "Steam-Driven Absorption Chiller": {
    viTitle: "Máy làm lạnh hấp thụ dẫn động bằng hơi nước",
    viDescription: "Giải pháp làm mát công nghiệp sử dụng năng lượng hơi nước, vận hành tin cậy và giúp giảm phát thải carbon.",
    enDescription: "Industrial cooling solutions using steam energy for reliable performance and reduced carbon footprint.",
    fuelVi: "Hơi nước bão hòa",
    fuelEn: "Saturated steam",
  },
  "Direct Fired Absorption Chiller": {
    viTitle: "Máy làm lạnh hấp thụ đốt trực tiếp",
    viDescription: "Hệ thống làm mát hiệu quả, thân thiện với môi trường, phù hợp với các ứng dụng công nghiệp bền vững.",
    enDescription: "Efficient, eco-friendly cooling for sustainable industrial applications.",
    fuelVi: "Khí đốt",
    fuelEn: "Gas",
  },
  "Hot Water Driven Absorption Chiller": {
    viTitle: "Máy làm lạnh hấp thụ dùng nước nóng",
    viDescription: "Cung cấp khả năng làm mát bền vững bằng cách tận dụng nguồn nước nóng thải hoặc nước nóng chất lượng thấp.",
    enDescription: "Efficiently delivers sustainable cooling using waste or low-grade hot water sources.",
    fuelVi: "Nước nóng",
    fuelEn: "Hot water",
  },
  "Exhaust Driven Absorption Chillers": {
    viTitle: "Máy làm lạnh hấp thụ dẫn động bằng khí thải",
    viDescription: "Tận dụng nhiệt khí thải để tạo nước lạnh, giúp thu hồi năng lượng và giảm chi phí vận hành.",
    enDescription: "Efficient cooling powered by waste exhaust heat, transforming energy recovery into sustainable chilled water.",
    fuelVi: "Khí thải",
    fuelEn: "Exhaust gas",
  },
  "Multi-Energy Absorption Chiller": {
    viTitle: "Máy làm lạnh hấp thụ đa năng lượng",
    viDescription: "Giải pháp làm mát linh hoạt sử dụng nhiều nguồn nhiệt để nâng cao hiệu suất và tính bền vững.",
    enDescription: "Flexible, energy-efficient cooling using multiple heat sources for enhanced sustainability and performance.",
    fuelVi: "Nhiều nguồn nhiệt",
    fuelEn: "Multiple heat sources",
  },
  "Thermic Fluid Driven Absorption Chiller": {
    viTitle: "Máy làm lạnh hấp thụ dẫn động bằng dầu tải nhiệt",
    viDescription: "Giải pháp làm mát sử dụng nhiệt từ dầu tải nhiệt, phù hợp cho thu hồi năng lượng trong công nghiệp.",
    enDescription: "Efficient cooling powered by thermic fluid heat, ideal for energy recovery in industrial applications.",
    fuelVi: "Dầu tải nhiệt",
    fuelEn: "Thermic fluid",
  },
};

const catalogGroupDescriptions: Record<string, { vi: string; en: string }> = {
  "energy-plant": { vi: "Nhà máy năng lượng tích hợp hơi, nhiệt và điện để tối ưu hiệu suất toàn hệ thống.", en: "Integrated steam, heat and power plants engineered for plant-wide efficiency." },
  "process-automation": { vi: "Tự động hóa thông minh cho các quy trình sử dụng nhiều hơi, giúp kiểm soát chính xác và tiết kiệm năng lượng.", en: "Intelligent automation for steam-intensive processes, improving control, quality and energy efficiency." },
  "customised-solutions": { vi: "Giải pháp đóng gói được thiết kế theo yêu cầu vận hành, nhiệt độ và vệ sinh của từng nhà máy.", en: "Packaged solutions engineered around each plant's process, temperature and hygiene requirements." },
  "absorption-heat-transformer": { vi: "Nâng cấp nhiệt thải trung bình thành nguồn nhiệt hữu ích có nhiệt độ cao hơn cho quy trình công nghiệp.", en: "Upgrades medium-grade waste heat into higher-temperature useful process heat." },
  "hybrid-chiller": { vi: "Kết hợp công nghệ hấp thụ và nén hơi để làm lạnh linh hoạt, hiệu quả và giảm phát thải.", en: "Combines absorption and compression technologies for flexible, efficient, lower-emission cooling." },
  "industrial-refrigeration-unit": { vi: "Cung cấp khả năng làm lạnh công suất lớn và kiểm soát nhiệt độ chính xác cho các quy trình quan trọng.", en: "Reliable, high-capacity refrigeration with precise temperature control for critical processes." },
  "steam-boilers": { vi: "Giải pháp tạo hơi hiệu suất cao, vận hành tin cậy và phù hợp với nhiều loại nhiên liệu.", en: "High-efficiency steam generation engineered for reliable operation and flexible fuel use." },
  "thermal-oil-heaters": { vi: "Giải pháp gia nhiệt gián tiếp ở nhiệt độ cao cho nhiều quy trình công nghiệp.", en: "High-temperature indirect heating for a wide range of industrial processes." },
  "hot-air-generators": { vi: "Cung cấp khí nóng ổn định cho các ứng dụng sấy và gia nhiệt công nghiệp.", en: "Reliable hot-air generation for industrial drying and process heating." },
  "hot-water-generators": { vi: "Cung cấp nước nóng hiệu quả cho nhu cầu thương mại và công nghiệp.", en: "Efficient hot-water generation for commercial and industrial requirements." },
  "electric-process-heat-solutions": { vi: "Giải pháp gia nhiệt điện sạch, hiệu quả và dễ tích hợp vào hệ thống hiện hữu.", en: "Clean, efficient electric process heating designed for easy integration." },
  "boiler-house-products": { vi: "Thiết bị đo lường, giám sát và tự động hóa giúp tối ưu hệ thống hơi và nước.", en: "Measurement, monitoring and automation products for optimised steam and water systems." },
  "steam-distribution": { vi: "Kiểm soát chính xác lưu lượng, nhiệt độ và áp suất trong mạng lưới phân phối hơi.", en: "Precise flow, temperature and pressure control across steam distribution networks." },
  "condensate-system-management": { vi: "Tối đa hóa thu hồi nhiệt, giảm tiêu thụ nước và nâng cao hiệu suất lò hơi.", en: "Maximises heat recovery, reduces water use and improves boiler efficiency." },
  "absorption-chiller-heaters": { vi: "Kết hợp làm lạnh và sưởi ấm bằng các nguồn năng lượng nhiệt bền vững.", en: "Combined cooling and heating powered by sustainable thermal energy sources." },
  "absorption-heat-pumps": { vi: "Thu hồi và nâng cấp nhiệt để cung cấp nhiệt hoặc lạnh với hiệu suất năng lượng cao.", en: "Recovers and upgrades heat for energy-efficient heating and cooling." },
  "heating-solutions": { vi: "Giải pháp bơm nhiệt điện và lai cho nhu cầu gia nhiệt quy trình linh hoạt.", en: "Electric and hybrid heat pumps for flexible process heating." },
  "wet-cooling-solutions": { vi: "Giải pháp làm mát bay hơi hiệu quả cho hệ thống công nghiệp.", en: "Efficient evaporative cooling solutions for industrial systems." },
  "dry-cooling-solutions": { vi: "Giải pháp làm mát bằng không khí giúp giảm hoặc loại bỏ nhu cầu sử dụng nước.", en: "Air-based cooling that reduces or eliminates water consumption." },
  "water-treatment-solutions": { vi: "Công nghệ xử lý nước hiệu suất cao, tối ưu tài nguyên và đáp ứng yêu cầu chất lượng.", en: "High-performance water treatment technology for resource optimisation and quality compliance." },
  "sewage-treatment-and-recycling-plants": { vi: "Hệ thống xử lý nước thải sinh hoạt và thu hồi nước có thiết kế mô-đun, tiết kiệm năng lượng.", en: "Modular, energy-efficient sewage treatment and water recovery systems." },
  "effluent-treatment-recycling-plants": { vi: "Giải pháp xử lý dòng thải công nghiệp phức tạp và tái sử dụng nước.", en: "Engineered treatment for complex industrial effluent and water reuse." },
  "minimum-liquid-discharge": { vi: "Tăng tối đa tỷ lệ thu hồi nước và giảm đáng kể lượng chất thải lỏng.", en: "Maximises water recovery while significantly reducing liquid waste." },
  "zero-liquid-discharge-system": { vi: "Giải pháp đồng bộ giúp loại bỏ hoàn toàn việc xả thải lỏng.", en: "Integrated systems designed to eliminate liquid effluent discharge." },
};

export function getOfficialProductCatalog(slug: string, locale: CatalogLocale): OfficialCatalogProduct[] | undefined {
  const products = officialProductCatalog[slug];
  if (!products) return undefined;

  const groupDescription = catalogGroupDescriptions[slug];

  return products.map((product) => {
    const absorptionDetail = slug === "absorption-chillers" ? absorptionProductDetails[product.title] : undefined;
    const title = locale === "vi" && absorptionDetail ? absorptionDetail.viTitle : product.title.replaceAll("â„¢", "™");
    const description = absorptionDetail
      ? locale === "vi"
        ? absorptionDetail.viDescription
        : absorptionDetail.enDescription
      : product.description ?? groupDescription?.[locale] ??
        (locale === "vi"
          ? `Giải pháp ${title} được thiết kế để vận hành hiệu quả, tin cậy và phù hợp với nhu cầu công nghiệp.`
          : `${title} is engineered for efficient, reliable operation across industrial applications.`);

    const productSlug = product.slug ?? productCatalogSlug(product.title);

    return {
      ...product,
      title,
      slug: productSlug,
      description,
      capacity: absorptionDetail ? (locale === "vi" ? "30 TR đến 3000 TR" : "30 TR to 3000 TR") : locale === "vi" ? "Theo cấu hình dự án" : "Project-specific",
      fuel: absorptionDetail
        ? locale === "vi"
          ? absorptionDetail.fuelVi
          : absorptionDetail.fuelEn
        : locale === "vi"
          ? "Tùy theo sản phẩm"
          : "Product-specific",
      href: `/industrial-products/${slug}/${productSlug}`,
      overview: product.overview ?? [description],
      features: product.features ?? [
        locale === "vi" ? "Thiết kế tối ưu cho điều kiện vận hành thực tế" : "Engineered for real operating conditions",
        locale === "vi" ? "Hiệu suất ổn định và vận hành tin cậy" : "Stable performance and reliable operation",
        locale === "vi" ? "Có thể cấu hình theo yêu cầu dự án" : "Configurable for project requirements",
      ],
    };
  });
}

export function getOfficialCatalogProduct(parentSlug: string, productSlug: string, locale: CatalogLocale) {
  return getOfficialProductCatalog(parentSlug, locale)?.find((product) => product.slug === productSlug);
}

export function getOfficialCatalogProductParams() {
  return Object.entries(officialProductCatalog).flatMap(([slug, products]) =>
    products.map((product) => ({ slug, product: product.slug ?? productCatalogSlug(product.title) })),
  );
}
