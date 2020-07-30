import React, { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import ButtonSubmit from './ButtonSubmit';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleDescriptionChange =(evt) => {
    setDescription(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    props.onUpdateUser({
      name,
      about: description
    });
  };

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      >
      <label className="popup__label" htmlFor="name-input">
        <input type="text" name="name" id="name-input"
          className="popup__input"
          placeholder="Имя" required
          minLength="2" maxLength="40"
          pattern="[a-zA-Zа-яА-ЯёЁ\s\-]+"
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="name-input-error"></span>
      </label>
      <label className="popup__label" htmlFor="info-input">
        <input type="text" name="about" id="info-input"
          className="popup__input"
          placeholder="О себе" required
          minLength="2" maxLength="200"
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__error" id="info-input-error"></span>
      </label>
      <ButtonSubmit>Сохранить</ButtonSubmit>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
