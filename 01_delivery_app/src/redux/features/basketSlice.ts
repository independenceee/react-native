import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: any = {
    items: [],
};

const basketSlice = createSlice({
    name: "basket",
    initialState: initialState,
    reducers: {
        addToBasket: function (state, action: PayloadAction<any>) {
            state.items = [...state.items, action.payload];
        },
        removeFromBasket: function (state, action: PayloadAction<any>) {
            const index = state.items.findIndex(function (item: any) {
                return item.id == action.payload.id;
            });
            let newBasket = [...state.items];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can remove product (id: ${action.payload.id}) as its not in basket !`,
                );
            }
        },
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectBasketItems = (state: RootState) => {
    return state.basket.items;
};

export const selectBasketItemsWithId = function (state: RootState, id: any) {
    return state.basket.items.filter(function (item: any) {
        item.id == id;
    });
};

export const selectBasketTotal = function (state: RootState) {
    state.basket.items.reduce((total: any, item: any) => {
        return (total += item.price);
    }, 0);
};
export { basketSlice };
export default basketSlice.reducer;
