var PizzaStore = require('./pizza.js');

console.log(new PizzaStore().buyPizza(-10));
console.log(new PizzaStore().buyPizza(3));
console.log(new PizzaStore().buyPizza(8));
console.log(new PizzaStore().buyPizza(1000000));
console.log(new PizzaStore().buyPizza('fish sticks'));
