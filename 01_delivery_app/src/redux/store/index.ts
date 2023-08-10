import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../features/basketSlice";
import restaurantSlice from "../features/restaurantSlice";

const store = configureStore({
    reducer: {
        basket: basketSlice,
        restaurant: restaurantSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
