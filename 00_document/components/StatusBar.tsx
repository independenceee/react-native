// StatusBar
type Props = {
    currentHeight: number; // Chiều cao của thanh trạng thái, bao gồm cả chiều cao của rãnh, nếu có.
    animated: boolean; // default false => Nếu quá trình chuyển đổi giữa các thay đổi thuộc tính của thanh trạng thái sẽ được làm động. Được hỗ trợ cho backgroundColor và barStyle các hidden thuộc tính.
    backgroundColor: string; // default color black => Màu nền yêu cầu của thanh trạng thái
    barStyle: string; // default default => Màu của văn bản trên thanh trạng thái
    hidden: boolean // default false => Ẩn hiện thanh trạng thái
    networkActivityIndicatorVisible: boolean; // default false => Nếu chỉ báo hoạt động mạng sẽ hiển thị
    showHideTransition: string; // default fade => Hiệu ứng chuyển đổi khi hiển thị và ẩn thanh trạng thái bằng hidden prop
    translusent: boolean; // default false => Nếu thanh trạng thái mờ. Khi mờ được đặt thành true, ứng dụng sẽ vẽ dưới thanh trạng thái. Điều này hữu ích khi sử dụng màu thanh trạng thái bán trong suốt.
}