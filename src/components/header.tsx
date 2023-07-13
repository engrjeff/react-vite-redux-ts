import CartLink from "@/app/features/cart/cart-link";
import FavoriteLink from "@/app/features/favorite/favorite-link";

function Header() {
  return (
    <header className='h-24 w-full border-b sticky top-0 bg-background z-10'>
      <div className='h-full container max-w-6xl flex items-center justify-between'>
        <h1 className='text-xl font-bold'>MyStore</h1>
        <div className='flex items-center gap-4'>
          <FavoriteLink />
          <CartLink />
        </div>
      </div>
    </header>
  );
}

export default Header;
