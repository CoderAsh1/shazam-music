import { configureStore } from "@reduxjs/toolkit";
import { shazamApi } from "./slices/shazamApi";

const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamApi.middleware),
});

export default store;
