const input = document.getElementById("input");
const result = document.getElementById("result");

function calculate() {
  try {
    result.textContent = eval(input.value);
  } catch (error) {
    result.textContent = "Error";
  }

  if (input.value === "") {
    result.textContent = "Result";
  } else if (input.value === "null") {
    result.textContent = "Error";
  } else if (input.value === "NaN") {
    result.textContent = "Error";
  }
}

input.addEventListener("input", calculate);
