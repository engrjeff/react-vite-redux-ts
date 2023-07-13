import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { HeartIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { useAppSelector } from "@/app/hooks";

function FavoriteLink() {
  const favoriteItems = useAppSelector((state) => state.favorite.favoriteItems);

  return (
    <Link
      to='favorites'
      className={cn(
        buttonVariants({ variant: "outline" }),
        "h-8 w-8 p-0 relative"
      )}
    >
      <span className='sr-only'>View favorites</span>
      <HeartIcon />
      <span className='inline-flex rounded-full bg-red-600 text-white h-4 w-4 items-center justify-center text-xs absolute -top-2 -right-2'>
        {favoriteItems.length}
      </span>
    </Link>
  );
}

export default FavoriteLink;
