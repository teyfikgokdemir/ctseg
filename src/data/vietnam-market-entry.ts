import type { Locale } from './site';

export type VietnamMarketEntryCopy = {
  slug:string;
  eyebrow:string;
  title:string;
  description:string;
  directAnswerTitle:string;
  directAnswer:string;
  sectorsTitle:string;
  sectorsLead:string;
  sectors:string[];
  supportTitle:string;
  supportLead:string;
  support:string[];
  complianceTitle:string;
  complianceText:string;
  processTitle:string;
  process:string[];
  faq:{question:string;answer:string}[];
  ctaTitle:string;
  ctaText:string;
  ctaLabel:string;
};

export const vietnamMarketEntryContent: Partial<Record<Locale,VietnamMarketEntryCopy>> = {
  vi:{
    slug:'xuat-khau-tu-viet-nam-sang-tho-nhi-ky-va-chau-au',
    eyebrow:'VIỆT NAM → THỔ NHĨ KỲ & CHÂU ÂU',
    title:'Hỗ trợ doanh nghiệp Việt Nam tiếp cận người mua tại Thổ Nhĩ Kỳ và châu Âu',
    description:'CTSEG hỗ trợ nhà sản xuất và nhà xuất khẩu Việt Nam đánh giá khả năng thâm nhập thị trường, chuẩn hóa hồ sơ thương mại, tiếp cận nhà nhập khẩu và điều phối RFQ tại Thổ Nhĩ Kỳ và các thị trường phù hợp ở châu Âu.',
    directAnswerTitle:'CTSEG hỗ trợ doanh nghiệp Việt Nam xuất khẩu sang Thổ Nhĩ Kỳ và châu Âu như thế nào?',
    directAnswer:'CTSEG đóng vai trò điều phối thương mại B2B độc lập cho các doanh nghiệp Việt Nam muốn mở rộng sang Thổ Nhĩ Kỳ và các thị trường châu Âu phù hợp. Chúng tôi đánh giá mức độ sẵn sàng xuất khẩu, cấu trúc hồ sơ sản phẩm, xác định nhóm người mua mục tiêu, hỗ trợ RFQ, mẫu, điều kiện thương mại và yêu cầu tuân thủ trước khi kết nối cơ hội với nhà nhập khẩu, nhà phân phối hoặc khách hàng công nghiệp phù hợp. CTSEG không cam kết người mua hoặc đơn hàng; mỗi cơ hội được đánh giá dựa trên sản phẩm, giá, năng lực cung ứng, chứng từ và khả năng đáp ứng thị trường đích.',
    sectorsTitle:'Nhóm sản phẩm Việt Nam phù hợp để đánh giá thị trường',
    sectorsLead:'Ưu tiên các sản phẩm có lợi thế nguồn cung, khả năng giao hàng ổn định, hồ sơ chất lượng rõ ràng và tiềm năng bán B2B lặp lại tại Thổ Nhĩ Kỳ hoặc châu Âu.',
    sectors:[
      'Cà phê Robusta, Arabica và cà phê nhân xanh',
      'Hạt điều thô, hạt điều nhân và sản phẩm chế biến từ hạt điều',
      'Hạt tiêu đen, hạt tiêu trắng và tiêu xay',
      'Quế Cassia và các sản phẩm quế chế biến',
      'Hoa hồi và nguyên liệu gia vị có nguồn gốc Việt Nam',
      'Dừa sấy, cơm dừa, nước cốt dừa và nguyên liệu từ dừa',
      'Xoài sấy, thanh long sấy và trái cây nhiệt đới chế biến',
      'Gạo, bột gạo, bánh tráng và nguyên liệu từ gạo',
      'Cao su thiên nhiên và một số sản phẩm cao su công nghiệp',
      'Đồ gỗ nội thất và linh kiện đồ gỗ',
      'Sản phẩm tre, mây và vật liệu trang trí tự nhiên',
      'Hàng trang trí nhà cửa và đồ gia dụng thủ công',
      'Dệt may, hàng may mặc và sản xuất theo nhãn riêng',
      'Giày dép và sản xuất OEM / private label',
      'Túi xách, phụ kiện thời trang và sản phẩm may công nghiệp',
      'Bao bì và một số sản phẩm giấy / vật liệu đóng gói',
      'Nguyên liệu thực phẩm và nguyên liệu cho ngành chế biến',
      'Một số sản phẩm thủy sản và thực phẩm chế biến đủ điều kiện',
      'Linh kiện hoặc sản phẩm OEM phù hợp với nhu cầu nhập khẩu',
      'Các sản phẩm khác có hồ sơ xuất khẩu rõ ràng và khả năng cạnh tranh'
    ],
    supportTitle:'CTSEG có thể hỗ trợ nhà sản xuất và nhà xuất khẩu Việt Nam',
    supportLead:'Trọng tâm là biến thông tin sản phẩm thành một hồ sơ thương mại có thể đánh giá được bởi người mua chuyên nghiệp.',
    support:[
      'Đánh giá khả năng thâm nhập thị trường Thổ Nhĩ Kỳ và các thị trường châu Âu phù hợp',
      'Xác định nhóm nhà nhập khẩu, nhà phân phối, nhà bán buôn và khách hàng B2B mục tiêu',
      'Chuẩn hóa catalogue, thông số kỹ thuật, MOQ, năng lực và điều kiện thương mại',
      'Điều phối RFQ, mẫu thử, báo giá và trao đổi kỹ thuật',
      'Đánh giá yêu cầu về nhãn, bao bì, chứng nhận và tài liệu xuất khẩu',
      'Phân tích sơ bộ logistics, Incoterms và khả năng giao hàng',
      'Hỗ trợ kết nối thương mại khi sản phẩm và hồ sơ phù hợp',
      'Theo dõi và điều phối trao đổi giữa nhà cung cấp Việt Nam và người mua tiềm năng'
    ],
    complianceTitle:'Điều kiện tiếp cận thị trường được đánh giá trước khi kết nối người mua',
    complianceText:'Khả năng bán hàng phụ thuộc vào mã HS, xuất xứ, yêu cầu nhập khẩu của Thổ Nhĩ Kỳ hoặc Liên minh châu Âu, chứng nhận, an toàn thực phẩm hoặc yêu cầu kỹ thuật, nhãn mác, truy xuất nguồn gốc, quy tắc xuất xứ và hồ sơ của doanh nghiệp. Đối với thực phẩm, nông sản, thủy sản và hàng tiêu dùng có kiểm soát, có thể phát sinh kiểm nghiệm, kiểm dịch, dư lượng thuốc bảo vệ thực vật, vi sinh, kim loại nặng hoặc các yêu cầu chuyên ngành khác. CTSEG chỉ tiếp tục khi lộ trình thương mại và tuân thủ có thể thực hiện được.',
    processTitle:'Quy trình đánh giá doanh nghiệp Việt Nam',
    process:[
      'Gửi thông tin công ty, website, catalogue và sản phẩm muốn phát triển thị trường',
      'Cung cấp thông số kỹ thuật, MOQ, năng lực hàng tháng, giá mục tiêu và Incoterms',
      'CTSEG đánh giá mức độ sẵn sàng xuất khẩu và khả năng phù hợp với thị trường mục tiêu',
      'Các yêu cầu về chứng từ, nhãn, tiêu chuẩn và định vị thương mại được làm rõ',
      'Khi hồ sơ phù hợp, cơ hội tiếp cận người mua và RFQ được điều phối theo từng trường hợp'
    ],
    faq:[
      {question:'CTSEG có mua trực tiếp hàng từ doanh nghiệp Việt Nam không?',answer:'Không nhất thiết. CTSEG hoạt động chủ yếu như một đơn vị điều phối thương mại và phát triển thị trường B2B. Tùy từng dự án, CTSEG có thể hỗ trợ kết nối với nhà nhập khẩu, nhà phân phối hoặc người mua phù hợp tại Thổ Nhĩ Kỳ và châu Âu.'},
      {question:'CTSEG có đảm bảo đơn hàng hoặc người mua không?',answer:'Không. Không có đơn hàng nào được đảm bảo trước. Khả năng tiếp cận người mua phụ thuộc vào sản phẩm, giá, hồ sơ chất lượng, năng lực cung ứng, điều kiện thương mại và mức độ phù hợp với thị trường.'},
      {question:'Doanh nghiệp Việt Nam cần gửi những gì để được đánh giá?',answer:'Nên gửi hồ sơ công ty, website, catalogue, hình ảnh sản phẩm, thông số kỹ thuật, MOQ, năng lực sản xuất, chứng nhận hiện có, thị trường đang xuất khẩu, giá tham khảo và điều kiện giao hàng mong muốn.'},
      {question:'CTSEG có thể hỗ trợ cả thị trường Thổ Nhĩ Kỳ và châu Âu không?',answer:'Có thể đánh giá cả hai hướng. Tuy nhiên mỗi sản phẩm được xem xét riêng theo nhu cầu người mua, mã HS, xuất xứ, chứng nhận, quy định nhập khẩu và tính khả thi thương mại tại từng thị trường.'}
    ],
    ctaTitle:'Giới thiệu sản phẩm Việt Nam của bạn cho CTSEG',
    ctaText:'Gửi hồ sơ công ty, catalogue, thông số sản phẩm, MOQ, năng lực cung ứng, chứng nhận và thị trường mục tiêu. CTSEG sẽ đánh giá trước khả năng tiếp cận người mua tại Thổ Nhĩ Kỳ và các thị trường phù hợp ở châu Âu.',
    ctaLabel:'Gửi hồ sơ xuất khẩu'
  }
};
