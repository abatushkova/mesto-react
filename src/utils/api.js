class Api  {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _fetch(url, params) {
    return fetch(this._baseUrl + url, {
      ...params,
      headers: this._headers,
      body: JSON.stringify(params.body)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(`Ошибка: ${response.status}`);
    })
  }

  getUserInfo() {
    return this._fetch('/users/me', {
      method: 'GET'
    });
  }

  getInitialCards() {
    return this._fetch('/cards', {
      method: 'GET'
    });
  }

  changeCardLikeStatus(cardID, like) {
    return this._fetch('/cards/likes/' + cardID, {
      method: like ? 'PUT' : 'DELETE'
    });
  }

  deleteCard(cardID) {
    return this._fetch('/cards/' + cardID, {
      method: 'DELETE'
    });
  }

}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-12',
  headers: {
    authorization: 'bd0f2499-7585-4f83-9366-da3fa3857f94',
    'Content-Type': 'application/json'
  }
});
