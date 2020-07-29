import React, { useState, useEffect, useContext } from 'react';
import Card from './Card';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api.getInitialCards()
    .then((cards) => setCards(cards))
    .catch(err => console.error(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeCardLikeStatus(card._id, !isLiked)
    .then((newCard) => {
      const newCards = cards.map((c) => (
        c._id === card._id ? newCard : c
      ));

      setCards(newCards);
    })
    .catch(err => console.error(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then((newCard) => {
      const newCards = cards.filter((c) => (
        c._id === card._id ? null : newCard
      ));

      setCards(newCards);
    })
    .catch(err => console.error(err));
  }

  if (!currentUser) return null;

  return (
    <main className="container page__section">
      <section className="profile container__profile">
        <div className="profile__avatar">
          <img src={currentUser.avatar}
            alt={currentUser.name}
            className="profile__img"
          />
          <button type="button"
            className="profile__update-av-btn"
            title="Сменить аватар"
            onClick={props.onEditAvatar}>
          </button>
        </div>
        <div className="profile__details">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button type="button"
            className="profile__edit-btn"
            title="Редактировать профиль"
            onClick={props.onEditProfile}>
          </button>
          <p className="profile__info">{currentUser.about}</p>
        </div>
        <button type="button"
          className="profile__add-btn"
          title="Добавить фотографию"
          onClick={props.onAddCard}>
        </button>
      </section>
      <section className="elements">
        {cards.map(card => {
          return <Card
            key={card._id}
            card={card}
            onCardLike={handleCardLike}
            onCardClick={props.onCardClick}
            // onCardDelete={props.onCardDelete}
            onCardDelete={handleCardDelete}
          />
        })}
      </section>
    </main>
  );
}

export default Main;
