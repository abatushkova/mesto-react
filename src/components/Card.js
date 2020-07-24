import React from 'react';

function Card(props) {
  const {card} = props;

  const buttonDelete = (card.owner._id === props.userId)
    && <button type="button" 
      className="elements__delete-btn" title="Удалить" 
      onClick={props.onDeleteBtnClick}></button>;

  const handleClick = () => {
    props.onCardClick(card);
  };

  return (
    <div className="elements__item">
      {buttonDelete}
      <img src={card.link}
        alt={card.name}
        className="elements__img"
        onClick={handleClick}
      />
      <div className="elements__info">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__like">
          <button type="button"
            className="elements__like-btn"
            title="Мне нравится">
          </button>
          <span className="elements__like-counter">
            {card.likes.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
