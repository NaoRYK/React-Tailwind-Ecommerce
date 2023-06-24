import React, { useContext } from "react";
import './CheckoutSide.css'
import { ShoppingCartContext } from "../../Context/Context";
import OrderCard from "../OrderCard/OrderCard";


const CheckoutSide = () => {
  const context = useContext(ShoppingCartContext);
  console.log('product to show', context.productToShow)

  return (
    <aside
      className={`${
        context.isCheckoutOpen ? "flex" : "hidden"
      } overflow-scroll overflow-x-hidden shadow-2xl checkout-side-menu  flex-col fixed right-0 border bg-gray-100 border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6 border-b-4 border-gray-300 mb-4 ">
        <h2 className="font-medium text-xl">My Order</h2>
        <div
          onClick={() => {
            context.closeCheckout();
          }}
          className={`cursor-pointer ${
            !context.isCheckoutOpen ? "hidden" : null
          } `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div>
      {
        context.cartProducts.map(product =>(
            <OrderCard key={product.id} title={product.name} price={product.price} image={product.img}></OrderCard>
        ))
      }
      </div>
    </aside>
  );
};

export default CheckoutSide;
