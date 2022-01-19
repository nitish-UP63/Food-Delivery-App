import React from "react";

function MenuContainer({ link, icon ,isHome}) {
  return(
  <li className={isHome ? 'active' : ""} >
    <a href={link}>
      <spam className="icon">{icon}</spam>
    </a>
  </li>
  );
}

export default MenuContainer;
