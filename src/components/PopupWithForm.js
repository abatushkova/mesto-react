import React from 'react';
import ButtonClose from './ButtonClose';

class PopupWithForm extends React.Component {
  render() {
    return (
      <div className={
        `popup popup_type_${this.props.name} ${this.props.isOpen}`
      }>
        <div className="popup__container">
          <h2 className="popup__title">{this.props.title}</h2>
          <form className="popup__form" name={this.props.name} noValidate>
            {this.props.children}
          </form>
          <ButtonClose closeHandler={this.props.onClose} />
        </div>
      </div>
    );
  }
}

export default PopupWithForm;
