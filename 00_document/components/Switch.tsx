// Switch
type Props = {
    value: boolean; // default false => Giá trị của công tắc. Nếu đúng, công tắc sẽ được bật. Giá trị mặc định là sai.
    disable: boolean; // default true => Nếu đúng, người dùng sẽ không thể bật công tắc.
    ios_backgroundColor: string; // default color => Trên iOS, tùy chỉnh màu nền. Màu nền này có thể được nhìn thấy khi giá trị chuyển đổi là false hoặc khi chuyển đổi bị tắt (và chuyển đổi trong mờ).
    trackColor: Object; // object: {false: color, true: color} => Màu tùy chỉnh cho rãnh chuyển đổi.
    thumbColor: string; // default color => Màu của tay cầm công tắc ở phía trước. Nếu điều này được đặt trên iOS, tay cầm công tắc sẽ mất bóng đổ.
    onChange: () => void; // _ => Được gọi khi người dùng cố gắng thay đổi giá trị của công tắc. Nhận sự kiện thay đổi làm đối số. Nếu bạn chỉ muốn nhận giá trị mới, hãy sử dụng onValueChange thay thế.
    onChangeValue: () => void; // _ => Được gọi khi người dùng cố gắng thay đổi giá trị của công tắc. Nhận giá trị mới làm đối số. Thay vào đó, nếu bạn muốn nhận một sự kiện, hãy sử dụng onChange.
};



