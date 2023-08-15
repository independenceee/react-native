// KeyboardAvoidingView
type Props = {
    behavior: string; // Chỉ định cách phản ứng với sự hiện diện của bàn phím.
    enabled: boolean; // Đã bật hoặc tắt Chế độ xem Bàn phím Avoiding.
    keyboardVerticalOffset: number; // Đây là khoảng cách giữa đầu màn hình người dùng và chế độ xem gốc phản ứng, có thể khác không trong một số trường hợp sử dụng.
    contentContainerStyle: string; // Kiểu của bộ chứa nội dung (Chế độ xem) khi hành vi là 'position'.
}
