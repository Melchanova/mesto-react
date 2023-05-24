import React from "react";

function PopupWithForm({
  name,
  title,
  buttonText,
  children,
  isOpen,
  onSubmit,
  onClose,
  onCloseOverlay,
}) {
  return (
    <section
      className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}
      onClick={onCloseOverlay}
      id="popup_add"
    >
      <div className="popup__container popup__container_add">
        <h2 className="popup__title popup__title_add">{title}</h2>
        <button
          className={`popup__close popup__close_${name}`}
          type="button"
          onClick={onClose}
        ></button>

        <form
          className={`popup__form popup__form_${name}`}
          id="formadd"
          name="popup"
          action="#"
          method="post"
          onSubmit={onSubmit}
        >
          {children}
          <button className="popup__button popup__add-button" type="submit">
            {buttonText || "Сохранить"}
          </button>
        </form>
      </div>
    </section>
  );
}
export default PopupWithForm;
