import React, { useContext } from "react";
import "./CheckoutSide.css";
import { ShoppingCartContext } from "../../Context/Context";
import OrderCard from "../OrderCard/OrderCard";
import { totalPrice } from "../../utils";
import {Link} from 'react-router-dom'

const CheckoutSide = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    var today = new Date();

    // `getDate()` devuelve el día del mes (del 1 al 31)
    var day = today.getDate();

    // `getMonth()` devuelve el mes (de 0 a 11)
    var month = today.getMonth() + 1;

    // `getFullYear()` devuelve el año completo
    var year = today.getFullYear();

    // muestra la fecha de hoy en formato `MM/DD/YYYY`
    let date=`${day}/${month}/${year}`;

    const orderToAdd = {
      
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
      date:  date,
    };


      context.setOrder([...context.order, orderToAdd]);

    context.setCartProducts([])

    context.closeCheckout()

  };

  return (
    <aside
      className={`${
        context.isCheckoutOpen ? "flex" : "hidden"
      } overflow-scroll overflow-x-hidden shadow-2xl checkout-side-menu  flex-col fixed right-0 border-2 bg-gray-100 border-black/20 rounded-lg`}
    >
      <div className="flex justify-between items-center p-6 border-b-4 border-gray-300 mb-4 ">
        <h2 className="font-medium text-xl">My Order</h2>
        <div className="">
          <p className="text-md font-semibold ">
            <span>Total: </span>
            <span>${totalPrice(context.cartProducts)}</span>
          </p>
        </div>
        <div
          onClick={() => {
            context.closeCheckout();
          }}
          className={`cursor-pointer  ${
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
        {context.cartProducts.map((product) => (
          <OrderCard
            handleDelete={handleDelete}
            id={product.id}
            key={product.id}
            title={product.name}
            price={product.price}
            image={product.img}
          ></OrderCard>
        ))}
      </div>

      <Link className="h-full w-full" to="/myorder/last">
        <div className="h-full w-full transition flex items-end ">
          <button
            onClick={() => {
           
              handleCheckout();
            }}
            className="w-full p-4  h-20 text-white font-semibold text-xl border-4  border-white rounded-lg bg-emerald-500 hover:bg-white hover:text-emerald-300 hover:border-emerald-300" disabled={context.cartProducts.length >0 ? false : true  }
          >
            Checkout
          </button>
        </div>
      </Link>
    </aside>
  );
};

export default CheckoutSide;
