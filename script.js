// Average Calculator by Mr. V code along

// Event Listener
document.getElementById("calc-btn").addEventListener("click", calcAverage);

// Event Function
function calcAverage() {
  // Input
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;

  // Process
  let fullSum = num1 + num2 + num3;
  let average = (num1 + num2 + num3) / 3;
  let product = num1 * num2 * num3;
  let remainder = num1 % num2;
  let power = num1 ** num2;
  let rounded = num1.toFixed(2);
  let radians = num3;
  let x = num2 - num1 + 1;
  let random = Math.random() * x + num1;

  // Output
  document.getElementById("ave-out").innerHTML = average;
  document.getElementById("sum").innerHTML = fullSum;
  document.getElementById("product").innerHTML = product;
  document.getElementById("remain").innerHTML = remainder;
  document.getElementById("pwr").innerHTML = power;
  document.getElementById("rnd").innerHTML = rounded;
  document.getElementById("tngent").innerHTML = Math.tan(radians);
  document.getElementById("rndm").innerHTML = Math.floor(random);
}
