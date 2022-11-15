import React from 'react';

export const OrderDetailsCard = (props) => {
  console.log('single order details', props?.orderDetail?.orderSummery);
  const summeryList = props?.orderDetail?.orderSummery;
  console.log('summeryList', summeryList);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Order ID: {props?.orderDetail?.orderID}</h5>
        <hr />
        <h6 className="card-text">Order summery:</h6>
        {summeryList?.map((product) => (
          <div className="d-flex justify-content-between">
            <div className="me-5">{product.item.title}</div>
            <div className="ms-5 me-5">
              {`${product.totalCount}`} *{' '}
              {product.item.price / product.totalCount} BDT
            </div>
          </div>
        ))}

        <hr />
        <div>
          <div className="d-flex justify-content-between">
            <div className="me-5">Net Total</div>
            <div className="ms-5 me-5">{props?.orderDetail?.price} BDT</div>
          </div>
        </div>
        <h6 className="card-text mt-5">Order placed by:</h6>
        <div>
          <p>Email: {props?.orderDetail?.email}</p>
          <p>Phone: {props?.orderDetail?.phone}</p>
          <p>Address: {props?.orderDetail?.address}</p>
          <p>Placement date: {props?.orderDetail?.date}</p>
          <p>Placement time: {props?.orderDetail?.time}</p>
        </div>
      </div>
    </div>
  );
};
