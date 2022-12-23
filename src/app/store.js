import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { gamesApi } from "../services/gamesApi";
import { newsApi } from "../services/newsApi";
import { pizzaApi } from "../services/pizzaApi";
import { weatherApi } from "../services/weatherApi";
import { loveApi } from "../services/loveApi";
import { videoApi } from "../services/videoApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [weatherApi.reducerPath]: weatherApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
        [pizzaApi.reducerPath]: pizzaApi.reducer,
        [gamesApi.reducerPath]: gamesApi.reducer,
        [loveApi.reducerPath] : loveApi.reducer,
        [videoApi.reducerPath] : videoApi.reducer
    }
})