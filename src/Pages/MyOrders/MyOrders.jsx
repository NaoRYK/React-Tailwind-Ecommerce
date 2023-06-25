import { Link } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import OrdersCard from "../../Components/OrdersCard/OrdersCard";
import { ShoppingCartContext } from "../../Context/Context";
import { useContext } from "react";

const MyOrders = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>

        <div className="flex">
        <Link to="/" className="p-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mr-4" 
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    />
  </svg>
</Link>
        <h1 className="text-lg font-bold mb-4" >My Orders</h1>


          </div>


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
