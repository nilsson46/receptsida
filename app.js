/*document.addEventListener("DOMContentLoaded", function() {
    const portionSizeInput = document.querySelector(".portion-size:not(.result)");
    const numberOfPortionsInput = document.querySelector(".portions");
    const resultElement = document.querySelector(".result");
    const portionSizeDisplay = document.querySelector(".portion-size-display");

    function calculateAmount() {
        const sizeOfProduct = parseInt(portionSizeInput.value);
        const amountOfPortions = parseInt(numberOfPortionsInput.value);
        console.log('sizeOfProduct:', sizeOfProduct);
        console.log('amountOfPortions:', amountOfPortions);
        const result = sizeOfProduct * amountOfPortions;
        resultElement.textContent = result;
        portionSizeDisplay.textContent = sizeOfProduct;
    }

    portionSizeInput.addEventListener("input", calculateAmount);
    numberOfPortionsInput.addEventListener("input", calculateAmount);
}); 
*/
const portionSize = document.querySelector(".portions");
console.log(portionSize.value);

const ingredientsSize = document.querySelector(".ingredients-size");
console.log(ingredientsSize.value); 

function calculateAmount(){
    totalIngredients = portionSize.value*ingredientsSize.value;
    return totalIngredients
}

function updateAmount() {
    const amount = calculateAmount();
    console.log(amount);
    // Update the UI to show the new amount, e.g.:
    // document.querySelector(".amount").textContent = amount;
}

portionSize.addEventListener("change", updateAmount);