const display = document.getElementById("display");
const inputForm = document.getElementById("inputForm");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiple = document.getElementById("multiple");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");

let enzan = "=";
let result = 0;

function calc() {
  if (enzan === "=") {
    result = Number(inputForm.value);
  } else if (enzan === "+") {
    result += Number(inputForm.value);
  } else if (enzan === "-") {
    result -= Number(inputForm.value);
  } else if (enzan === "*") {
    result *= Number(inputForm.value);
  } else if (enzan === "/") {
    result /= Number(inputForm.value);
  }

  display.textContent = result;
  inputForm.value = "";
}

plus.onclick = function() {
  calc();
  enzan = "+";
};

minus.onclick = function() {
  calc();
  enzan = "-";
};

multiple.onclick = function() {
  calc();
  enzan = "*";
};

divide.onclick = function() {
  calc();
  enzan = "/";
};

equal.onclick = function() {
  calc();
  enzan = "=";
};
