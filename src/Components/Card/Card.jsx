import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context.jsx";
import { render } from "react-dom";

const Card = (props) => {
  const context = useContext(ShoppingCartContext);

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div className=" p-4 text-white cursor-default absolute top-0 right-0 flex justify-center items-center bg-emerald-500 w-6 h-6 rounded-md m-2  font-bold ">
          ✓
        </div>
      );
    } else {
      return (
        <div
          onClick={() => {
            addProductsToCart(props);
          }}
          className="p-4 text-xl absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-md m-2 p- font-bold "
        >
          +
        </div>
      );
    }
  };
  const showProduct = (product) => {
    if (context.isCheckoutOpen) {
      context.closeCheckout();
      context.openProductDetail();
    } else {
      context.openProductDetail();
    }

    context.setProductToShow(product);
  };
  const addProductsToCart = (productData) => {
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);

    if (context.isProductDetailOpen) {
      context.closeProductDetail();
      context.openCheckout();
    } else {
      context.openCheckout();
    }
  };

  return (
    <div className="card-container bg-gray-500/10 cursor-pointer w-90 h-60 rounded-lg border-2 border-emerald-600/40">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 px-3 py-0.5 bg-white/80 rounded-lg m-2 text-black text-xs">
          {props.category}
        </span>
        <img
          onClick={() => showProduct(props)}
          className="w-full h-full object-cover rounded-t-lg rounded-b-md"
          src={props.img}
          alt="headphones"
        />
        {renderIcon(props.id)}
        <p
          onClick={() => showProduct(props)}
          className="flex justify-between mt-1 p-2"
        >
          <span className="text-sm font-light truncate">{props.name}</span>
          <span className="text-md font-medium">${props.price}</span>
        </p>
      </figure>
    </div>
  );
};

export default Card;
