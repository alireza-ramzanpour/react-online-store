import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Products from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import Blog from './components/Blog';
import Shop from './components/Shop';
import Product , {loader as productLoader} from './components/Product';
import { Provider } from 'react-redux';
import Store from './Store';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'nav',
        element: <Nav />
      },
      {
        path: 'footer',
        element: <Footer />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:name',
        element: <Product />,
        loader: productLoader
      },

    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
