import ProductItem from "./product-item";
import { Product } from "./types";

interface Props {
  products: Product[];
}

function ProductList({ products }: Props) {
  return (
    <div>
      <h2 className='mb-6 text-xl font-bold'>Products</h2>
      <div className='grid grid-cols-3 gap-6'>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
