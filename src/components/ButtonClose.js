import React from 'react';

class ButtonClose extends React.Component {
  render() {
    return (
      <button type="button"
        className="popup__close-btn"
        title="Закрыть"
        onClick={this.props.closeHandler}>
      </button>
    );
  }
}

export default ButtonClose;
