'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const priceLogic = require('./price-logic.js')

const onDeleteBeer = function (event) {
  const id = $(event.target).attr('data-id')
  api.deleteBeer(id)
    .then(ui.deleteBeerSuccess)
    .then(onGetBeers)
    .catch(ui.deleteBeerFailure)
}

const onCancelBeer = function () {
  onGetBeers()
}

const onEditBeer = function () {
  const id = $(event.target).attr('data-id')

  $('.beer-editable[data-id=' + id + ']').attr('contenteditable', 'true')
  $('.beer-price[data-id=' + id + ']').html('0.00')
  $('.beer-name[data-id=' + id + ']').focus()
  $('.manage-pg-buttons[data-id=' + id + ']').toggle()
}

const onSaveBeer = function () {
  const id = $(event.target).attr('data-id')

  $('.beer-name[data-id=' + id + ']').css('border', 'none')
  $('.beer-price[data-id=' + id + ']').css('border', 'none')

  const data = {
    beer: {}
  }
  data.beer.name = $('.beer-name[data-id=' + id + ']').html()
  data.beer.price = $('.beer-price[data-id=' + id + ']').html()

  if (!data.beer.name) {
    console.log('inside if name is empty')
    $('.beer-name[data-id=' + id + ']').css('border', '2px solid red')
  } else if (!data.beer.price || (data.beer.price === '0.00')) {
    $('.beer-price[data-id=' + id + ']').css('border', '2px solid red')
  } else {
    api.editBeer(data, id)
      .then(ui.saveBeerSuccess)
      .then(onGetBeers)
      .catch(ui.saveBeerFailure)
    $('.beer-editable[data-id=' + id + ']').attr('contenteditable', 'false')
    $('.manage-pg-buttons[data-id=' + id + ']').toggle()
  }
}

const onPurchaseBeer = function () {
  const index = $(event.target).attr('data-id')
  priceLogic.market.purchaseBeer(index)
}

const addBeerListHandlers = function () {
  $('.delete-button').on('click', onDeleteBeer)
  $('.edit-button').on('click', onEditBeer)
  $('.save-button').on('click', onSaveBeer)
  $('.cancel-button').on('click', onCancelBeer)
  $('.purchased-button').on('click', onPurchaseBeer)
}

const onGetBeers = function () {
  $('.beers-container').empty()
  api.getBeers()
    .then(ui.getBeersSuccess)
    .then(addBeerListHandlers)
    .catch(ui.getBeersFailure)
}

const onAddBeer = function () {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)

  $('#beer-name').css('border', 'none')
  $('#price').css('border', 'none')

  if (!data.beer.name) {
    $('#beer-name').css('border', '2px solid red')
  } else if (!data.beer.price || (data.beer.price === '0.00')) {
    $('#price').css('border', '2px solid red')
  } else {
    api.addBeer(data)
      .then(ui.addBeerSuccess)
      .then(onGetBeers)
      .catch(ui.addBeerFailure)
    $('#add-beer').trigger('reset')
    $('#beer-name').focus()
  }
}

const onOpenMarket = function () {
  $('#manage-market-page').hide()
  $('#draught-market-page').show()
  priceLogic.market.runGameLogic()
}

const onCloseMarket = function () {
  $('#manage-market-page').show()
  $('#draught-market-page').hide()
  priceLogic.market.stopGameLogic()
}

const addHandlers = function () {
  $('#add-beer').on('submit', onAddBeer)
  $('#start').on('click', onOpenMarket)
  $('#end').on('click', onCloseMarket)
}

module.exports = {
  addBeerListHandlers,
  onGetBeers,
  addHandlers
}
