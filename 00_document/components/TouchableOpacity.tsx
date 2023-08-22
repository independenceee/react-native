// TouchableOpacity
type Props = {
    style: string;
    activeOpacity: number; // Xác định độ mờ của chế độ xem được bao bọc sẽ là bao nhiêu khi cảm ứng đang hoạt động. Mặc định là 0.2.
    tvParallaxProperties: Object;   // Đối tượng có các thuộc tính để kiểm soát các hiệu ứng thị sai của Apple TV.
                                    // enabled: Nếu true, hiệu ứng thị sai được bật. Mặc định là true.
                                    // shiftDistanceX: Mặc định là 2.0.
                                    // shiftDistanceY: Mặc định là 2.0.
                                    // tiltAngle: Mặc định là 0.05.
                                    // magnification: Mặc định là 1.0.
                                    // pressMagnification: Mặc định là 1.0.
                                    // pressDuration: Mặc định là 0.3.
                                    // pressDelay: Mặc định là 0.0.
    hasTVPreferredFocus: boolean; // Tiêu điểm ưa thích
    nextFocusDown: number; // TV tiếp theo tập trung xuống
    nextFocusForward: number; // TV tiếp theo tập trung về phía trước
    nextFocusRight: number; // Tiêu điểm tiếp theo của TV sang phải
    nextFocusUp: number; // Tiêu điểm tiếp theo của TV
}

