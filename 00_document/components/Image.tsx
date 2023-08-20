// Image
type Props =  {
    style: Object; // Đặt kiểu cho hình ảnh
    resizeMode: string; // Xác định thay đổi kích thước ảnh khi khung không khớp với ảnh thô
    /*
        - cover: Chia tỷ lệ hình ảnh đồng đều (duy trì tỷ lệ khung hình của hình ảnh) sao cho
        cả hai kích thước (chiều rộng và chiều cao) của hình ảnh sẽ bằng hoặc lớn hơn kích thước
        tương ứng của chế độ xem (trừ phần đệm).
        ít nhất một kích thước của hình ảnh được chia tỷ lệ sẽ bằng với kích thước tương ứng của 
        chế độ xem (trừ phần đệm)
        - contain: Chia tỷ lệ hình ảnh một cách đồng nhất (duy trì tỷ lệ khung hình của hình ảnh) 
        sao cho cả hai kích thước (chiều rộng và chiều cao) của hình ảnh sẽ bằng hoặc nhỏ hơn kích
        thước tương ứng của chế độ xem (trừ phần đệm).
        - stretch: Chia tỷ lệ chiều rộng và chiều cao một cách độc lập, Điều này có thể thay đổi 
        tỷ lệ khung hình của src.
        - repeat: Lặp lại hình ảnh để che khung của khung nhìn. Hình ảnh sẽ giữ nguyên kích thước 
        và tỷ lệ khung hình, trừ khi nó lớn hơn chế độ xem, trong trường hợp đó, nó sẽ được thu 
        nhỏ lại một cách thống nhất để chứa trong chế độ xem.
        - center: Căn giữa hình ảnh trong chế độ xem dọc theo cả hai chiều. Nếu hình ảnh lớn hơn 
        chế độ xem, hãy thu nhỏ nó xuống một cách thống nhất để nó được chứa trong chế độ xem.
    */
    source: { uri : string  }; // Xác định nguồn của ảnh
    src: string; // Một chuỗi đại diện cho URL từ xa của hình ảnh. Prop này được ưu tiên hơn source prop.
    srcSet: string; // Một chuỗi đại diện cho danh sách nguồn hình ảnh ứng cử viên có thể được phân tách 
                    // bằng dấu phẩy. Mỗi nguồn hình ảnh chứa một URL của hình ảnh và bộ mô tả mật độ pixel.
                    // Nếu không có bộ mô tả nào được chỉ định, nó sẽ mặc định là bộ mô tả của 1x.
    testID: string; // Mã định danh duy nhất cho phần tử này sẽ được sử dụng trong tập lệnh thử nghiệm Tự động 
                    // hóa giao diện người dùng.
    tintColor: string; // Thay đổi màu của tất cả các pixel không trong suốt thành tintColor.
}