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
    directAnswer:'CTSEG hỗ trợ nhà sản xuất và nhà xuất khẩu Việt Nam tiếp cận nhà nhập khẩu, nhà phân phối và người mua B2B phù hợp tại Thổ Nhĩ Kỳ và một số thị trường châu Âu. Trọng tâm là sản phẩm có lợi thế xuất khẩu rõ ràng, hồ sơ kỹ thuật đầy đủ, giá cạnh tranh và khả năng cung ứng ổn định. Mỗi cơ hội được đánh giá theo sản phẩm, thị trường đích, chứng từ và điều kiện thương mại thực tế.',
    sectorsTitle:'Nhóm sản phẩm Việt Nam phù hợp để đánh giá thị trường',
    sectorsLead:'Ưu tiên các sản phẩm có lợi thế nguồn cung, khả năng giao hàng ổn định, hồ sơ chất lượng rõ ràng và tiềm năng bán B2B lặp lại tại Thổ Nhĩ Kỳ hoặc châu Âu.',
    sectors:[
      'Cà phê Robusta, Arabica và cà phê nhân xanh',
      'Hạt điều nhân và sản phẩm chế biến từ hạt điều',
      'Hạt tiêu đen, hạt tiêu trắng và tiêu xay',
      'Quế Cassia và các sản phẩm quế chế biến',
      'Hoa hồi và nguyên liệu gia vị',
      'Dừa sấy, cơm dừa, nước cốt dừa và nguyên liệu từ dừa',
      'Trái cây nhiệt đới sấy và chế biến',
      'Thủy sản và sản phẩm thủy sản đủ điều kiện xuất khẩu',
      'Đồ gỗ nội thất và linh kiện đồ gỗ',
      'Sản phẩm tre, mây và đồ trang trí tự nhiên',
      'Một số sản phẩm gạo và nguyên liệu thực phẩm có lợi thế xuất khẩu',
      'Các sản phẩm Việt Nam khác có hồ sơ xuất khẩu rõ ràng và khả năng cạnh tranh'
    ],
    supportTitle:'CTSEG có thể hỗ trợ nhà sản xuất và nhà xuất khẩu Việt Nam',
    supportLead:'Chỉ tập trung vào các bước trực tiếp giúp sản phẩm Việt Nam được người mua tại Thổ Nhĩ Kỳ và châu Âu đánh giá.',
    support:[
      'Đánh giá mức độ phù hợp của sản phẩm với thị trường mục tiêu',
      'Xác định nhóm nhà nhập khẩu, nhà phân phối và người mua B2B phù hợp',
      'Chuẩn hóa catalogue, thông số kỹ thuật, MOQ, năng lực và điều kiện thương mại',
      'Điều phối RFQ, mẫu thử, báo giá và trao đổi thương mại',
      'Làm rõ yêu cầu về chứng từ, nhãn, bao bì và tiêu chuẩn nhập khẩu'
    ],
    complianceTitle:'Điều kiện tiếp cận thị trường được đánh giá trước khi kết nối người mua',
    complianceText:'Khả năng bán hàng phụ thuộc vào mã HS, xuất xứ, yêu cầu nhập khẩu của Thổ Nhĩ Kỳ hoặc Liên minh châu Âu, chứng nhận, an toàn thực phẩm hoặc yêu cầu kỹ thuật, nhãn mác, truy xuất nguồn gốc, quy tắc xuất xứ và hồ sơ của doanh nghiệp. Đối với thực phẩm, nông sản, thủy sản và hàng tiêu dùng có kiểm soát, có thể phát sinh kiểm nghiệm, kiểm dịch, dư lượng thuốc bảo vệ thực vật, vi sinh, kim loại nặng hoặc các yêu cầu chuyên ngành khác. CTSEG chỉ tiếp tục khi lộ trình thương mại và tuân thủ có thể thực hiện được.',
    processTitle:'Quy trình đánh giá doanh nghiệp Việt Nam',
    process:[
      'Gửi hồ sơ công ty, catalogue, thông số sản phẩm, MOQ, năng lực và chứng nhận hiện có',
      'CTSEG đánh giá mức độ phù hợp với Thổ Nhĩ Kỳ hoặc thị trường châu Âu mục tiêu',
      'Khi hồ sơ phù hợp, RFQ và cơ hội tiếp cận người mua được điều phối theo từng trường hợp'
    ],
    faq:[
      {question:'Doanh nghiệp Việt Nam cần gửi những gì để được đánh giá?',answer:'Hồ sơ công ty, website, catalogue, thông số kỹ thuật, MOQ, năng lực sản xuất, chứng nhận hiện có, thị trường đang xuất khẩu, giá tham khảo và điều kiện giao hàng mong muốn.'},
      {question:'CTSEG có thể hỗ trợ thị trường Thổ Nhĩ Kỳ và châu Âu không?',answer:'Có. Mỗi sản phẩm được đánh giá riêng theo nhu cầu người mua, mã HS, xuất xứ, chứng nhận, quy định nhập khẩu và tính khả thi thương mại tại thị trường mục tiêu.'},
      {question:'CTSEG có đảm bảo đơn hàng không?',answer:'Không. Việc tiếp cận người mua phụ thuộc vào sản phẩm, giá, hồ sơ chất lượng, năng lực cung ứng và mức độ phù hợp với thị trường.'}
    ],
    ctaTitle:'Giới thiệu sản phẩm Việt Nam của bạn cho CTSEG',
    ctaText:'Gửi hồ sơ công ty, catalogue, thông số sản phẩm, MOQ, năng lực cung ứng, chứng nhận và thị trường mục tiêu. CTSEG sẽ đánh giá trước khả năng tiếp cận người mua tại Thổ Nhĩ Kỳ và các thị trường phù hợp ở châu Âu.',
    ctaLabel:'Gửi hồ sơ xuất khẩu'
  }
};
