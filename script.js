function convertCurrency() {
  let usd = document.getElementById("usd").value;
  let inr = usd * 74.50;
  let aed = usd * 3.67;
  let gbp = usd * 0.71;
  let qar = usd * 3.64;
  document.getElementById("inr").innerHTML = inr.toFixed(2);
  document.getElementById("aed").innerHTML = aed.toFixed(2);
  document.getElementById("gbp").innerHTML = gbp.toFixed(2);
  document.getElementById("qar").innerHTML = qar.toFixed(2);
}
