import React, { useContext } from "react";
import "./ProductDetail.css";
import { ShoppingCartContext } from "../../Context/Context";
const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  console.log(context.cartProducts)

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } shadow-2xl product-detail  flex-col fixed right-0 border-2 bg-gray-100 border-black/20 rounded-lg`}
    >
      <div className="flex justify-between items-center p-6 border-b-4 border-gray-300 mb-4 ">
        <h2 className="font-medium text-xl">Detail</h2>
        <div
          onClick={() => {
            context.closeProductDetail();
          }}
          className={`cursor-pointer ${
            !context.isProductDetailOpen ? "hidden" : null
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
      <figure className="flex items-center justify-center">
        <img className="object-contain w-80 border-4  border-black/20 rounded-lg  " src={context.productToShow.img} alt={context.productToShow.name} />
      </figure>
      <p className="flex flex-col items-center p-4 text-center w-full h-full">
        <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
        <span className="font-medium text-md">{context.productToShow.name}</span>
        <span className="font-light text-sm">{context.productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
