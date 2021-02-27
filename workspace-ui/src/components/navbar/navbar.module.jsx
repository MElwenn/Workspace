import React from "react";

import {NavLink} from "react-router-dom";

import AppRouter from '../app-router/app-router.module'
import styles from "./navbar.module.css"

const NavBar = () => {
  return (
      <nav>
        <ul>
          <li>
            <NavLink className="main-anchor" to="/editor">Edit</NavLink>
          </li>
          <li>
            <NavLink className="main-anchor" to="/reservation">Reserve</NavLink>
          </li>
          <li>
            <a href="#"><img id={styles.profilePic} src="example-images/angie.png" /></a>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;