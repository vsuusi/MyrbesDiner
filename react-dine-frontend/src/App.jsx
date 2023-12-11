import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Checkout from '../pages/Checkout'
import ErrorPage from '../pages/ErrorPage'
import RootLayout from '../pages/RootLayout'

function App() {

  const router = createBrowserRouter([
    {path: "/", element: <RootLayout/>, errorElement: <ErrorPage/>, children: [
      {path: "/", element: <Home/>},
      {path: "/checkout", element: <Checkout/>}
    ]}
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App