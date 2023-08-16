// - resizeMode
/*
    - cover:    Chia tỷ lệ hình ảnh đồng đều (duy trì tỷ lệ khung hình của hình ảnh) sao cho:
                Cả hai kích thước (chiều rộng và chiều cao) của hình ảnh sẽ bằng hoặc lớn hơn
                kích thước tương ứng của chế độ xem (trừ phần đệm)
                Ít nhất một kích thước của hình ảnh được chia tỷ lệ sẽ bằng với kích thước 
                tương ứng của chế độ xem (trừ phần đệm)

    - contain:  Chia tỷ lệ hình ảnh một cách đồng nhất (duy trì tỷ lệ khung hình của hình ảnh) 
                sao cho cả hai kích thước (chiều rộng và chiều cao) của hình ảnh sẽ bằng hoặc 
                nhỏ hơn kích thước tương ứng của chế độ xem (trừ phần đệm).

    - stretch:  Chia tỷ lệ chiều rộng và chiều cao một cách độc lập, Điều này có thể thay đổi
                tỷ lệ khung hình của src.

    - repeat:   Lặp lại hình ảnh để che khung của khung nhìn. Hình ảnh sẽ giữ nguyên kích thước
                và tỷ lệ khung hình, trừ khi nó lớn hơn chế độ xem, trong trường hợp đó, nó sẽ 
                được thu nhỏ lại một cách thống nhất để chứa trong chế độ xem.

    - center:   Căn giữa hình ảnh trong chế độ xem dọc theo cả hai chiều. Nếu hình ảnh lớn hơn 
                chế độ xem, hãy thu nhỏ nó xuống một cách thống nhất để nó được chứa trong chế 
                độ xem.
*/

// - backfaceVisibility: Thuộc tính xác định xem mặt sau của hình ảnh được xoay có hiển thị hay không.
// - overflow: thanh scroll
// - overlayColor: Khi hình ảnh có các góc được bo tròn, việc chỉ định một OverlayColor sẽ làm cho khoảng trống 
// còn lại ở các góc được lấp đầy bằng một màu đồng nhất
// - opacity: Đặt giá trị độ mờ cho hình ảnh. Số phải nằm trong phạm vi từ 0.0 đến 1.0.
// - objectFit: Xác định cách thay đổi kích thước hình ảnh khi khung không khớp với kích thước hình ảnh thô.
// - tintColor: Thay đổi màu của tất cả các điểm ảnh không trong suốt thành màu tintColor.