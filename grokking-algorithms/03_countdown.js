/**
 * Countdown
 * @param {number} i Number
 */
function countdown(i) {
  console.log(i);
  if (i <= 0) return;
  else countdown(i - 1);
}

//test
//console.log(countdown(5)); //5 4 3 2 1 0 undefined
//undefined返回的是coutdown(5)这个函数的返回值，即void

countdown(5); //5 4 3 2 1 0