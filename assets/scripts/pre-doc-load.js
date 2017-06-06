'use strict'

const preDocLoadActions = function () {
  $('#sign-in').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#change-password-link').hide()
  $('#drpdwn-button').hide()
  $('#manage-market-page').hide()
  $('#end').hide()
}

module.exports = {
  preDocLoadActions
}
