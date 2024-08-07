import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './components/Error';
import Products from './components/Products';
import ProductsKnitting from './components/ProductsKnitting';
import ProductsYarn from './components/ProductsYarn';
import ProductCatalog from './components/ProductsKnitting';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([{
  path: '/',
  element: <>
    <Navbar />
    <Hero />
    <Footer />
  </>,
  errorElement: <><Navbar /><Error /><Footer /></>
},
{
  path: '/products',
  element: <>
    <Navbar />
    <Products />
    <Footer />
  </>
},
{
  path: '/products-knitting',
  element: <>
    <Navbar />
    <ProductCatalog />
    <Footer />
  </>
},
{
  path: '/products-yarn',
  element: <>
    <Navbar />
    <ProductsYarn />
    <Footer />
  </>
}
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <App />
  </React.StrictMode>
);

reportWebVitals();
