import classes from "./Modal.module.css";
import React from "react";
import ReactDOM from "react-dom";
import MovieDetail from "../browse/MovieDetail";

export default function Modal({ data, onClose }, ref) {
  const content = (
    <div className={classes["wrap-modal"]}>
      <span className={classes.closeBtn} onClick={onClose}>
        Close
      </span>
      <MovieDetail movieData={data} />
    </div>
  );
  return ReactDOM.createPortal(content, document.querySelector("#modal"));
}
