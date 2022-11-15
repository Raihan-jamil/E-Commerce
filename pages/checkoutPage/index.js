import React, { useEffect, useState, useRef, useContext } from 'react';
import { useRouter } from 'next/router';
import { CartContext } from '../_app';

const checkoutPage = () => {
  const [orderSummery, setOrderSummery] = useState();
  const [price, setPrice] = useState();
  // const [orderUpdate, setOrderUpdate] = useState([]);

  const router = useRouter();

  const { cartInitial } = useContext(CartContext);

  const emailRef = useRef('');
  const phoneRef = useRef('');
  const addressRef = useRef('');

  const handleOrderSubmit = (event) => {
    event.preventDefault();
    let orderID;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const address = addressRef.current.value;

    //current order
    let order = [];
    const temp = JSON.parse(localStorage.getItem('allOrders'));
    console.log('temp', temp);
    if (temp) {
      orderID = temp.length + 1;
    } else {
      orderID = 1;
    }

    //setting time
    var today = new Date();
    var date =
      today.getDate() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getFullYear();
    var time = today.getHours() + ':' + today.getMinutes() + ':';
    if (today.getHours() >= 12)
      time = today.getHours() + ':' + today.getMinutes() + ' PM';
    else time = today.getHours() + ':' + today.getMinutes() + ' AM';
    const orderDetail = {
      orderID,
      email,
      phone,
      address,
      orderSummery,
      price,
      date,
      time,
    };
    if (orderID > 1) order = [...temp, orderDetail];
    else order = [orderDetail];

    localStorage.setItem('allOrders', JSON.stringify(order));
    localStorage.removeItem('checkOutItem');
    localStorage.removeItem('totalPrice');
    const newItem = [];
    cartInitial(newItem);
    localStorage.setItem('cartItem', JSON.stringify(newItem));

    router.push({
      pathname: `/orderDetail/${orderID}`,
    });
  };

  useEffect(() => {
    setOrderSummery(JSON.parse(localStorage.getItem('checkOutItem')));
    setPrice(JSON.parse(localStorage.getItem('totalPrice')));
  }, []);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card col-lg-6 col-md-10 col-sm-12 p-5">
        <form onSubmit={handleOrderSubmit}>
          <div className="form-group mt-4 mb-3">
            <h5>Email</h5>
            <input
              ref={emailRef}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="text"
              className="form-control shadow w-100"
              name="email"
              required
            />
          </div>

          <div className="form-group mt-4 mb-3">
            <h5>Phone</h5>
            <input
              ref={phoneRef}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              type="number"
              className="form-control shadow w-100"
              name="phone"
              required
            />
          </div>

          <div className="form-group mt-4 mb-3">
            <h5>Address</h5>
            <input
              ref={addressRef}
              id="outlined-basic"
              label="Address"
              variant="outlined"
              type="text"
              className="form-control shadow w-100"
              name="address"
              required
            />
          </div>
          <hr />
          <h5>Order summery</h5>
          <div className="d-flex justify-content-between">
            <div className="me-5">
              <h6>Name</h6>
            </div>
            <div className="ms-5 me-5">
              <h6>Amount</h6>
            </div>
          </div>
          {orderSummery?.map((product) => (
            <div className="d-flex justify-content-between">
              <div className="me-5">{product.item.title}</div>
              <div className="ms-5 me-5">
                {' '}
                {`${product.totalCount}`} *{' '}
                {product.item.price / product.totalCount}
              </div>
            </div>
          ))}
          <hr />
          <div>
            <div className="d-flex justify-content-between">
              <div className="me-5">Net Total</div>
              <div className="ms-5 me-5">{price} BDT</div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-2 w-100 fs-5 rounded-3"
          >
            Place order
          </button>
        </form>
      </div>
    </div>
  );
};

export default checkoutPage;
