import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [userId, setUserId] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getInitialUserInfo(), api.getInitialCards()])
    .then(([user, cards]) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
      setUserId(user._id);
      setCards(cards);
    })
    .catch(err => console.error(err));
  }, []);

  return (
    <main className="container page__section">
      <section className="profile container__profile">
        <div className="profile__avatar">
          <img src={userAvatar}
            alt={userName}
            className="profile__img"
          />
          <button type="button"
            className="profile__update-av-btn"
            title="Сменить аватар"
            onClick={props.onEditAvatar}>
          </button>
        </div>
        <div className="profile__details">
          <h1 className="profile__name">{userName}</h1>
          <button type="button"
            className="profile__edit-btn"
            title="Редактировать профиль"
            onClick={props.onEditProfile}>
          </button>
          <p className="profile__info">{userDescription}</p>
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
            userId={userId}
            onCardClick={props.onCardClick}
            onDeleteBtnClick={props.onDeleteBtnClick}
          />
        })}
      </section>
    </main>
  );
}

export default Main;
