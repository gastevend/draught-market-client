'use strict'

const config = require('../config')
const store = require('../store')

const deleteBeer = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/beers/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getBeers = () => {
  return $.ajax({
    url: config.apiOrigin + '/beers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editBeer = (data, id) => {
  return $.ajax({
    url: config.apiOrigin + '/beers/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const addBeer = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/beers',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getBeers,
  deleteBeer,
  editBeer,
  addBeer
}
