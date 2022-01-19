import React from "react";

function DebitCard() {
  return (
    <div className="cardGroup">
      <img
       src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-27724.appspot.com/o/Images%2Fimageonline-co-transparentimage%20(3).png?alt=media&token=96481d86-eb5f-455f-ab05-30d441c9d762"
        alt=""
        className="card_logo"
      />
      <img
       src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-27724.appspot.com/o/Images%2Fimageonline-co-transparentimage%20(4).png?alt=media&token=9105d68c-2ffe-4ff0-aa1a-de6a33e4dd10"
        alt=""
        className="card_chip"
      />

      <div className="card_number">1234 567 8901 2200</div>
      <div className="card_name">Nitish</div>
      <div className="card_from">01/22</div>
      <div className="card_to">05/26</div>
      <div className="card_ring"></div>
    </div>
  );
}

export default DebitCard;
