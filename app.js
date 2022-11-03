console.log('js is loaded');

// SECTION Data

const iceCream = [{
  name: 'Cookie Dough',
  quantity: 0,
  price: 4
}, {
  name: 'Vanilla',
  quantity: 0,
  price: 3
}, {
  name: 'Chocolate',
  quantity: 0,
  price: 3
}, {
  name: 'Cookies n Cream',
  quantity: 0,
  price: 4
}, {
  name: 'Birthday Cake',
  quantity: 0,
  price: 4
}, {
  name: 'Mint Chocolate Chip',
  quantity: 0,
  price: 4
},
]

const vessels = [{
  name: 'Waffle Cone',
  quantity: 0,
  price: 3
}, {
  name: 'Waffle Bowl',
  quantity: 0,
  price: 4
}, {
  name: 'Dipped Cone',
  quantity: 0,
  price: 5
}]

const toppings = [{
  name: 'Sprinkles',
  quantity: 0,
  price: 2
}, {
  name: 'Chocolate Chips',
  quantity: 0,
  price: 2
}, {
  name: 'Coconut Flakes',
  quantity: 0,
  price: 2
}]

// // STUB Topping functions
// function selectSprinkles() {
//   let topping = toppings.find(t => t.name == 'Sprinkles')
//   console.log(topping);
// }

// function selectChocoChips() {
//   let topping = toppings.find(t => t.name == 'Chocolate Chips')
//   console.log(topping);
// }

// function selectCocoFlakes() {
//   let topping = toppings.find(t => t.name == 'Coconut Flakes')
//   console.log(topping);
// }

function selectTopping(toppingName) {
  let foundTopping = toppings.find(t => t.name == toppingName)
  // @ts-ignore
  foundTopping.quantity++
  console.log(foundTopping);
  drawReceipt()
}

// STUB Vessels functions

// function selectWaffleCone() {
//   let vessel = vessels.find(v => v.name == 'Waffle Cone')
//   console.log(vessel);
// }

// function selectWaffleBowl() {
//   let vessel = vessels.find(v => v.name == 'Waffle Bowl')
//   console.log(vessel);
// }

// function selectDippedCone() {
//   let vessel = vessels.find(v => v.name == 'Dipped Cone')
//   console.log(vessel);
// }

function selectVessel(vesselName) {
  let foundVessel = vessels.find(v => v.name == vesselName)
  foundVessel.quantity++
  console.log(foundVessel)
  drawReceipt()
}

// STUB Icecream flavor functions

// function selectVanilla() {
//   let flavor = iceCream.find(i => i.name == 'Vanilla')
//   console.log(flavor);
// }

// function selectChocolate() {
//   let flavor = iceCream.find(i => i.name == 'Chocolate')
//   console.log(flavor);
// }

// function selectCookies() {
//   let flavor = iceCream.find(i => i.name == 'CookiesnCream')
//   console.log(flavor);
// }

// function selectMintChoco() {
//   let flavor = iceCream.find(i => i.name == 'Mint Chocolate Chip')
//   console.log(flavor);
// }

// function selectBirthdayCake() {
//   let flavor = iceCream.find(i => i.name == 'Birthday Cake')
//   console.log(flavor);
// }

// function selectCookieDough() {
//   let flavor = iceCream.find(i => i.name == 'Cookie Dough')
//   console.log(flavor);
// }

function selectIceCream(iceCreamName) {
  let foundIceCream = iceCream.find(i => i.name == iceCreamName)
  foundIceCream.quantity++
  console.log(foundIceCream);
  drawReceipt()
}

// STUB draw functions

function drawReceipt() {
  let template = ''
  toppings.forEach(t => {
    if (t.quantity > 0) {
      console.log('drawing receipt');
      template += `
      <div class="row">
          <div class="col-md-12 d-flex justify-content-between">
            <h5>${t.name}</h5>
            <h5>${t.quantity}</h5>
            <h5>${t.price}</h5>
            <h5>Total</h5>
          </div>
      `
    }
    document.getElementById('cart').innerHTML = template
  }),
    vessels.forEach(v => {
      if (v.quantity > 0) {
        console.log('drawing receipt');
        template += `
      <div class="row">
        <div class="col-md-12 d-flex justify-content-between">
          <h5>${v.name}</h5>
          <h5>${v.quantity}</h5>
          <h5>${v.price}</h5>
          <h5>Total</h5>
        </div>
      `
      }
      document.getElementById('cart').innerHTML = template
    }),
    iceCream.forEach(i => {
      if (i.quantity > 0) {
        console.log('drawing receipt');
        template += `
      <div class="row">
        <div class="col-md-12 d-flex justify-content-between">
          <h5>${i.name}</h5>
          <h5>${i.quantity}</h5>
          <h5>${i.price}</h5>
          <h5>Total</h5>
        </div>
      `
      }
      document.getElementById('cart').innerHTML = template
    })
}