const portionSize = document.querySelector(".portions");
console.log(portionSize.value);

const ingredientsSize = document.querySelector(".ingredients-size");
console.log(ingredientsSize.value); 
const amountEl = document.querySelector("#amount");

function calculateAmount(){
    totalIngredients = portionSize.value*ingredientsSize.value;
    return totalIngredients
}

function updateAmount() {
    const amount = calculateAmount();
    amountEl.textContent = amount;
  }
  

updateAmount();
  
portionSize.addEventListener("input", updateAmount);
