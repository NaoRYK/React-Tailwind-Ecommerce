import React from "react";
import { render } from "react-dom";

const OrdersCard = (props) => {
  const {totalPrice, totalProducts,orderDate} = props;

  

  return (
    <div className="flex justify-between items-center m-4 border-2 rounded-lg item bg-gradient-to-r from-emerald-400 to-emerald-500 text-white border-black/10 shadow-lg w-80 p-4">
        <p className="flex w-full justify-between">
            <div className="flex text-lg  flex-col">
                <span className="border-b-2">{orderDate}</span>
                <span className="">{totalProducts} articles</span>
            </div>

            <span className="  text-xl h-full font-semibold self-center">${totalPrice}</span>
            <span className="flex items-center text-xl">
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
            </span>

        </p>
    </div>
  );
};

export default OrdersCard;
