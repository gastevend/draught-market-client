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
  $('.edit-button').off('click', onEditBeer)
}

const onSaveBeer = function () {
  const id = $(event.target).attr('data-id')

  $('.beer-name[data-id=' + id + ']').css('border', 'none')
  $('.beer-price[data-id=' + id + ']').css('border', 'none')

  const data = {
    beer: {}
  }
  data.beer.name = $('.beer-name[data-id=' + id + ']').html()
  const priceString = $('.beer-price[data-id=' + id + ']').html()
  data.beer.price = parseFloat(priceString)
  if (data.beer.price < 0) {
    data.beer.price = 0.01
  } else if (data.beer.price > 100) {
    data.beer.price = 100.00
  }

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
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)

  // data.beer.price = parseFloat(data.beer.price)
  data.beer.price = data.beer.price.replace(/[$a-zA-Z]/g, '')
  data.beer.name = data.beer.name.replace(/(<([^>$]+)>)/gi, '')

  if (data.beer.price < 0) {
    data.beer.price = 0.01
  } else if (data.beer.price > 100) {
    data.beer.price = 100.00
  }

  $('#cpsuccess').hide()
  $('#beer-name').css('border', 'none')
  $('#price').css('border', 'none')

  if (!data.beer.name) {
    $('#beer-name').css('border', '2px solid red')
  } else if (!data.beer.price) {
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
  if (priceLogic.market.beerList.length > 0) {
    $('#cpsuccess').hide()
    $('#manage-market-page').hide()
    $('#add-beer').trigger('reset')
    $('#draught-market-page').show()
    $('#change-password-link').hide()
    onGetBeers()
    priceLogic.market.runGameLogic()
  } else {
    $('#beer-list').animateCss('tada')
  }
}

const onCloseMarket = function () {
  $('#manage-market-page').show()
  $('#draught-market-page').hide()
  $('#change-password-link').show()
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
