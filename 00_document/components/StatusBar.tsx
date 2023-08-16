// StatusBar
type Props = {
    currentHeight: number; // Chiều cao của thanh trạng thái, bao gồm cả chiều cao của rãnh, nếu có.
    animated: boolean; // Nếu quá trình chuyển đổi giữa các thay đổi thuộc tính của thanh trạng thái sẽ được làm động. Được hỗ trợ cho backgroundColor và barStyle các hidden thuộc tính.
    backgroundColor: string; // Màu nền yêu cầu của thanh trạng thái
    setBackgroundColor: (color: string, animated?: boolean) => void;
    barStyle: string; // Màu của văn bản trên thanh trạng thái
    setBarStyle: (style: string, animated?: boolean) => void;
    hidden: boolean // Ẩn hiện thanh trạng thái
    setHidden: (hidden: boolean, animated?: string) => void;
    networkActivityIndicatorVisible: boolean; // Nếu chỉ báo hoạt động mạng sẽ hiển thị
    setNetworkActivityIndicatorVisible: (visible: boolean) => void;
    showHideTransition: string; // Hiệu ứng chuyển đổi khi hiển thị và ẩn thanh trạng thái bằng hidden prop
    translusent: boolean; // Nếu thanh trạng thái mờ. Khi mờ được đặt thành true, ứng dụng sẽ vẽ dưới thanh trạng thái. Điều này hữu ích khi sử dụng màu thanh trạng thái bán trong suốt.

    setTranslusent: (translucent: boolean) => void;
    popStackEntry: (props: StatusBarProps) => void;
    pushStackEntry: (props: StatusBarProps) => void;
    replaceStackEntry: (entry:  StatusBarProps, props: StatusBarProps) => StatusBarProps;
}

type StatusBarProps = {}
type StatusBarAnimation = string // "fade" , "slide" , "none"
type StatusBarStyle = string // "default" , "light-content" , "dark-content"