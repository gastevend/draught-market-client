'use strict'

const market = {
  beerList: [],
  updateMarketData: function (data) {
    data.beers.map(beer => {
      this.beerList.push(beer)
    })
    console.log('After update the beer list is ', this.beerList)
  },
  runGameLogic: function () {
    console.log(this.beerList)
    market.beerList.map(beer => console.log(`${beer.name}: ${beer.price}`))
    console.log(this)
    market.updateBoard = setTimeout(market.runGameLogic, 5000)
  },
  stopGameLogic: function () {
    clearTimeout(market.updateBoard)
  }
}

// const beerPriceCap = beerList.map(beer => beer.price).reduce((sum,price)=> sum + price , 0)

// const purchaseBeer = function(boughtBeer) {
//   boughtBeer.price += 1.00
//   const otherBeers = beerList.filter(beer => {
//     return beer.name != boughtBeer.name
//   })
//   otherBeers.map(beers => {
//     beers.price = Math.ceil((beers.price - (1/beerList.length)) * 100) / 100
//   })
// }

// const purchaseBeer = function(boughtBeer) {
//   boughtBeer.price += 0.75
//   const otherBeers = beerList.filter(beer => {
//     return beer.name != boughtBeer.name
//   })
//   otherBeers.map(beers => {
//     beers.price -= 0.15
//   })
// }
//

// beerList.map(beer => console.log(beer.price))
// purchaseBeer(beerList[0])
module.exports = {
  market
}
