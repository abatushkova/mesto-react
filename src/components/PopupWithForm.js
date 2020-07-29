import React from 'react';
import ButtonClose from './ButtonClose';

function PopupWithForm(props) {
  return (
    <div className={
      `popup popup_type_${props.name} 
      ${(props.isOpen) ? "popup_opened" : ""}`
    }>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form"
          name={props.name}
          noValidate
          onSubmit={props.onSubmit}
        >
          {props.children}
        </form>
        <ButtonClose closeHandler={props.onClose} />
      </div>
    </div>
  );
}

export default PopupWithForm;
