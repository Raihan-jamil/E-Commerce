import React, { createContext, useContext, useState } from 'react';
import { CartContext } from '../../pages/_app';
import Image from 'next/image';

const CartTile = (props) => {
  // const { countItem } = props.countItem;

  return (
    <tbody>
      <tr>
        <th scope="row">
          <img
            src={props.countItem?.item?.imageSource}
            height={75}
            width={75}
          />
        </th>
        <td>
          <h6>{props.countItem?.item?.title}</h6>
        </td>
        <td>
          <h6>{props.countItem?.item?.category}</h6>
        </td>
        <td>
          <h6>{props.countItem?.totalCount}</h6>
        </td>
        <td>
          <h6>{props.countItem?.item?.price / props.countItem?.totalCount}</h6>
        </td>
        <td>
          <h6>{props.countItem?.item?.price} BDT</h6>
        </td>
      </tr>
    </tbody>
    // <div className="d-flex  m-3 overflow-auto justify-content-between align-items-center shadow-lg">
    //   <div className="justify-content-center align-items-center col-2  container-fluid bg-danger">
    //     <img
    //       src={props.countItem?.item?.imageSource}
    //       height="100"
    //       width="100"
    //       className="img-fluid"
    //     />
    //   </div>
    //   <div className="justify-content-center align-items-center  container-fluid">
    //     <p className="text-center">{props.countItem?.item?.title}</p>
    //   </div>
    //   <div className="d-flex justify-content-center  container-fluid">
    //     <h4 className="text-center">{props.countItem?.totalCount}</h4>
    //   </div>
    //   <div className=" container-fluid">
    //     <h4 className="text-center"> {props.countItem?.item?.price}</h4>
    //   </div>
    // </div>
  );
};

export default CartTile;
