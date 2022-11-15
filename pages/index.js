import React from 'react';
import { ProductCard } from '../components/ProductCard/ProductCard';
import styles from '../styles/Home.module.css';
import fsPromises from 'fs/promises';
import path from 'path';

export default function Home(props) {
  const { productList } = props;

  return (
    <div className={styles.container}>
      <div className="d-flex justify-content-center mb-5">
        <div className="container row  shadow-lg mt-4">
          <h4 id="footballItem" className="m-4 text-center">
            All items list
          </h4>
          {productList.map((productInfo) => (
            <ProductCard
              key={productInfo.id}
              productInfo={productInfo}
            ></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'db.json');
  const jsonData = await fsPromises.readFile(filePath);
  const productList = JSON.parse(jsonData);

  return {
    props: productList,
  };
}
