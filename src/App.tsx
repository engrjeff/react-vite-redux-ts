import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Root from "./app/routes/root";
import Products from "./app/routes/products";
import FavoritesPage from "./app/features/favorite/favorites-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/products/category/:category",
        element: <Products />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar
      />
    </>
  );
}

export default App;
