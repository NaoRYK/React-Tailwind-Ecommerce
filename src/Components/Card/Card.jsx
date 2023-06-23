import React, {useContext} from "react";
import {ShoppingCartContext} from '../../Context/Context.jsx'
 

const Card = (props) => {

    const context = useContext(ShoppingCartContext)
  return (
    <div className="card-container bg-gray-500/20 cursor-pointer w-56 h-60 rounded-lg border-2 ">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 px-3 py-0.5 bg-white/60 rounded-lg m-2 text-black text-xs">
          {props.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-t-lg rounded-b-md"
          src={props.img}
          alt="headphones"
        />
        <div className="p-1 absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-md m-2 p- font-bold " onClick={()=> {
            console.log(context.count)
            context.setCount(context.count + 1)}
        }>
          +
        </div>
        <p className="flex justify-between mt-1">
          <span className="text-sm font-light">{props.name}</span>
          <span className="text-md font-medium">${props.price}</span>
        </p>
      </figure>
    </div>
  );
};

export default Card;
