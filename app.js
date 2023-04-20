document.addEventListener("DOMContentLoaded", function() {
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