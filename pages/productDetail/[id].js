import React from 'react';
import fsPromises from 'fs/promises';
import path from 'path';
import { SingleProductDetailCard } from '../../components/SingleProductDetailCard/SingleProductDetailCard';

const ProductDetail = (props) => {
  return (
    <div className="m-5 d-flex justify-content-center">
      <SingleProductDetailCard
        key={props.id}
        productInfo={props}
      ></SingleProductDetailCard>
    </div>
  );
};

export const getStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'db.json');
  const jsonData = await fsPromises.readFile(filePath);
  const list = JSON.parse(jsonData);

  const paths = list?.productList.map((data) => {
    return {
      params: { id: data.id.toString() },
    };
  });

  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const filePath = path.join(process.cwd(), 'db.json');
  const jsonData = await fsPromises.readFile(filePath);
  const list = JSON.parse(jsonData);

  const singleProduct = list?.productList.find((data) => data.id == id);

  return {
    props: singleProduct,
  };
};

export default ProductDetail;
