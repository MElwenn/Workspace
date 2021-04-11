import React from "react";
import Office from "../office/office.module";

import styles from "./reservation.module.css";

const Reservation = () => {
  return (
    <div>
      THE Reservation
      <Office isEditingEnabled={false}/>
    </div>
  );
};

export default Reservation;

