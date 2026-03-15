// this value going to asign 0 so insdie only we should decalare

// const weight = parseInt(document.querySelector("#weight").value);
// const height = parseInt(document.querySelector("#height").value);
// const result = document.querySelector("#results");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);
  const result = document.querySelector("#results");

  if (height <= 0 || height === " " || isNaN(height)) {
    result.innerHTML = `Please enter correct values for height ${height}`;
  } else if (weight <= 0 || weight === " " || isNaN(weight)) {
    result.innerHTML = `Please enter correct values for weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = bmi;
    result.style.color = bmi < 18.6 ? "yellow" : bmi <= 24.9 ? "green" : "red";
  }
});
