'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const preDocLoad = require('./pre-doc-load')
const authEvents = require('./auth/auth-events.js')
// const beerEvents = require('./beer/beer-events.js')

preDocLoad.preDocLoadActions()

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  // beerEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
