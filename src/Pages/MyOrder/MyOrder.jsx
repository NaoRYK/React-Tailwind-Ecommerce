import Layout from "../../Components/Layout/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
import OrderCard from "../../Components/OrderCard/OrderCard";
import { Link } from "react-router-dom";
const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  if(index === 'last'){
    index = context.order?.length -1;
  }

  return (
    <div>
      <Layout>
      <div className="flex items-center justify-center relative w-80">
        <Link to="/" className="absolute left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <p className="text-lg font-bold mb-6">My Order</p>
      </div>
        <div className="flex flex-col w-80 m-4 ">
          { context.order?.[index].products.map(product => (
            <OrderCard 

              id={product.id}
              key={product.id}
              title={product.name}
              price={product.price}
              image={product.img}
            ></OrderCard>
          ))}
        </div>

        <div>
          <p className="flex justify-between w-80 rounded-lg text-lg  bg-emerald-400 p-4 border-black/240 text-zinc-50 border-2">
            <span>
              Total Price:
            </span>
            <span className="text-xl font-semibold">
              $
              {
                context.order[context.order.length -1].totalPrice
              }
            </span>
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default MyOrder;
