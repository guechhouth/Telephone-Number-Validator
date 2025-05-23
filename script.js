const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

const check = () => {
  const input = userInput.value.trim();
  if (input === ""){
    alert("Please provide a phone number");
  } else if (phoneRegex.test(input)){
      document.getElementById("results-div").textContent = `Valid US number: ${input}`;
  } else {
    document.getElementById("results-div").textContent = `Invalid US number: ${input}`;
  }
}

const clear = () => {
  userInput.value = "";
  document.getElementById("results-div").textContent = "";

}

checkBtn.addEventListener("click", check);
clearBtn.addEventListener("click", clear);
