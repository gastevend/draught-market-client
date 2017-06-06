'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetBeers = function () {
  $('.beers-container').empty()
  api.getBeers()
    .then(ui.getBeersSuccess)
    .catch(ui.getBeersFailure)
}

const addHandlers = () => {
  $()
}

module.exports = {
  addHandlers,
  onGetBeers
}
