import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import ErrorPage from './pages/ErrorPage';
import RootLayout from './pages/RootLayout';
import CartPage from './pages/CartPage';

function App() {

  const router = createBrowserRouter([
    {path: "/", element: <RootLayout/>, errorElement: <ErrorPage/>, children: [
      {path: "/", element: <HomePage/>},
      {path: "/cart", element: <CartPage/>},
      {path: "/checkout", element: <CheckoutPage/>}
    ]}
  ])

  return (
    <>
      <CartProvider>
        <RouterProvider router={router}/>
      </CartProvider>
    </>
  )
};

export default App