import React from "react";

function ImagePopup(props) {
  const className = `popup image-popup ${
    props.card.name ? "popup_opened" : ""
  }`;

  return (
    <section className={className}>
      <div className="popup__container-image">
        <button
          className="popup__close"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          src={props.card?.link || ""}
          alt={props.card?.name}
        />
        <h2 className="popup__title-image">{props.card?.name}</h2>
      </div>
    </section>
  );
}
export default ImagePopup;
