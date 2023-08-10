import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Restaurant } from "../../../type";

const initialState: any = {
    retaurant: {
        id: null,
        imgUrl: null,
        title: null,
        rating: null,
        genre: null,
        address: null,
        short_description: null,
        dishes: null,
    },
};

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: initialState,
    reducers: {
        setRestaurant: function (state, action: PayloadAction<any>) {
            state.retaurant = action.payload;
        },
    },
});

export const selectRestaurant = function (state: RootState) {
    return state.restaurant.retaurant;
};

export const { setRestaurant } = restaurantSlice.actions;
export { restaurantSlice };
export default restaurantSlice.reducer;
