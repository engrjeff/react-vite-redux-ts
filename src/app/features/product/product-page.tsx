import ProductList from "./product-list";
import { useGetProducts } from "./hooks";

const ProductPage = () => {
  const { isLoading, data, isError } = useGetProducts();

  if (isError) return <p>An error has occured</p>;

  if (isLoading && !data) return <p>Loading...</p>;

  if (!data && !isLoading) return <p>No data</p>;

  return (
    <div>
      <ProductList products={data} />
    </div>
  );
};

export default ProductPage;
