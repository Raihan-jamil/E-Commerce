import React, { createContext, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { FaCartPlus } from 'react-icons/fa';
import { CartContext } from '../../pages/_app';

export const SingleProductDetailCard = (props) => {
  const { title, price, imageSource, description, category, quantity } =
    props.productInfo;
  const [updateQuantity, setUpdateQuantity] = useState(quantity);
  const { productList } = props;
  console.log('productList', productList);

  const { cartHandle, cartItem } = useContext(CartContext);

  const [addToCartItem, setAddToCartItem] = useState([]);
  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
  }, [addToCartItem]);

  const quantityHandler = (quantity) => {
    setUpdateQuantity(quantity - 1);
  };

  return (
    <div className="col-lg-4 col-md-8 col-sm-12 mt-3 mb-3">
      <div className={`card w-100 h-100 card-for-hover `}>
        <div className="p-4">
          <Image
            src={imageSource}
            alt=""
            title=""
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>

        <div class="card-body p-4">
          <div className="d-flex justify-content-start">
            <h4 className="text-start">Title: {title} </h4>
          </div>
          <h6 className="justify-content-start d-flex text-start">
            Category: {category}
          </h6>
          <p className="justify-content-start d-flex text-start">
            Description: {description}
          </p>
          <h6 className="justify-content-start d-flex text-start">
            Price: {price} BDT
          </h6>
          <p className="justify-content-start d-flex text-start">
            Quantity: {updateQuantity}
          </p>
        </div>
        <button
          onClick={() => {
            quantityHandler(updateQuantity);
            setAddToCartItem(props.productInfo);
            console.log(props.productInfo);
            cartHandle(props.productInfo);
          }}
          className="btn btn-primary d-flex justify-content-center align-items-center"
        >
          Add to cart <FaCartPlus size={20} className="ms-2" />
        </button>
      </div>
    </div>
  );
};
