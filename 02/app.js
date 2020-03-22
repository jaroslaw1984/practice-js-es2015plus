"use strict";

// global variables
const carts = document.getElementsByClassName("cart__quantity");
const btn = document.querySelector(".cart__btn-calculate");
let totalPrice = document.querySelector(".cart__total-price");

// price sum
let sum = 0;

// new objects
let data = [];

// listen for button
btn.addEventListener("click", () => {
  // change HTMLCollection to NodeList
  [...carts].forEach((cart, index) => {
    // put to data as objects in array
    data = [
      ...data,
      { index: index, name: cart.previousSibling.data, value: cart.value }
    ];
    // clear input fields
    cart.value = "";
  });

  // create a variable that hold all price values
  const values = data.map(data => parseInt(data.value));

  // sum all prices
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  // put to the DOM
  totalPrice.textContent = sum;
  // clear array
  data = [];
});

// ??? I do not understand what for destructuring, there is no need for that
