'use strict'

const showBeers = require('../templates/show-beers.hbs')

const getBeersSuccess = data => {
  console.log('getting beers back and they are ', data)
  const showBeersHtml = showBeers({ beers: data.beers })
  $('.beers-container').append(showBeersHtml)
  // $('.song').on('click', dynamicSongEvents.onChooseSong)
}

const getBeersFailure = error => {
  console.error('error is ', error)
}

module.exports = {
  getBeersSuccess,
  getBeersFailure
}
