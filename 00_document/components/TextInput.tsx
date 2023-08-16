// TextInput

type Props = {
    isFocused(): boolean; // Trả về true nếu đầu vào hiện đang được đặt tiêu điểm; false nếu không thì.
    clear(): void; // Xóa tất cả văn bản khỏi tệp
    blur(): void; // Làm cho đầu vào mất gôc tiêu điểm
    focus(): void; // Làm cho đầu vào được đặt tiêu điểm
    value: string; // Nội dung tiêu điểm
    readOnly: boolean; // Nếu true, văn bản không thể chỉnh sửa. Giá trị mặc định là false.
    placeholder: string; // Chuỗi sẽ được hiển thị trước khi nhập văn bản.
    placeholderTextColor: string; // Màu văn bản của chuỗi giữ chỗ
    onBlur(): void; // Gọi lại được gọi khi nhập văn bản bị mờ.
    onChangeText(text: string): void; // Thay đổi nội dung tiêu điểm
    onChange({nativeEvent: {eventCount, target, text}}): any; // Gọi lại được gọi khi văn bản của đầu vào văn bản thay đổi.
    maxLength: number; // Giới hạn số ký tự tối đa có thể nhập. Sử dụng điều này thay vì triển khai logic trong JS để tránh nhấp nháy.
    keyboardType: string; // Xác định bàn phím nào sẽ mở
    multiline: boolean; // Nếu true, văn bản nhập vào có thể là nhiều dòng. Giá trị mặc định là false.
}