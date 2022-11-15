import Link from 'next/link';
import React from 'react';

const OrderTile = (props) => {
  return (
    <tbody>
      <tr>
        <th scope="row">
          <h6>{props.allOrder?.orderID}</h6>
        </th>
        <td>
          <p>{props.allOrder?.email}</p>
        </td>
        <td>
          <p>{props.allOrder?.price} BDT</p>
        </td>
        <td>
          <p>{props.allOrder?.date}</p>
        </td>
        <td>
          <p>{props.allOrder?.time}</p>
        </td>
        <td>
          <Link href={`/orderDetail/${props.allOrder?.orderID}`}>
            <a className="text-decoration-none">See Full order</a>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default OrderTile;
