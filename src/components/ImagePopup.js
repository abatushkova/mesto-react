import React from 'react';
import ButtonClose from './ButtonClose';

class ImagePopup extends React.Component {
  render() {
    return (
      <div className={`popup popup_type_img ${this.props.isOpen}`}>
        <div className="popup__img-wrapper">
          <img src={this.props.card.link}
            className="popup__img"
            alt={this.props.card.name}
          />
          <p className="popup__img-title">{this.props.card.name}</p>
          <ButtonClose closeHandler={this.props.onClose} />
        </div>
      </div>
    );
  }
}

export default ImagePopup;
