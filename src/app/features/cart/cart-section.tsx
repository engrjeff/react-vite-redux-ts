import { useCartData } from "./hooks";
import { removeFromCart, type CartItem } from "./cartSlice";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/app/hooks";
import { toast } from "react-toastify";

function CartSection() {
  const cartData = useCartData();

  if (cartData.length === 0) {
    return (
      <div className='h-52 flex items-center justify-center p-4 border rounded-lg my-6'>
        Your cart is empty
      </div>
    );
  }

  const total = cartData.reduce((acc, cartItem) => {
    const subtotal = cartItem.product.price * cartItem.quantity;
    return acc + subtotal;
  }, 0);

  return (
    <div>
      <h3 className='text-lg font-semibold'>Your Cart</h3>
      <ul>
        {cartData.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartListItem cartItem={cartItem} />
          </li>
        ))}
      </ul>
      <div className='font-bold uppercase flex justify-between border-y border-dashed py-6 my-6'>
        Total: <span>PHP {total}</span>
      </div>
    </div>
  );
}

export default CartSection;

const CartListItem = ({ cartItem }: { cartItem: CartItem }) => {
  const { product, quantity } = cartItem;

  const dispatch = useAppDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ productId: product.id }));

    toast.success("Removed from cart!");
  };
  return (
    <div className='flex gap-4 py-4'>
      <div className='w-12 h-12'>
        <img
          src={product.image}
          alt={product.title}
          className='w-full h-full object-contain'
        />
      </div>
      <div>
        <h2 className='font-medium line-clamp-1'>{product.title}</h2>
        <span>x{quantity}</span> @ <span>PHP {product.price}</span>
      </div>
      <div>
        <Button
          className='h-8 w-8 p-0'
          variant='outline'
          onClick={handleRemoveFromCart}
        >
          <span className='sr-only'>Remove from cart</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};
