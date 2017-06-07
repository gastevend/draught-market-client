'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')
const beerEvents = require('../beer/beer-events')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#sign-up').trigger('reset')
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(beerEvents.onGetBeers)
    .catch(ui.signInFailure)
  $('#sign-in').trigger('reset')
}

const onSignOut = function () {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function () {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#change-password').trigger('reset')
}

const onOrSignIn = function () {
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#sign-up').trigger('reset')
  $('#suerror').hide()
}

const onOrSignUp = function () {
  $('#sign-up').show()
  $('#sign-in').hide()
  $('#sign-in').trigger('reset')
}

const onChangePasswordLink = function () {
  $('#change-password').show()
}

const closeDropdown = function () {
  $('#bs-example-navbar-collapse-1').collapse('toggle')
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-in-link').on('click', onOrSignIn)
  $('#sign-up-link').on('click', onOrSignUp)
  $('#change-password-link').on('click', onChangePasswordLink)
  $('.drop-links').on('click', closeDropdown)
}

module.exports = {
  addHandlers
}
