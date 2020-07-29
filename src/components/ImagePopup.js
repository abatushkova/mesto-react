import React from 'react';
import ButtonClose from './ButtonClose';

function ImagePopup(props) {
  const {card} = props;

  return ((props.isOpen !== null)
    ? <div className="popup popup_type_img popup_opened">
        <div className="popup__img-wrapper">
          <img src={card.link}
            alt={card.name}
            className="popup__img"
          />
          <p className="popup__img-title">{card.name}</p>
          <ButtonClose closeHandler={props.onClose} />
        </div>
      </div>  
    : <div className="popup popup_type_img"></div>
  );
}

export default ImagePopup;
