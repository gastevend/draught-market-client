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

const onEditBeer = function () {
  const id = $(event.target).attr('data-id')
  $('.beer-editable[data-id=' + id + ']').attr('contenteditable', 'true')
  console.log($('#beer-name').html(''))
  $('#beer-name').focus()
  $('.manage-pg-buttons[data-id=' + id + ']').toggle()
  // $('.beer-editable[data-id=' + id + ']').replaceWith()
}

const onSaveBeer = function () {
  const id = $(event.target).attr('data-id')
  const data = {
    beer: {}
  }
  data.beer.name = $('#beer-name[data-id=' + id + ']').html()
  data.beer.price = $('#beer-price[data-id=' + id + ']').html()
  api.editBeer(data, id)
    .then(ui.saveBeerSuccess)
    .catch(ui.saveBeerFailure)
}

const addBeerListHandlers = function () {
  $('.delete-button').on('click', onDeleteBeer)
  $('.edit-button').on('click', onEditBeer)
  $('.save-button').on('click', onSaveBeer)
}

const onGetBeers = function () {
  $('.beers-container').empty()
  api.getBeers()
    .then(ui.getBeersSuccess)
    .then(addBeerListHandlers)
    .catch(ui.getBeersFailure)
}

module.exports = {
  addBeerListHandlers,
  onGetBeers
}
