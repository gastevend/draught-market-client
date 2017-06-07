'use strict'

const market = {
  beerList: [],
  updateMarketData: function (data) {
    market.beerList = []
    data.beers.map(beer => {
      beer.price = parseFloat(beer.price)
      market.beerList.push(beer)
    })
    console.log('after the update market map function beerList is ', market.beerList)
  },
  runGameLogic: function () {
    market.beerList.map((beer, index) => {
      const priceToString = beer.price.toFixed(2)
      console.log(`${beer.name}: ${beer.price}`)
      $('.market-beer-price[data-id=' + index + ']').html(priceToString)
    })
    market.updateBoard = setTimeout(market.runGameLogic, 5000)
  },
  stopGameLogic: function () {
    clearTimeout(market.updateBoard)
    market.beerList = []
  },
  purchaseBeer: function (index) {
    market.beerList[index].price += 0.75
    const otherBeers = market.beerList.filter(beer => {
      return beer.name !== market.beerList[index].name
    })
    otherBeers.map(beers => {
      beers.price -= 0.15
    })
    console.log('purchaseBeer ran')
  }
}

// const beerPriceCap = beerList.map(beer => beer.price).reduce((sum,price)=> sum + price , 0)

// const purchaseBeer = function(beerBought) {
//   beerBought.price += 1.00
//   const otherBeers = beerList.filter(beer => {
//     return beer.name != beerBought.name
//   })
//   otherBeers.map(beers => {
//     beers.price = Math.ceil((beers.price - (1/beerList.length)) * 100) / 100
//   })
// }

// beerList.map(beer => console.log(beer.price))
// purchaseBeer(beerList[0])
module.exports = {
  market
}
