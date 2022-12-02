import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "X-RapidAPI-Key": "ba87fb649bmshffba27713de7994p1d5558jsn555001b771cb",
  "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
};
const baseUrl = "https://shazam-core.p.rapidapi.com/v1";
const createRequest = (url) => ({ url, headers });

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getTopChats: builder.query({
      query: () => createRequest("/charts/world"),
    }),
  }),
});

export const { useGetTopChatsQuery } = shazamApi;
