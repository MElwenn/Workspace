import React from "react";

import styles from "./navbar.module.css"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">Edit</a></li>
        <li><a href="#">Reserve</a></li>
        <li><a href="#"><img id={styles.profilePic} src="example-images/angie.png"/></a></li>
      </ul>
    </nav>

    
  );
};

export default NavBar;