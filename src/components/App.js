import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ButtonSubmit from './ButtonSubmit';
import ImagePopup from './ImagePopup';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleEditAvatarClick = this.handleEditAvatarClick.bind(this);
    this.handleEditProfileClick = this.handleEditProfileClick.bind(this);
    this.handleAddCardClick = this.handleAddCardClick.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
    this.closeAllPopups = this.closeAllPopups.bind(this);

    this.state = {
      isEditAvatarPopupOpen: false,
      isEditProfilePopupOpen: false,
      isAddCardPopupOpen: false,
      isConfirmPopupOpen: false,
      selectedCard: false
    }
  }

  handleEditAvatarClick() {
    this.setState({
      isEditAvatarPopupOpen: !this.state.isEditAvatarPopupOpen
    });
  }
  handleEditProfileClick() {
    this.setState({
      isEditProfilePopupOpen: !this.state.isEditProfilePopupOpen
    });
  }
  handleAddCardClick() {
    this.setState({
      isAddCardPopupOpen: !this.state.isAddCardPopupOpen
    });
  }
  handleCardClick(card) {
    this.setState({
      selectedCard: card
    })
  }
  handleDeleteBtnClick() {
    this.setState({
      isConfirmPopupOpen: !this.state.isConfirmPopupOpen
    })
  }
  closeAllPopups() {
    this.setState({
      isEditAvatarPopupOpen: false,
      isEditProfilePopupOpen: false,
      isAddCardPopupOpen: false,
      isConfirmPopupOpen: false,
      selectedCard: false
    });
  }

  render() {
    return (
      <div className="page__content">
        <Header />
        <Main
          onEditAvatar={this.handleEditAvatarClick}
          onEditProfile={this.handleEditProfileClick}
          onAddCard={this.handleAddCardClick}
          onCardClick={this.handleCardClick}
          onDeleteBtnClick={this.handleDeleteBtnClick}
        />
        <Footer />

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={(this.state.isEditAvatarPopupOpen)
            ? "popup_opened"
            : ""}
          onClose={this.closeAllPopups}
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
          isOpen={(this.state.isEditProfilePopupOpen)
            ? "popup_opened"
            : ""}
          onClose={this.closeAllPopups}
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
          isOpen={(this.state.isAddCardPopupOpen)
            ? "popup_opened"
            : ""}
          onClose={this.closeAllPopups}
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
          isOpen={(this.state.isConfirmPopupOpen)
            ? "popup_opened"
            : ""}
          onClose={this.closeAllPopups}
        >
          <ButtonSubmit>Да</ButtonSubmit>
        </PopupWithForm>

        <ImagePopup
          card={this.state.selectedCard}
          isOpen={(this.state.selectedCard)
            ? "popup_opened"
            : ""}
          onClose={this.closeAllPopups}
        />
      </div>
    );
  }
}

export default App;
