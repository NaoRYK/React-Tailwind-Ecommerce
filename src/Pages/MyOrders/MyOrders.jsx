import { Link } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import OrdersCard from "../../Components/OrdersCard/OrdersCard";
import { ShoppingCartContext } from "../../Context/Context";
import { useContext } from "react";

const MyOrders = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>

        <h1 className="text-lg font-bold mb-4" >My Orders</h1>

      {context.order.map((order, index) => {
        if (order.totalProducts > 0) {
          return (
            <Link key={index} to={`/myorder/${index}`}>
              <OrdersCard
                key={order.id}
                orderDate={order.date}
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              ></OrdersCard>
            </Link>
          );
        }
      })}
    </Layout>
  );
};

export default MyOrders;
