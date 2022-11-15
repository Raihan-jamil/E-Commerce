import { useEffect, useState } from 'react';
import CartTile from '../../components/CartTile/CartTile';
import { useRouter } from 'next/router';

const ShoppingCart = () => {
  const [displayCartItem, setDisplayCartItem] = useState();
  const [countItem, setCountItem] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem('cartItem'));
    setDisplayCartItem(temp);
    counter = {};
    let counter;
    temp?.forEach(function (obj) {
      var key = JSON.stringify(obj);
      counter[key] = (counter[key] || 0) + 1;
    });

    let index = 1;
    let cart = [];
    let currentPrice = 0;
    for (const property in counter) {
      let totalCount = counter[property];
      let item = JSON.parse(property);
      currentPrice += parseInt(totalCount) * parseInt(item.price);
      item.price = parseInt(totalCount) * parseInt(item.price);

      setTotalPrice(currentPrice);

      const newItem = { index, item, totalCount };
      cart.push(newItem);
      index++;
    }

    setCountItem(cart);
  }, []);

  const handleCheckOut = () => {
    router.push({
      pathname: '/checkoutPage',
    });
    localStorage.setItem('checkOutItem', JSON.stringify(countItem));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  };

  return (
    <div className="m-5 d-flex justify-content-center overflow-auto">
      <div className="container ">
        <table className="table ">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
              <th scope="col">Price</th>
              <th scope="col">Net Price</th>
            </tr>
          </thead>
          {countItem?.map((countItem) => (
            <CartTile key={countItem.index} countItem={countItem}></CartTile>
          ))}
        </table>

        <div className="d-flex justify-content-center">
          <h6 className="text-center">Final Total: {totalPrice} BDT</h6>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <button onClick={handleCheckOut} className="btn btn-primary">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
