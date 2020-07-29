import React from 'react';
import PopupWithForm from './PopupWithForm';
import ButtonSubmit from './ButtonSubmit';

class EditAvatarPopup extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.avatarInput = React.createRef();
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.onUpdateAvatar({
      avatar: this.avatarInput.current.value
    })
  };

  render() {
    return (
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={this.props.isOpen}
        onClose={this.props.onClose}
        onSubmit={this.handleSubmit}
      >
        <label className="popup__label" htmlFor="av-input">
          <input type="url" name="avatar" id="av-input"
            className="popup__input"
            placeholder="Ссылка" required
            ref={this.avatarInput}
          />
          <span className="popup__error" id="av-input-error"></span>
        </label>
        <ButtonSubmit>Сохранить</ButtonSubmit>
      </PopupWithForm>
    );
  }
}

export default EditAvatarPopup;
