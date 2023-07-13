import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

import { type Product } from "./types";
import FavoriteButton from "../favorite/favorite-button";
import AddToCartButton from "./add-to-cart-button";

interface Props {
  product: Product;
}
function ProductItem({ product }: Props) {
  return (
    <Card className='flex flex-col shadow-none'>
      <CardContent className='py-4 relative'>
        <img
          src={product.image}
          alt={product.title}
          className='aspect-video object-contain'
        />
        <FavoriteButton productId={product.id} />
      </CardContent>
      <CardHeader className='flex-1'>
        <CardTitle className='line-clamp-2'>{product.title}</CardTitle>
        <CardDescription className='line-clamp-3'>
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  );
}

export default ProductItem;
