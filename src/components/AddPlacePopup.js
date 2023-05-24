import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({
  onClose,
  onAddPlace,
  onLoading,
  isOpen,
  onCloseOverlay,
}) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
  }

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  return (
    <PopupWithForm
      name="place"
      buttonText={onLoading ? `Сохранение` : `Создать`}
      title="Новое место"
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      onCloseOverlay={onCloseOverlay}
    >
      <label htmlFor="title" className="popup__label">
        <input
          id="title"
          required
          className="popup__input popup__input_value_place"
          type="text"
          name="name"
          value={name}
          placeholder="Название"
          minLength="2"
          maxLength="30"
          onChange={handleNameChange}
        />
        <span className="error" id="title-error"></span>
      </label>
      <label htmlFor="link" className="popup__label">
        <input
          id="link"
          required
          className="popup__input popup__input_value_link"
          type="url"
          name="link"
          value={link}
          onChange={handleLinkChange}
          placeholder="Ссылка на картинку"
        />
        <span className="error" id="link-error"></span>
      </label>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
