import React from "react";
import { AddToCart } from "./Redux/CartSlice";
import { useDispatch } from "react-redux";

const Product = ({id, title, image }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className="mb-2">{title}</h3>
      <img src={image} />
      <br />
      <button
        onClick={() => dispatch(AddToCart({id, title, image }))}
        className="bg-yellow-500 text-white p-2 rounded-lg"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
