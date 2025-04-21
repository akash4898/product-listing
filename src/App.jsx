import React from 'react'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Shop from './Pages/Shop'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import MainContext from './Context/MainContext'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Register from './Pages/Register'

export default function App() {
  const routes = createBrowserRouter(
    [
      {
        path:'/',
        element:<Layout />,
        children:[
          {
            path:'',
            element:<Home />
          },
          {
            path:'/about',
            element:<About />
          },
          {
            path:'/contact',
            element:<Contact />
          }
          ,
          {
            path:'/shop/:slug?',
            element:<Shop />
          },
          {
            path: '/productdetail/:productId',
            element:<ProductDetail/>
          },
          {
            path:'/cart',
            element:<Cart />
          },
          {
            path:'/login',
            element:<Login />
          },
          {
            path:'/register',
            element:<Register />
          }
        ]
      }
    ]
  )
  return (
    <>
    <MainContext>
        <RouterProvider  router={routes}/>
    </MainContext>
         
    </>
  )
}
