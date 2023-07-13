import { useAppSelector } from "@/app/hooks";

export function useCartData() {
  return useAppSelector((state) => state.cart.cart);
}
