/* eslint-disable jsx-a11y/heading-has-content */
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardLike, onCardDelete, onCardClick, onPopupConfirm }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = card.likes.some((user) => user._id === currentUser._id);
  const likeButtonClassName = `article__icon ${
    isLiked ? "article__like-active" : ""
  }`;
  const isOwner = card.owner._id === currentUser._id;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
    onPopupConfirm(true);
  }

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="article">
      <img
        className="article__item"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />

      {isOwner && (
        <button
          className="article__delete"
          type="button"
          onClick={handleDeleteClick}
        ></button>
      )}
      <div className="article__content">
        <h2 className="article__title">{card.name}</h2>
        <div className="article__like-content">
          <button
            className={likeButtonClassName}
            onClick={handleLikeClick}
            type="button"
            aria-label="Лайк"
          ></button>
          <p className="article__icon-number">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
