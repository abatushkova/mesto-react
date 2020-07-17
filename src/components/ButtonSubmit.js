import React from 'react';

class ButtonSubmit extends React.Component {
  render() {
    return (
      <button type="submit" className="popup__submit-btn">
        {this.props.children}
      </button>
    );
  }
}

export default ButtonSubmit;
