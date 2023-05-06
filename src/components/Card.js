/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="article">
      <img
        className="article__item"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />

      <button className="article__delete" type="button"></button>
      <div className="article__content">
        <h2 className="article__title">{props.card.name}</h2>
        <div className="article__like-content">
          <button
            className="article__icon"
            type="button"
            aria-label="Лайк"
          ></button>
          <p className="article__icon-number">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
