import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { OrderDetailsCard } from '../../components/OrderDetailsCard/OrderDetailsCard';

const orderDetail = () => {
  const router = useRouter();
  const [allOrderDetail, setAllOrderDetail] = useState([]);

  useEffect(() => {
    const allOrders = JSON.parse(localStorage.getItem('allOrders'));
    setAllOrderDetail(allOrders);
  }, []);

  const orderDetail = allOrderDetail.find((item) => {
    return router.query.id == item.orderID;
  });

  console.log('orderDetail', orderDetail);

  return (
    <div className="d-flex justify-content-center m-2 ">
      <div className="p-4 bg-light container col-lg-4 col-md-8 col-sm-12">
        <h5 className="text-light">Order Details</h5>
        <OrderDetailsCard orderDetail={orderDetail} />
      </div>
    </div>
  );
};

export default orderDetail;
