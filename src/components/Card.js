import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onCardClick(this.props.card);
  }

  render() {
    let buttonDelete = (this.props.card.owner._id === this.props.userId)
      && <button type="button" 
        className="elements__delete-btn" title="Удалить" 
        onClick={this.props.onDeleteBtnClick}></button>;

    return (
      <div className="elements__item">
        {buttonDelete}
        <img src={this.props.card.link}
          className="elements__img"
          alt={this.props.card.name}
          onClick={this.handleClick}
        />
        <div className="elements__info">
          <h2 className="elements__title">{this.props.card.name}</h2>
          <div className="elements__like">
            <button type="button"
              className="elements__like-btn"
              title="Мне нравится">
            </button>
            <span className="elements__like-counter">
              {this.props.card.likes.length}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
