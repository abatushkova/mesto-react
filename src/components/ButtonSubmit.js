import React from 'react';

function ButtonSubmit(props) {
  return (
    <button type="submit" className="popup__submit-btn">
      {props.children}
    </button>
  );
}

export default ButtonSubmit;
