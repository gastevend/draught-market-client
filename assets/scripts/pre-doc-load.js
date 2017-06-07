'use strict'

const preDocLoadActions = function () {
  $('#sign-in').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#change-password-link').hide()
  $('#drpdwn-button').hide()
  $('#manage-market-page').hide()
  $('#susuccess').hide()
  $('#suerror').hide()
  $('#sierror').hide()
  $('#cpsuccess').hide()
  $('#cperror').hide()
  $('#draught-market-page').hide()
}

module.exports = {
  preDocLoadActions
}
