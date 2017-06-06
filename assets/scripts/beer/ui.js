'use strict'

const showBeers = require('../templates/show-beers.hbs')

const getBeersSuccess = data => {
  console.log('getting beers back and they are ', data)
  const showBeersHtml = showBeers({ beers: data.beers })
  $('.beers-container').append(showBeersHtml)
  $('.save-button').hide()
  $('.cancel-button').hide()
}

const getBeersFailure = error => {
  console.error('error is ', error)
}

const deleteBeerSuccess = data => {
  console.log('deleted that beer for ya ', data)
  // const showBeersHtml = showBeers({ beers: data.beers })
  // $('.beers-container').append(showBeersHtml)
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

module.exports = {
  getBeersSuccess,
  getBeersFailure,
  deleteBeerSuccess,
  deleteBeerFailure,
  saveBeerSuccess,
  saveBeerFailure
}
