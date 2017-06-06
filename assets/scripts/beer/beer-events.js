'use strict'

const api = require('./api')
const ui = require('./ui')

const onDeleteBeer = function (event) {
  const id = $(event.target).attr('data-id')
  api.deleteBeer(id)
    .then(ui.deleteBeerSuccess)
    .then(() => {
      $('.one-beer[data-id=' + id + ']').remove()
    })
    .catch(ui.deleteBeerFailure)
}

const addHandlers = function () {
  $('.delete-button').on('click', onDeleteBeer)
}

const onGetBeers = function () {
  $('.beers-container').empty()
  api.getBeers()
    .then(ui.getBeersSuccess)
    .then(addHandlers)
    .catch(ui.getBeersFailure)
}

module.exports = {
  addHandlers,
  onGetBeers
}
