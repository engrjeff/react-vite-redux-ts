import { Outlet } from "react-router-dom";

import Categories from "../features/category/categories";
import Header from "@/components/header";

function Root() {
  return (
    <>
      <Header />
      <main className='flex max-w-6xl container p-6 relative'>
        <Categories />
        <Outlet />
      </main>
    </>
  );
}

export default Root;
