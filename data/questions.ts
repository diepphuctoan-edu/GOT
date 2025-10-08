
import type { Question } from '../types';

/*
  HƯỚNG DẪN DÀNH CHO GIÁO VIÊN:
  Để thay đổi bộ câu hỏi, bạn chỉ cần chỉnh sửa danh sách `boCauHoi` dưới đây.
  Mỗi câu hỏi là một đối tượng (object) nằm trong dấu ngoặc nhọn {}.
  - "question": Nội dung câu hỏi.
  - "options": Một danh sách các đáp án, nằm trong dấu ngoặc vuông []. Mỗi đáp án nằm trong dấu nháy kép "".
  - "correctAnswer": Đáp án đúng, phải trùng khớp chính xác với một trong các đáp án trong "options".

  Bạn có thể Thêm, Sửa, hoặc Xóa các câu hỏi trong danh sách này.
  Lưu ý giữ đúng cấu trúc và dấu câu.
*/

export const boCauHoi: Question[] = [
  {
    "question": "Google Meet dùng để làm gì?",
    "options": [
      "Soạn thảo văn bản",
      "Chỉnh sửa ảnh",
      "Họp/học trực tuyến"
    ],
    "correctAnswer": "Họp/học trực tuyến"
  },
  {
    "question": "Google Meet miễn phí cho phép tối đa bao nhiêu người tham gia?",
    "options": [
      "50 người",
      "100 người",
      "200 người"
    ],
    "correctAnswer": "100 người"
  },
  {
    "question": "Thời lượng họp tối đa (từ 3 người) trên Google Meet miễn phí?",
    "options": [
      "30 phút",
      "1 giờ",
      "24 giờ"
    ],
    "correctAnswer": "1 giờ"
  },
  {
    "question": "Đâu là tính năng của Google Meet?",
    "options": [
      "Ghi âm vĩnh viễn",
      "Giơ tay, biểu tượng cảm xúc",
      "Tự động dịch mọi ngôn ngữ"
    ],
    "correctAnswer": "Giơ tay, biểu tượng cảm xúc"
  },
  {
    "question": "Tính năng \"Bảng trắng\" dùng để làm gì?",
    "options": [
      "Chia sẻ video Youtube",
      "Cùng vẽ, viết, trao đổi",
      "Trình chiếu slide"
    ],
    "correctAnswer": "Cùng vẽ, viết, trao đổi"
  },
  {
    "question": "Khi nào nên dùng tính năng \"Giơ tay\"?",
    "options": [
      "Khi muốn rời họp",
      "Khi muốn phát biểu/hỏi",
      "Khi đồng ý ý kiến"
    ],
    "correctAnswer": "Khi muốn phát biểu/hỏi"
  },
  {
    "question": "Mục đích của biểu tượng cảm xúc là gì?",
    "options": [
      "Yêu cầu chia sẻ màn hình",
      "Thể hiện phản ứng nhanh",
      "Báo cáo sự cố"
    ],
    "correctAnswer": "Thể hiện phản ứng nhanh"
  },
  {
    "question": "Bước đầu tiên khi lên kế hoạch họp là gì?",
    "options": [
      "Gửi link",
      "Xác định mục tiêu",
      "Bật micro/camera"
    ],
    "correctAnswer": "Xác định mục tiêu"
  },
  {
    "question": "Quy trình tổ chức họp trên Google Meet?",
    "options": [
      "Gửi link - Họp - Kết thúc",
      "Lên kế hoạch - Tạo họp - Thiết lập",
      "Mời - Chia sẻ - Ghi chú"
    ],
    "correctAnswer": "Lên kế hoạch - Tạo họp - Thiết lập"
  },
  {
    "question": "Lập danh sách thành viên để làm gì?",
    "options": [
      "Đảm bảo đủ 100 người",
      "Mời đúng người, tiết kiệm thời gian",
      "Đảm bảo mọi người có tài khoản"
    ],
    "correctAnswer": "Mời đúng người, tiết kiệm thời gian"
  },
  {
    "question": "Làm cách nào để mời người khác vào họp?",
    "options": [
      "Yêu cầu họ tự tìm",
      "Sao chép và gửi link",
      "Gọi điện đọc mã"
    ],
    "correctAnswer": "Sao chép và gửi link"
  },
  {
    "question": "Khi nào nên dùng \"Chia sẻ màn hình\"?",
    "options": [
      "Hiển thị mặt rõ hơn",
      "Trình chiếu tài liệu/hướng dẫn",
      "Tắt camera người khác"
    ],
    "correctAnswer": "Trình chiếu tài liệu/hướng dẫn"
  },
  {
    "question": "Tại sao cần kiểm tra micro/camera trước khi họp?",
    "options": [
      "Tránh sự cố kỹ thuật",
      "Để có thiết bị tốt nhất",
      "Để Google thu thập thông tin"
    ],
    "correctAnswer": "Tránh sự cố kỹ thuật"
  },
  {
    "question": "Khi lên kế hoạch, cần xác định gì đầu tiên?",
    "options": [
      "Ai sẽ ghi chép",
      "Xác định mục tiêu",
      "Chọn màu nền slide"
    ],
    "correctAnswer": "Xác định mục tiêu"
  },
  {
    "question": "Đâu KHÔNG phải nguyên tắc họp hiệu quả?",
    "options": [
      "Bắt đầu đúng giờ",
      "Khuyến khích tham gia",
      "Thảo luận tự do, lạc đề"
    ],
    "correctAnswer": "Thảo luận tự do, lạc đề"
  },
  {
    "question": "Đâu là nguyên tắc họp hiệu quả?",
    "options": [
      "Luôn bật camera",
      "Ghi chú ý chính",
      "Kéo dài cuộc họp"
    ],
    "correctAnswer": "Ghi chú ý chính"
  },
  {
    "question": "Việc họp đúng giờ thể hiện điều gì?",
    "options": [
      "Có đồng hồ tốt",
      "Tôn trọng thời gian của mọi người",
      "Không có nhiều thời gian"
    ],
    "correctAnswer": "Tôn trọng thời gian của mọi người"
  },
  {
    "question": "Hành vi nào là không tập trung trong họp?",
    "options": [
      "Đặt câu hỏi làm rõ",
      "Kể chuyện riêng không liên quan",
      "Ghi chép ý kiến"
    ],
    "correctAnswer": "Kể chuyện riêng không liên quan"
  },
  {
    "question": "Làm gì để khuyến khích mọi người tham gia?",
    "options": [
      "Chỉ định một người nói",
      "Tạo không khí cởi mở, đặt câu hỏi",
      "Phê bình người không có ý kiến"
    ],
    "correctAnswer": "Tạo không khí cởi mở, đặt câu hỏi"
  },
  {
    "question": "Lợi ích của việc ghi chú trong họp?",
    "options": [
      "Có bằng chứng khi tranh cãi",
      "Theo dõi quyết định và công việc",
      "Kiểm tra lỗi chính tả"
    ],
    "correctAnswer": "Theo dõi quyết định và công việc"
  },
  {
    "question": "Yếu tố nào gây mất tập trung khi họp online?",
    "options": [
      "Môi trường xung quanh ồn ào",
      "Âm thanh quá rõ",
      "Họp quá ngắn"
    ],
    "correctAnswer": "Môi trường xung quanh ồn ào"
  },
  {
    "question": "Đâu là nghề nghiệp làm việc trực tuyến?",
    "options": [
      "Bác sĩ phẫu thuật",
      "Lập trình viên",
      "Kỹ sư xây dựng"
    ],
    "correctAnswer": "Lập trình viên"
  },
  {
    "question": "Đặc trưng của nghề nghiệp trực tuyến?",
    "options": [
      "Bắt buộc làm tại văn phòng",
      "Làm việc qua máy tính, linh hoạt",
      "Thường xuyên đi công tác"
    ],
    "correctAnswer": "Làm việc qua máy tính, linh hoạt"
  },
  {
    "question": "Công việc của người sáng tạo nội dung số?",
    "options": [
      "Sửa chữa phần cứng",
      "Sản xuất nội dung số",
      "Quản lý mạng"
    ],
    "correctAnswer": "Sản xuất nội dung số"
  },
  {
    "question": "Đâu là ý tưởng khởi nghiệp trực tuyến?",
    "options": [
      "Mở nhà hàng",
      "Dịch vụ thiết kế online",
      "Xây dựng trang trại"
    ],
    "correctAnswer": "Dịch vụ thiết kế online"
  },
  {
    "question": "Vì sao cần \"thấu hiểu bản thân\" khi chọn nghề?",
    "options": [
      "Biết mình phù hợp và phát huy thế mạnh",
      "Chứng minh mình hơn người khác",
      "Vì công ty công nghệ yêu cầu"
    ],
    "correctAnswer": "Biết mình phù hợp và phát huy thế mạnh"
  },
  {
    "question": "Khi thành viên mất kết nối, nhóm nên làm gì?",
    "options": [
      "Phớt lờ và tiếp tục",
      "Yêu cầu nói to hơn",
      "Dừng lại, tóm tắt và hỗ trợ"
    ],
    "correctAnswer": "Dừng lại, tóm tắt và hỗ trợ"
  },
  {
    "question": "Khi họp sắp hết giờ, nhóm trưởng nên làm gì?",
    "options": [
      "Kết thúc, tóm tắt và hẹn họp mới",
      "Cứ tiếp tục đến khi bị ngắt",
      "Yêu cầu mọi người nâng cấp tài khoản"
    ],
    "correctAnswer": "Kết thúc, tóm tắt và hẹn họp mới"
  },
  {
    "question": "Làm gì khi có người nói lạc đề?",
    "options": [
      "Tắt micro của họ",
      "Cảm ơn và nhẹ nhàng nhắc lại chủ đề",
      "Nói thẳng ý kiến không liên quan"
    ],
    "correctAnswer": "Cảm ơn và nhẹ nhàng nhắc lại chủ đề"
  },
  {
    "question": "Mục tiêu phù hợp cho buổi họp giới thiệu sách?",
    "options": [
      "\"Để khoe mình đọc nhiều sách.\"",
      "\"Để chứng tỏ sách này hay nhất.\"",
      "\"Giúp mọi người hiểu nội dung và giá trị sách.\""
    ],
    "correctAnswer": "\"Giúp mọi người hiểu nội dung và giá trị sách.\""
  }
];
