import React, { Children } from "react";
import styles from "./styles.module.css";
const PinprojButton = ({ children, variant }) => {
  return (
    <button className={`${styles.main_button_container} ${variant}`}>
      {children}
    </button>
  );
};
export default PinprojButton;
