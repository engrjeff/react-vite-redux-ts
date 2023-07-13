import { useGetCategoriesQuery } from "@/app/services/product";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

function Categories() {
  const { isLoading, data } = useGetCategoriesQuery();

  if (isLoading)
    return (
      <div className='w-60 shrink-0 pr-6'>
        <p>Loading...</p>
      </div>
    );

  return (
    <nav className='w-60 shrink-0 pr-6'>
      <ul className='space-y-2'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              cn(
                buttonVariants({ variant: isActive ? "default" : "ghost" }),
                "capitalize w-full inline-block"
              )
            }
          >
            All
          </NavLink>
        </li>
        {data?.map((category) => (
          <li key={category}>
            <NavLink
              to={`/products/category/${category}`}
              className={({ isActive }) =>
                cn(
                  buttonVariants({ variant: isActive ? "default" : "ghost" }),
                  "capitalize w-full inline-block"
                )
              }
            >
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Categories;
