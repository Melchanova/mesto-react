import React from "react";

function ImagePopup({ card, onClose, onCloseOverlay }) {
  return (
    <section
      className={`popup image-popup ${card.name ? "popup_opened" : ""}`}
      onClick={onCloseOverlay}
    >
      <div className="popup__container-image">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <img className="popup__image" src={card?.link || ""} alt={card?.name} />
        <h2 className="popup__title-image">{card?.name}</h2>
      </div>
    </section>
  );
}
export default ImagePopup;
