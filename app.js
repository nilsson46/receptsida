const portionsInput = document.querySelector(".portions");
const ingredientSizes = document.querySelectorAll(".ingredients-size");
const amountSpans = document.querySelectorAll(".amount");

function updateIngredientAmounts() {
  const portions = portionsInput.value;
  ingredientSizes.forEach((sizeInput, index) => {
    const originalValue = sizeInput.getAttribute("value");
    const newValue = originalValue * portions;
    amountSpans[index].textContent = `${newValue}`;
  });
}

updateIngredientAmounts();

portionsInput.addEventListener("change", updateIngredientAmounts);