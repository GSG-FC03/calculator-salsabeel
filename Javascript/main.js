const headerConverter = document.getElementsByClassName("headerConverter")[0];
const headerCalculator = document.getElementsByClassName("headerCalculator")[0];
const DL = document.getElementById("DL");

const numInput = document.getElementsByClassName("numInput")[0];
const calculatorBtn = document.getElementsByClassName("calculator")[0];
const converterBtn = document.getElementsByClassName("converter")[0];
const contentCalculator =
  document.getElementsByClassName("contentCalculator")[0];
const content = document.getElementsByClassName("content")[0];

const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const equal = document.getElementsByClassName("equal")[0];
const deleteBtn = document.getElementsByClassName("delete")[0];
const dot = document.getElementsByClassName("dot")[0];
let arrValues = [];

// the DarkLight mode

DL.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

//  Calculator

// for calculator header
calculatorBtn.addEventListener("click", function () {
  contentCalculator.style.display = "block";
  headerCalculator.style.display = "block";
  content.textContent = "";
  headerConverter.textContent = "";
});

// to write numbers in numInput
number.forEach((num) => {
  num.addEventListener("click", function () {
    numInput.value = numInput.value + num.value;
  });
});

// dot in numinput this make it doesn't repeats
dot.addEventListener("click", function () {
  const num = numInput.value;
  const numToStringe = num.toString();

  if (numToStringe.includes(".")) {
    numInput.value = numInput.value;
  } else {
    numInput.value = numInput.value + dot.value;
  }
});

// when i click on AC delete the value in numInput
deleteBtn.addEventListener("click", function () {
  numInput.value = "";
  arrValues=[];
});

//when i click on operator save the numInput in array as index1 and the kind of operator
operator.forEach((ope) => {
  ope.addEventListener("click", function () {
    if (ope.value == "+") {
      const currentValue = numInput.value;
      arrValues[0] = currentValue;
      numInput.value = "";
      arrValues[2] = "+";
    }
    if (ope.value == "-") {
      const currentValue = numInput.value;
      arrValues[0] = currentValue;
      numInput.value = "";
      arrValues[2] = "-";
    }
    if (ope.value == "X") {
      const currentValue = numInput.value;
      arrValues[0] = currentValue;
      numInput.value = "";
      arrValues[2] = "X";
    }
    if (ope.value == "??") {
      const currentValue = numInput.value;
      arrValues[0] = currentValue;
      numInput.value = "";
      arrValues[2] = "??";
    }
  });
});
// make operation to numIput like  add subtract division Multiply when l click on =
equal.addEventListener("click", function () {
  if (arrValues[2] === "+") {
    const secondValue = numInput.value;
    arrValues[1] = secondValue;
    arrValues[3] = Number(arrValues[1]) + Number(arrValues[0]);
    numInput.value = arrValues[3];
  }

  if (arrValues[2] === "-") {
    const secondValue = numInput.value;
    arrValues[1] = secondValue;
    arrValues[3] = Number(arrValues[0]) - Number(arrValues[1]);
    numInput.value = arrValues[3];
  }
  if (arrValues[2] === "X") {
    const secondValue = numInput.value;
    arrValues[1] = secondValue;
    arrValues[3] = Number(arrValues[1]) * Number(arrValues[0]);
    numInput.value = arrValues[3];
  }
  if (arrValues[2] === "??") {
    const secondValue = numInput.value;
    arrValues[1] = secondValue;
    arrValues[3] = Number(arrValues[0]) / Number(arrValues[1]);
    numInput.value = arrValues[3];
  }
});

// Convert

converterBtn.addEventListener("click", function () {
  contentCalculator.style.display = "none";
  content.textContent = "";
  headerCalculator.style.display = "none";

  const name = document.createElement("h1");
  name.textContent = "Converter ";
  headerConverter.appendChild(name);

  const icon = document.createElement("i");
  icon.setAttribute("class", "far fa-analytics");
  name.appendChild(icon);

  // the first coin
  const div1 = document.createElement("div");
  div1.setAttribute("class", "select");
  content.appendChild(div1);

  const coin1 = document.createElement("select");
  coin1.setAttribute("class", "coin1");
  //   coin1.setAttribute("onchange", "arr()");

  div1.appendChild(coin1);

  const option1 = document.createElement("option");
  coin1.appendChild(option1);
  option1.textContent = "Shekels";

  const option2 = document.createElement("option");
  coin1.appendChild(option2);
  option2.textContent = " Dollars";

  const option3 = document.createElement("option");
  coin1.appendChild(option3);
  option3.textContent = " Euros";

  const switch1 = document.createElement("i");
  switch1.setAttribute("class", "fas fa-random");
  div1.appendChild(switch1);

  const coin2 = document.createElement("select");
  coin2.setAttribute("class", "coin2");
  //   coin2.setAttribute("onchange", "arr()");
  div1.appendChild(coin2);

  const option4 = document.createElement("option");
  coin2.appendChild(option4);
  option4.textContent = "Dollars";

  const option5 = document.createElement("option");
  coin2.appendChild(option5);
  option5.textContent = "Shekels";

  const option6 = document.createElement("option");
  coin2.appendChild(option6);
  option6.textContent = " Euros";

  //dives contain input convertet
  const div2 = document.createElement("div");
  div2.setAttribute("class", "convert");
  content.appendChild(div2);

  const input1 = document.createElement("input");
  input1.setAttribute("class", "convertInput");
  div2.appendChild(input1);

  const input2 = document.createElement("input");
  input2.setAttribute("class", "convertInput");
  div2.appendChild(input2);

  // coin1.onchange=function arr() {

  //the convert currency
  input1.oninput = function (e) {
    //convert from shekels to dollars and Euros
    if (coin1.value === "Shekels" && input1.value !== "") {
  
      switch (coin2.value) {
        case "Dollars":
          input2.value = (input1.value / 3.24).toFixed(3) + "  USD";
          break;

        case "Euros":
          input2.value = (input1.value / 3.79).toFixed(3) + "  EUR";
          break;

        case "Shekels":
          input2.value = input1.value * 1 + "  NIS";
          break;
      }
    }
    //convert from dollars to shekels and euros
    if (coin1.value === "Dollars" && input1.value !== "") {
 
      switch (coin2.value) {
        case "Dollars":
          input2.value = input1.value * 1 + "  USD";
          break;
        case "Euros":
          input2.value = (input1.value * 1.17).toFixed(3) + "  EUR";
          break;

        case "Shekels":
          input2.value = (input1.value * 3.24).toFixed(3) + "  NIS";
          break;
      }
    }
    //convert from euros to shekels and Dollars
    if (coin1.value === "Euros" && input1.value !== "") {
      
      switch (coin2.value) {
        case "Dollars":
          input2.value = (input1.value / 1.17).toFixed(3) + "  USD";
          break;
        case "Euros":
          input2.value = input1.value * 1 + "  EUR";
          break;

        case "Shekels":
          input2.value = (input1.value * 3.79).toFixed(3) + "  NIS";
          break;
      }
    }
  };

  switch1.addEventListener("click", function () {
    const switch2 = coin1.value;
    coin1.value = coin2.value;
    coin2.value = switch2;

    //convert from shekels to euros  and Dollars
    if (coin1.value === "Shekels" && input1.value !== "") {
      
      switch (coin2.value) {
        case "Dollars":
          input2.value = (input1.value / 3.24).toFixed(3) + "  USD";
          break;
        case "Euros":
          input2.value = (input1.value / 3.79).toFixed(3) + "  EUR";
          break;

        case "Shekels":
          input2.value = input1.value * 1 + "  NIS";
          break;
      }
    }

    //convert from dollars to shekels and euros
    if (coin1.value === "Dollars" && input1.value !== "") {
     
      switch (coin2.value) {
        case "Dollars":
          input2.value = input1.value * 1;
          break;

        case "Euros":
          input2.value = (input1.value * 1.17).toFixed(3) + "  EUR";
          break;

        case "Shekels":
          input2.value = (input1.value * 3.24).toFixed(3) + "  NIS";
          break;
      }
    }

    //convert from euros to shekels and Dollars
    if (coin1.value === "Euros" && input1.value !== "") {
  
      switch (coin2.value) {
        case "Dollars":
          input2.value = input1.value / (1.17).toFixed(3);
          break;
        case "Euros":
          input2.value = input1.value * 1 + "  EUR";
          break;

        case "Shekels":
          input2.value = (input1.value * 3.79).toFixed(3) + "  NIS";
          break;
      }
    }
  });
});
