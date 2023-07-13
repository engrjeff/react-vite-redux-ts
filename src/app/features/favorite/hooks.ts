import { useAppSelector } from "@/app/hooks";
import { useGetProductsQuery } from "@/app/services/product";

export function useFavorites() {
  const favorites = useAppSelector((state) => state.favorite.favoriteItems);

  const { data, ...rest } = useGetProductsQuery(undefined);

  return {
    ...rest,
    data: data ? data.filter((d) => favorites.includes(d.id)) : [],
  };
}
