// FlatList

type Props = {
    data: Array<any>; // Một mảng (hoặc danh sách dạng mảng) gồm các mục cần hiển thị. Các loại dữ liệu khác có thể được sử dụng bằng cách nhắm mục tiêu VirtualizedList trực tiếp.
    renderItem: ({
        item: any, 
        index: number, 
        separators: {
            hightLight: () => void;
            unhighLight: () => void;
            updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
        }
    }) => JSX.Element; // render item
    keyExtractor: (item: any, index: number) => string; // keyExtractor
    horizontal: boolean; // Nếu true, hiển thị các mục cạnh nhau theo chiều ngang thay vì xếp chồng lên nhau theo chiều dọc.
}