import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ButtonSubmit from './ButtonSubmit';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    api.getUserInfo()
    .then(user => setCurrentUser(user))
    .catch(err => console.error(err));
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddCardClick = () => {
    setIsAddCardPopupOpen(true);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  const handleCardDelete = () => {
    setIsConfirmPopupOpen(true);
  };
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setSelectedCard(null);
    setIsConfirmPopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddCard={handleAddCardClick}
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__label" htmlFor="av-input">
            <input type="url" name="avatar" id="av-input"
              className="popup__input"
              placeholder="Ссылка" required />
            <span className="popup__error" id="av-input-error"></span>
          </label>
          <ButtonSubmit>Сохранить</ButtonSubmit>
        </PopupWithForm>

        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__label" htmlFor="name-input">
            <input type="text" name="name" id="name-input"
              className="popup__input"
              placeholder="Имя" required
              minLength="2" maxLength="40"
              pattern="[a-zA-Zа-яА-ЯёЁ\s\-]+"
            />
            <span className="popup__error" id="name-input-error"></span>
          </label>
          <label className="popup__label" htmlFor="info-input">
            <input type="text" name="about" id="info-input"
              className="popup__input"
              placeholder="О себе" required
              minLength="2" maxLength="200"
            />
            <span className="popup__error" id="info-input-error"></span>
          </label>
          <ButtonSubmit>Сохранить</ButtonSubmit>
        </PopupWithForm>

        <PopupWithForm
          name="card"
          title="Новое место"
          isOpen={isAddCardPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__label" htmlFor="title-input">
            <input type="text" name="title" id="title-input"
              className="popup__input"
              placeholder="Название" required minLength="1"
              maxLength="30"
            />
            <span className="popup__error" id="title-input-error"></span>
          </label>
          <label className="popup__label" htmlFor="src-input">
            <input type="url" name="src" id="src-input"
              className="popup__input"
              placeholder="Ссылка" required
            />
            <span className="popup__error" id="src-input-error"></span>
          </label>
          <ButtonSubmit>Создать</ButtonSubmit>
        </PopupWithForm>

        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
        >
          <ButtonSubmit>Да</ButtonSubmit>
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          isOpen={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
