import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import ButtonSubmit from './ButtonSubmit';

function AddCardPopup(props) {
  const [title, setTitle] = useState('');
  const [src, setSrc] = useState('');

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const handleSrcChange = (evt) => {
    setSrc(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    props.onAddCardSubmit({
      name: title,
      link: src
    });
  };

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      >
      <label className="popup__label" htmlFor="title-input">
        <input type="text" name="title" id="title-input"
          className="popup__input"
          placeholder="Название" required
          minLength="1" maxLength="30"
          value={title}
          onChange={handleTitleChange}
        />
        <span className="popup__error" id="title-input-error"></span>
      </label>
      <label className="popup__label" htmlFor="src-input">
        <input type="url" name="src" id="src-input"
          className="popup__input"
          placeholder="Ссылка" required
          value={src}
          onChange={handleSrcChange}
        />
        <span className="popup__error" id="src-input-error"></span>
      </label>
      <ButtonSubmit>Создать</ButtonSubmit>
    </PopupWithForm>
  );
}

export default AddCardPopup;
