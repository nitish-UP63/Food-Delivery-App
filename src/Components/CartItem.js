import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useState } from "react";

function CartItems({ price, name, imgSrc ,itemId}) {

  const [qty , setQty] = useState(1);


  return (
    <div className="cartItem">
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded className="removeItem" />

            <AddRounded className="addItem" /> 
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span ClassName="RupeesSign">₹ </span>
        <span className="itemPriceValue">{price}</span>
      </p>
    </div>
  );
}

export default CartItems;
