import React, { useEffect } from "react";
import {} from "@mui/material";
import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";

function Header() {

  useEffect(() => {
    const toggleMenu = document.querySelector(".toggleMenu");
    
    toggleMenu.addEventListener("click", ()=>{
      document.querySelector('.rightMenu').classList.toggle("active")
    });
  }, []);


  return (
    <header>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-27724.appspot.com/o/Images%2Flogo.jpg?alt=media&token=b405319d-a49f-4477-8052-0d250ea41109"
        className="logo"
      />
      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>2</p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-27724.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=dc5c98a4-3ccb-43ee-b041-00b0ddefc04b"
            alt=""
            className="profilePic"
          />
        </div>
        <h2 className="userName">Nitish kumar</h2>
      </div>

      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
}

export default Header;
