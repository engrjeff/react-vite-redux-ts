import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../features/product/types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], string | undefined>({
      query: (category?: string) =>
        category ? `/products/category/${category}` : "/products",
    }),
    getCategories: builder.query<string[], void>({
      query: () => "/products/categories",
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productApi;
