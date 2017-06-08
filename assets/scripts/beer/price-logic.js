'use strict'

const market = {
  beerList: [],
  updateMarketData: function (data) {
    market.beerList = []
    if (data.beers) {
      data.beers.map(beer => {
        beer.price = parseFloat(beer.price)
        market.beerList.push(beer)
      })
    }
  },
  runGameLogic: function () {
    market.beerList.map((beer, index) => {
      const priceToString = beer.price.toFixed(2)
      console.log(`${beer.name}: ${beer.price}`)
      $('.market-beer-price[data-id=' + index + ']').html(priceToString)
    })
    $('.market-beer-price').animateCss('flash')
    market.updateBoard = setTimeout(market.runGameLogic, 15000)
  },
  stopGameLogic: function () {
    clearTimeout(market.updateBoard)
    // market.beerList = []
  },
  purchaseBeer: function (index) {
    market.beerList[index].price += 1.00
    const otherBeers = market.beerList.filter(beer => {
      return beer.name !== market.beerList[index].name
    })
    otherBeers.map(beers => {
      beers.price = Math.ceil((beers.price - (1 / market.beerList.length)) * 100) / 100
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
