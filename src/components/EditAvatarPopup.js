import React from 'react';
import PopupWithForm from './PopupWithForm';
import ButtonSubmit from './ButtonSubmit';

class EditAvatarPopup extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputAvatar = React.createRef();

    this.state = {
      isLoading: false
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.setState({ isLoading: true });

    this.props.onUpdateAvatar({
      avatar: this.inputAvatar.current.value
    })
    // .then((user) => this.inputAvatar.currentvalue = '')
    .catch(err => console.error(err))
    .finally(() => this.setState({ isLoading: false }));
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
            ref={this.inputAvatar}
          />
          <span className="popup__error" id="av-input-error"></span>
        </label>
        <ButtonSubmit>
          {this.state.isLoading ? 'Загрузка...' : 'Сохранить'}
        </ButtonSubmit>
      </PopupWithForm>
    );
  }
}

export default EditAvatarPopup;
