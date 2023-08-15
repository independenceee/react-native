// RefreshControl

type Props = {
    refreshing: boolean;            // Chế độ xem có nên biểu thị quá trình làm mới đang hoạt động hay không.
    colors: string;                 // Các màu (ít nhất một) sẽ được sử dụng để vẽ chỉ báo làm mới.
    enabled: boolean;               // Tính năng kéo để làm mới có được bật hay không.
    onRefresh: () => void;          // Được gọi khi chế độ xem bắt đầu làm mới
    progressBackgroundColor: string;// Màu nền của chỉ báo làm mới
    progressViewOffset: number      // Tiến độ xem bù đắp hàng đầu
    size: number;                   // Kích thước của chỉ báo làm mới
    title: string;                  // Màu của chỉ báo làm mới
    titleColor: string;             // Tiêu đề được hiển thị dưới chỉ báo làm mới
    tintColor: string;              // Màu của tiêu đề chỉ báo làm mới
}