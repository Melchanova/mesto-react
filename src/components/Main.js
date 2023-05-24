import React from "react";
import Card from "./Card";
//import api from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  cards,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onDeletedCard,
  onPopupConfirm,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__overlay">
          <div
            className="profile__avatar"
            aria-label="Жак Ив Кусто"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          ></div>
          <button
            className="profile__avatar-button"
            type="button"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__title">{currentUser.name}</h1>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button
            className="profile__edit-button"
            type="button"
            title="Редактировать профиль"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-button"
          type="button"
          title="Добавить фото"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements" aria-label="Достопримечательности">
        <ul className="elements__cards">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardDelete={onDeletedCard}
              onCardLike={onCardLike}
              onPopupConfirm={onPopupConfirm}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
