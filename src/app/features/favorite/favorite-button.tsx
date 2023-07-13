import { Button } from "@/components/ui/button";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { addToFavorite, removeFromFavorite } from "../favorite/favoriteSlice";
import { toast } from "react-toastify";

interface Props {
  productId: number;
}

function FavoriteButton({ productId }: Props) {
  const favoriteItems = useAppSelector((state) => state.favorite.favoriteItems);
  const dispatch = useAppDispatch();

  const isInFavorite = favoriteItems.includes(productId);

  function handleFavoriteToggle() {
    if (isInFavorite) {
      dispatch(
        removeFromFavorite({
          productId,
        })
      );

      toast.success("Removed from favorites");
      return;
    }
    dispatch(
      addToFavorite({
        productId,
      })
    );
    toast.success("Added to favorites");
  }

  return (
    <Button
      onClick={handleFavoriteToggle}
      variant='ghost'
      className='h-8 w-8 p-0 absolute top-2 right-2'
    >
      <span className='sr-only'>Favorite</span>
      {isInFavorite ? (
        <HeartFilledIcon className='text-red-600' />
      ) : (
        <HeartIcon />
      )}
    </Button>
  );
}

export default FavoriteButton;
