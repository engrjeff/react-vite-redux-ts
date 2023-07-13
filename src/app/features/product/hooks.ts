import { useGetProductsQuery } from "@/app/services/product";
import { useParams } from "react-router-dom";

export function useGetProducts() {
  const { category } = useParams();

  return useGetProductsQuery(category);
}
