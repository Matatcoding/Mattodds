const $app = document.querySelector("#app");
const $div = document.createElement("div");
const $body = document.querySelector("body");
const $bank = document.querySelector("#bank");
const $odds = document.querySelector("#odds");
const $evens = document.querySelector("#evens");

let bankArr = [];
let oddsArr = [];
let evensArr = [];

const bankNumber = (e) => {
  e.preventDefault();

  const bankInput = Number(document.getElementById("numberInput").value);
  bankArr.push(bankInput);
  document.getElementById("bank").value = bankArr.join(", ");
};

const sortOne = () => {
  if (bankArr.length > 0) {
    const num = bankArr.shift();
    if (num % 2 === 0) {
      evensArr.push(num);
    } else {
      oddsArr.push(num);
    }
    document.getElementById("bank").value = bankArr.join(", ");
    document.getElementById("odds").value = oddsArr.join(", ");
    document.getElementById("evens").value = evensArr.join(", ");
  }
};

const sortAll = () => {
  while (bankArr.length > 0) {
    const num = bankArr.shift();
    if (num % 2 === 0) {
      evensArr.push(num);
    } else {
      oddsArr.push(num);
    }
    document.getElementById("bank").value = "";
    document.getElementById("odds").value = oddsArr.join(", ");
    document.getElementById("evens").value = evensArr.join(", ");
  }
};

const form = () => {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <div class="form-group">
    <label for="formControlInput">Add a number to the bank</label>
    <input id="numberInput">
    <button type="submit" class="addNumber">Add Number</button>
    <button type="button" class="sortOne">Sort One</button>
    <button type="button" class="sortAll">Sort All</button>
  </div>`;
  $form.addEventListener("submit", bankNumber);

  const oneButton = $form.querySelector(".sortOne");
  const allButton = $form.querySelector(".sortAll");
  if (oneButton) {
    oneButton.addEventListener("click", sortOne);
  }
  if (allButton) {
    allButton.addEventListener("click", sortAll);
  }

  return $form;
};

const createBank = () => {
  const $numberBank = document.createElement("div");
  $numberBank.innerHTML = `
    <h2 class="bank">Bank</h2>
    <output class="input-bank" id="bank">
  `;
  return $numberBank;
};

const storeOdds = () => {
  const $oddsbank = document.createElement("div");
  $oddsbank.innerHTML = `
     <h2 class="odds">Odds</h2>
     <output class="input-bank" id="odds">
  `;

  return $oddsbank;
};

const storeEvens = () => {
  const $evensbank = document.createElement("div");
  $evensbank.innerHTML = `
    <h2 class="evens">Evens</h2>
    <output class="input-bank" id="evens">
  `;

  return $evensbank;
};

const main = () => {
  $app.style.display = "flex";
  $app.style.flexDirection = "column";
  $app.style.justifyContent = "center";
  $app.style.alignItems = "center";
  const $h2 = document.createElement("h2");
  $h2.textContent = "Odds and Evens";
  $app.append($h2);
  $app.append(form());
  $app.append(createBank());
  $app.append(storeOdds());
  $app.append(storeEvens());
};
main();
