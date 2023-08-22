// VirtualizedList
type Props = {
    /*
        @extends {ScrollViewProps}
    */ 
    getItem: (data: any, index: string) => any; // Một trình truy cập chung để trích xuất một mục từ bất kỳ loại blob dữ liệu nào.
    getItemCount: (data: any) => number; // Xác định có bao nhiêu mục trong blob dữ liệu.
    renderItem: (info: any) => ?React.Element<any>!; // Lấy một mục từ datavà hiển thị nó vào danh sách
    getItemLayout: (data: any, index: number) => { length: number; offset: number; index: number};
    horizontal: boolean; // Nếu true, hiển thị các mục cạnh nhau theo chiều ngang thay vì xếp chồng lên nhau theo chiều dọc.
    initialNumToRender: number; // Có bao nhiêu mục để hiển thị trong đợt đầu tiên. Điều này là đủ để lấp đầy màn hình nhưng không nhiều hơn nữa. Lưu ý rằng các mục này sẽ không bao giờ bị ngắt kết nối như một phần của kết xuất cửa sổ nhằm cải thiện hiệu suất cảm nhận được của các hành động cuộn lên trên cùng.
    initialScrollIndex: number; // hay vì bắt đầu từ đầu với mục đầu tiên, hãy bắt đầu từ initialScrollIndex. Điều này vô hiệu hóa tính năng tối ưu hóa "cuộn lên trên cùng" giúp giữ cho initialNumToRendercác mục đầu tiên luôn được hiển thị và ngay lập tức hiển thị các mục bắt đầu từ chỉ mục ban đầu này. Yêu cầu getItemLayoutphải được thực hiện
    inverted: boolean; // Đảo ngược hướng cuộn. Sử dụng các phép biến đổi tỷ lệ của -1.
    listKey: string; // Mã định danh duy nhất cho danh sách này. Nếu có nhiều Danh sách ảo hóa ở cùng cấp độ lồng trong một Danh sách ảo hóa khác, khóa này cần thiết để quá trình ảo hóa hoạt động bình thường.
    keyExtractor: (item: any, index: number) => string; // Được sử dụng để trích xuất một khóa duy nhất cho một mục nhất định tại chỉ mục đã chỉ định. Khóa được sử dụng để lưu vào bộ nhớ đệm và làm khóa phản ứng để theo dõi việc sắp xếp lại mặt hàng. Trình trích xuất mặc định kiểm tra item.key, then item.idvà sau đó quay lại sử dụng chỉ mục, giống như React.
    maxToRenderPerBatch: number; // Số mục tối đa để kết xuất trong mỗi lô kết xuất gia tăng. Càng hiển thị nhiều cùng một lúc thì tỷ lệ lấp đầy càng cao nhưng khả năng phản hồi có thể bị ảnh hưởng vì nội dung hiển thị có thể cản trở việc phản hồi khi nhấn nút hoặc các tương tác khác.
    onEndReached: (info: {distanceFromEnd: number}) => void; // Được gọi một lần khi vị trí cuộn nằm trong khoảng onEndReachedThreshold từ cuối logic của danh sách.
    scrollToOffset(params: { offset: number; animated?: boolean; }); // Được sử dụng để xử lý các lỗi khi cuộn đến một chỉ mục chưa được đo. Hành động được đề xuất là tính toán phần bù của riêng bạn và phần bù scrollTođó hoặc cuộn càng nhiều càng tốt rồi thử lại sau khi nhiều mục khác đã được hiển thị.
    onScrollToIndexFailed: (info: { index: number, highestMeasuredFrameIndex: number, averageItemLength: number, }) => void;
    scrollToItem(params: { item: Item; animated?: boolean; viewOffset?: number; viewPosition?: number; }); // 'mục' (Mục). Yêu cầu. 'hoạt hình' (boolean). Không bắt buộc. 'viewOffset' (số). Không bắt buộc. 'viewPosition' (số). Không bắt buộc.
    refreshing: boolean; // Đặt giá trị này đúng trong khi chờ dữ liệu mới được làm mới. Cuộn đến phần bù pixel nội dung cụ thể trong danh sách. Thông số offsetdự kiến ​​​​phần bù sẽ cuộn đến. Trong trường hợp horizontallà đúng, phần bù là giá trị x, trong mọi trường hợp khác, phần bù là giá trị y. Param animated( truetheo mặc định) xác định xem danh sách có nên tạo hoạt ảnh khi cuộn hay không.
    onRefresh: () => void; // Nếu được cung cấp, một tiêu chuẩn RefreshControlsẽ được thêm vào cho chức năng "Kéo để làm mới". Đảm bảo cũng đặt refreshing giá đỡ chính xác.
    onStartReached: (info: {distanceFromStart: number}) => void; // Được gọi một lần khi vị trí cuộn nằm trong khoảng từ onStartReachedThreshold đầu logic của danh sách.
    onStartReachedThreshold: number; // Khoảng cách từ điểm bắt đầu (tính theo đơn vị độ dài hiển thị của danh sách) cạnh đầu của danh sách phải cách điểm bắt đầu nội dung để kích hoạt lệnh onStartReachedgọi lại. Do đó, giá trị 0,5 sẽ kích hoạt onStartReachedkhi phần đầu của nội dung nằm trong một nửa độ dài hiển thị của danh sách.
    onViewableItemsChanged: (callback: {changed: ViewToken[], viewableItems: ViewToken[]}) => void; // Được gọi khi khả năng xem của các hàng thay đổi, như được định nghĩa bởi viewabilityConfigprop.
    persistentScrollbar: boolean;
    scrollToIndex(params: {index: number; animated?: boolean; viewOffset?: number; viewPosition?: number; }); // Hợp lệ paramsbao gồm: 'chỉ số' (số). Yêu cầu. 'hoạt hình' (boolean). Không bắt buộc. 'viewOffset' (số). Không bắt buộc. 'viewPosition' (số). Không bắt buộc.
    scrollToEnd(params?: {animated?: boolean});
    getScrollResponder () => ScrollResponderMixin | null;
    flashScrollIndicators();
    getScrollRef():| React.ElementRef<typeof ScrollView> | React.ElementRef<typeof View> | null;
    getScrollableNode(): any;
    windowSize: number; // Xác định số lượng mục tối đa được hiển thị bên ngoài vùng hiển thị, theo đơn vị độ dài hiển thị. Vì vậy, nếu danh sách của bạn lấp đầy màn hình thì windowSize={21}(mặc định) sẽ hiển thị vùng màn hình hiển thị cộng với tối đa 10 màn hình phía trên và 10 màn hình bên dưới khung nhìn. Giảm con số này sẽ giảm mức tiêu thụ bộ nhớ và có thể cải thiện hiệu suất, nhưng sẽ làm tăng khả năng cuộn nhanh có thể hiển thị các vùng trống tạm thời của nội dung chưa được hiển thị.
    updateCellsBatchingPeriod: number; // Khoảng thời gian giữa các đợt hiển thị mục có giá trị thấp, ví dụ: để hiển thị các mục ở khá xa màn hình. Sự cân bằng giữa tỷ lệ lấp đầy/khả năng phản hồi tương tự như maxToRenderPerBatch.
    progressViewOffset: number; //Đặt giá trị này khi cần bù đắp để chỉ báo tải hiển thị chính xác.
    refreshControl: Emement; // Một yếu tố kiểm soát làm mới tùy chỉnh. Khi được đặt, nó sẽ ghi đè thành <RefreshControl> phần mặc định được tạo bên trong. Các đạo cụ onRefresh và refresh cũng bị bỏ qua. Chỉ hoạt động cho VirtualizedList dọc.
    renderScrollComponent: (props: object) => element; // Kết xuất thành phần cuộn tùy chỉnh, ví dụ: với kiểu RefreshControl.
    viewabilityConfig: ViewabilityConfig; // Xem ViewabilityHelper.js loại dòng chảy và tài liệu khác.
    viewabilityConfigCallbackPairs: Array<ViewabilityConfigCallbackPair>; // Danh sách ViewabilityConfig/ onViewableItemsChangedcặp. Một cái cụ thể onViewableItemsChangedsẽ được gọi khi ViewabilityConfigcác điều kiện tương ứng của nó được đáp ứng. Xem ViewabilityHelper.jsloại dòng chảy và tài liệu khác.
}