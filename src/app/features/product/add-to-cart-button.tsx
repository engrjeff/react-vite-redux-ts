import { useAppDispatch } from "@/app/hooks";
import { Button } from "@/components/ui/button";
import { addToCart } from "../cart/cartSlice";
import { Product } from "./types";
import { toast } from "react-toastify";

interface Props {
  product: Product;
}

function AddToCartButton({ product }: Props) {
  const dispatch = useAppDispatch();

  function handleAddToCart() {
    dispatch(addToCart({ product, quantity: 1 }));

    toast.success(`${product.title} was added to cart!`);
  }

  return (
    <Button className='w-full' onClick={handleAddToCart}>
      Add to Cart
    </Button>
  );
}

export default AddToCartButton;
