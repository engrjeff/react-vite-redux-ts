import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useAppSelector } from "@/app/hooks";
import CartSection from "./cart-section";

function CartLink() {
  const cartData = useAppSelector((state) => state.cart.cart);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='relative'>
          Cart
          {cartData.length > 0 && (
            <span className='inline-flex rounded-full bg-red-600 text-white h-4 w-4 items-center justify-center text-xs absolute -top-2 -right-2'>
              {cartData.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className='w-[600px]'>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>This is your current cart.</SheetDescription>
        </SheetHeader>
        <CartSection />
        <SheetFooter>
          <SheetClose asChild>
            <Button type='button'>Check Out</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default CartLink;
