import React, { Children } from "react";
import styles from "./style.css"
const PinprojButton = ({ children , variant}) =>{
    return <button className={`main_button_container ${variant}`}>{children}</button>
}
export default PinprojButton