'use strict'

const getBeersSuccess = data => {
  console.log('getting beers back and they are ', data)
  // const showSongsHtml = showSongsTemplate({ songs: data.songs })
  // $('.view').append(showSongsHtml)
  // $('.song').on('click', dynamicSongEvents.onChooseSong)
}

const getBeersFailure = error => {
  console.error('error is ', error)
}

module.exports = {
  getBeersSuccess,
  getBeersFailure
}
