import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userDescription: '',
      userAvatar: '',
      userId: '',
      cards: []
    };
  }

  componentDidMount() {
    Promise.all([api.getInitialUserInfo(), api.getInitialCards()])
    .then(([user, cards]) => {
      this.setState({
        userName: user.name,
        userDescription: user.about,
        userAvatar: user.avatar,
        userId: user._id,
        cards: cards
      });
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <main className="container page__section">
      <section className="profile container__profile">
        <div className="profile__avatar">
          <img src={this.state.userAvatar}
            className="profile__img"
            alt={this.state.userName}
          />
          <button type="button"
            className="profile__update-av-btn"
            title="Сменить аватар"
            onClick={this.props.onEditAvatar}>
          </button>
        </div>
        <div className="profile__details">
          <h1 className="profile__name">{this.state.userName}</h1>
          <button type="button"
            className="profile__edit-btn"
            title="Редактировать профиль"
            onClick={this.props.onEditProfile}>
          </button>
          <p className="profile__info">{this.state.userDescription}</p>
        </div>
        <button type="button"
          className="profile__add-btn"
          title="Добавить фотографию"
          onClick={this.props.onAddCard}>
        </button>
      </section>
      <section className="elements">
        {this.state.cards.map(card => {
          return <Card
            card={card}
            key={card._id}
            userId={this.state.userId}
            onCardClick={this.props.onCardClick}
            onDeleteBtnClick={this.props.onDeleteBtnClick}
          />
        })}
      </section>
      </main>
    );
  }
}

export default Main;
