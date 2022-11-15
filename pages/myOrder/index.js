import React, { useEffect, useState } from 'react';
import OrderTile from '../../components/OrderTile/OrderTile';

const myOrder = () => {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('allOrders')));
    setAllOrder(JSON.parse(localStorage.getItem('allOrders')));
    console.log('state', allOrder);
  }, []);

  return (
    <div className="m-5 d-flex justify-content-center overflow-auto">
      <div className="container ">
        <table className="table ">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Email</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">View Details</th>
            </tr>
          </thead>
          {allOrder?.map((order) => (
            <OrderTile key={order.id} allOrder={order}></OrderTile>
          ))}
        </table>
      </div>
    </div>
  );
};

export default myOrder;
