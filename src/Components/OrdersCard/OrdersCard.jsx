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

            <span className="  text-xl h-full self-center font-semibold">${totalPrice}</span>

        </p>
    </div>
  );
};

export default OrdersCard;
