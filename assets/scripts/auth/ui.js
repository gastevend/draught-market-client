'use strict'

const store = require('../store')
const priceLogic = require('../beer/price-logic.js')

const signUpSuccess = (data) => {
  console.log('sign up working', data)
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#susuccess').show()
  $('#suerror').hide()
  $('#sierror').hide()
}

const signUpFailure = (error) => {
  console.error('signUpFailure ran. error is ', error)
  $('#suerror').show()
  $('#susuccess').hide()
}

const signInSuccess = data => {
  store.user = data.user
  console.log('sign in working', data)
  $('#change-password-link').show()
  if ($(window).width() < 845) {
    $('#drpdwn-button').show()
  }
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#manage-market-page').show()
  $('#beer-list').animateCss('slideInRight')
  $('#whats-on-tap').animateCss('slideInLeft')
  $('#welcome-container').animateCss('slideInDown')
  $('#susuccess').hide()
  // $('#suerror').hide()
  $('#sierror').hide()
  // $('#cpdropdown').show()
  // $('.sign-up-container').hide()
  // $('#leave').show()
  // $('.jumbotron').show()
  // const showSearchJumbo = showSearchJumboTemplate()
  // $('.jumbotron').append(showSearchJumbo)
}

const signInFailure = error => {
  console.error('signInFailure ran. error is ', error)
  $('#sierror').show()
  $('#susuccess').hide()
}

const signOutSuccess = data => {
  store.user = null
  console.log('sign out working', data)
  priceLogic.market.stopGameLogic()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#change-password-link').hide()
  $('#drpdwn-button').hide()
  $('#manage-market-page').hide()
  $('#draught-market-page').hide()
  // $('#cpdropdown').hide()
  $('#cperror').hide()
  $('#change-password').hide()
  $('#cpsuccess').hide()
  $('#add-beer').trigger('reset')
  // $('.view').empty()
  // $('#leave').hide()
  // $('.jumbotron').empty()
  // $('.jumbotron').hide()
  // $('.navi').removeClass('active')
}

const signOutFailure = error => {
  console.error('signOutFailure ran. error is ', error)
  // $('#sierror').hide()
}

const changePasswordSuccess = data => {
  console.log('change password working', data)
  $('#change-password').hide()
  $('#cpsuccess').show()
  $('#manage-market-page').show()
  $('#cperror').hide()
}

const changePasswordFailure = error => {
  console.error('changePasswordFailure ran. error is ', error)
  $('#cperror').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
