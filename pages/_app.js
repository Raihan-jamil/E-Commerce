import '../styles/globals.css';
import '../public/bootstrap_css/bootstrap.min.css';
import { Header } from '../components/Header/Header';
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext([]);
function MyApp({ Component, pageProps }) {
  const [cartItem, setCartItem] = useState([]);

  const cartHandle = (item) => {
    setCartItem([...cartItem, item]);

    console.log(cartItem);
  };

  const cartInitial = (item) => {
    setCartItem(item);
  };

  useEffect(() => {
    const previousItems = JSON.parse(localStorage.getItem('cartItem'));

    if (previousItems) {
      setCartItem(previousItems);
    }
  }, []);
  return (
    <CartContext.Provider value={{ cartItem, cartHandle, cartInitial }}>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </CartContext.Provider>
  );
}

export default MyApp;
