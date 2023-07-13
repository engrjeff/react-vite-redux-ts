import { Link } from "react-router-dom";
import ProductItem from "../product/product-item";
import { useFavorites } from "./hooks";

function FavoritesPage() {
  const { isLoading, data, isError } = useFavorites();

  if (isError) return <p>An error has occured</p>;

  if (isLoading && !data) return <p>Loading...</p>;

  if (!data.length && !isLoading)
    return (
      <div>
        <p>No favorites yet</p>
        <Link to='/' className='underline'>
          Back to Home
        </Link>
      </div>
    );

  return (
    <div className='flex-1'>
      <div className='flex items-center justify-between mb-6'>
        <Link to='/' className='hover:underline'>
          Back to Home
        </Link>
        <h2 className='text-xl font-bold'>Favorite Products</h2>
      </div>
      <div className='grid grid-cols-3 gap-6'>
        {data.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
