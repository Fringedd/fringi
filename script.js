'use strict';
/*BUTTONS*/
const five = document.querySelector('.five-percent');
const ten = document.querySelector('.ten-percent');
const fifteen = document.querySelector('.fifteen-percent');
const twentyFive = document.querySelector('.twentyfive-percent');
const fifty = document.querySelector('.fifty-percent');
const reset = document.querySelector('.reset');

/* VALUES */

const People = document.getElementById('confirm-people').value;
const Billy = document.getElementById('bill').value;

/*EVENT LISTENERS */
const tipOneEl = document.querySelector('.dollar-span').textContent;
let billyFive = tipOneEl;
const tipTwoEl = document.querySelector('.dollar-span2').textContent;

let calculation;

const init = function () {
  document.querySelector('.people-count').value = '';
  document.getElementById('bill').value = '';
  document.querySelector('.dollar-span').textContent = 0.0;
  document.querySelector('.dollar-span2').textContent = 0.0;
};

reset.addEventListener('click', init);

five.addEventListener('click', function () {
  let Bill = document.getElementById('bill').value;
  let people = document.getElementById('confirm-people').value;
  let amount = 0.05 * Bill;
  let fixed = amount.toFixed(2);
  let final = fixed / people;
  let final2 = final.toFixed(2);
  let total = Bill / people;
  let fixed3 = total.toFixed(2);
  let multiplied = Number(final2) * people;
  let total2 = Number(fixed3) + Number(final2);
  let total3 = total2.toFixed(2);
  document.querySelector('.dollar-span').textContent = `${final2}`;
  document.querySelector('.dollar-span2').textContent = `${total2}`;
});

ten.addEventListener('click', function () {
  let Bill = document.getElementById('bill').value;
  let people = document.getElementById('confirm-people').value;
  let amount = 0.1 * Bill;
  let fixed = amount.toFixed(2);
  let final = fixed / people;
  let final2 = final.toFixed(2);
  let total = Bill / people;
  let fixed3 = total.toFixed(2);
  let multiplied = Number(final2) * people;
  let total2 = Number(fixed3) + Number(final2);
  let total3 = total2.toFixed(2);
  document.querySelector('.dollar-span').textContent = `${final2}`;
  document.querySelector('.dollar-span2').textContent = `${total2}`;
});
fifteen.addEventListener('click', function () {
  let Bill = document.getElementById('bill').value;
  let people = document.getElementById('confirm-people').value;
  let amount = 0.15 * Bill;
  let fixed = amount.toFixed(2);
  let final = fixed / people;
  let final2 = final.toFixed(2);
  let total = Bill / people;
  let fixed3 = total.toFixed(2);
  let multiplied = Number(final2) * people;
  let total2 = Number(fixed3) + Number(final2);
  let total3 = total2.toFixed(2);
  document.querySelector('.dollar-span').textContent = `${final2}`;
  document.querySelector('.dollar-span2').textContent = `${total2}`;
});
twentyFive.addEventListener('click', function () {
  let Bill = document.getElementById('bill').value;
  let people = document.getElementById('confirm-people').value;
  let amount = 0.25 * Bill;
  let fixed = amount.toFixed(2);
  let final = fixed / people;
  let final2 = final.toFixed(2);
  let total = Bill / people;
  let fixed3 = total.toFixed(2);
  let multiplied = Number(final2) * people;
  let total2 = Number(fixed3) + Number(final2);
  let total3 = total2.toFixed(2);
  document.querySelector('.dollar-span').textContent = `${final2}`;
  document.querySelector('.dollar-span2').textContent = `${total2}`;
});
fifty.addEventListener('click', function () {
  let Bill = document.getElementById('bill').value;
  let people = document.getElementById('confirm-people').value;
  let amount = 0.5 * Bill;
  let fixed = amount.toFixed(2);
  let final = fixed / people;
  let final2 = final.toFixed(2);
  let total = Bill / people;
  let fixed3 = total.toFixed(2);
  let multiplied = Number(final2) * people;
  let total2 = Number(fixed3) + Number(final2);
  let total3 = total2.toFixed(2);
  document.querySelector('.dollar-span').textContent = `${final2}`;
  document.querySelector('.dollar-span2').textContent = `${total2}`;
});
