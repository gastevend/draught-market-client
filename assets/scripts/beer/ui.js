'use strict'

const showBeers = require('../templates/show-beers.hbs')
const showMarket = require('../templates/show-market.hbs')
const priceLogic = require('./price-logic.js')

const getBeersSuccess = data => {
  console.log('getting beers back and they are ', data)
  const showBeersHtml = showBeers({ beers: data.beers })
  $('#manage-container').append(showBeersHtml)
  $('.save-button').hide()
  $('.cancel-button').hide()
  const showMarketHtml = showMarket({ beers: data.beers })
  $('#market-container').append(showMarketHtml)
  priceLogic.market.updateMarketData(data)
}

const getBeersFailure = error => {
  console.error('error is ', error)
}

const deleteBeerSuccess = data => {
  console.log('deleted that beer for ya ', data)
}

const deleteBeerFailure = error => {
  console.error('error is ', error)
}

const saveBeerSuccess = data => {
  console.log('Your beer has been updated and is now ', data)
}

const saveBeerFailure = error => {
  console.error('error is ', error)
}

const addBeerSuccess = data => {
  console.log('Your beer has been added ', data)
}

const addBeerFailure = error => {
  console.error('error is ', error)
}

module.exports = {
  getBeersSuccess,
  getBeersFailure,
  deleteBeerSuccess,
  deleteBeerFailure,
  saveBeerSuccess,
  saveBeerFailure,
  addBeerSuccess,
  addBeerFailure
}
