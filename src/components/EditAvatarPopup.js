import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({
  onLoading,
  onClose,
  onUpdateAvatar,
  isOpen,
  onCloseOverlay,
}) {
  const avatarRef = React.useRef(null);

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  function handleChangeAvatar() {
    return avatarRef.current.value;
  }

  return (
    <PopupWithForm
      name="avatar"
      buttonText={onLoading ? `Сохранение...` : `Сохранить`}
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onCloseOverlay={onCloseOverlay}
    >
      <label htmlFor="avatar" className="popup__label">
        <input
          id="avatar"
          required
          className="popup__input popup__input_value_avatar"
          type="url"
          name="avatar"
          onChange={handleChangeAvatar}
          ref={avatarRef}
          placeholder="Ссылка на аватар"
        />
        <span className="error" id="avatar-error"></span>
      </label>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
