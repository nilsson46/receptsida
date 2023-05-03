const commentField = document.getElementById("comment");
const checkboxes = document.querySelectorAll(".checkbox");
const steps = document.querySelectorAll(".steps");

const ingredientElements = [];

const comment = {
    field: document.querySelector('#comment'),
    list: document.querySelector('#unordered'),
    create: (content) => {
        const li = document.createElement('li');
        li.className = 'comment';
        li.textContent = content;
        comment.list.append(li);
    }
}

class IngredientElement {
    constructor(el) {
        this.amountField = el.querySelector('.ingredient-size');
        this.portionSpan = el.querySelector('.amount');
    }

    updateAmount(newPortions) {
        this.portionSpan.textContent = this.amountField.value * newPortions;
    }
}

const handleNewPortions = event => {
    const newPortion = event.target.value;
    ingredientElements.forEach(el => el.updateAmount(newPortion));
};

const handleStepCheckboxChange = (checkbox, stepItem) => {
    if (checkbox.checked) {
        stepItem.style.color = "grey";
    } else {
        stepItem.style.color = "initial";
    }
}

const handleNewComment = () => {
    const content = comment.field.value;
    if(content == '') return false; // guardian clause (returnerar false)
    
    comment.create(content);
    comment.field.value = '';

    let totalRatingDiv = document.querySelector(".total-rating");
    const averageRating = totalStarValue / totalStarsClicked;
    totalRatingDiv.textContent = "Snittbetyg: " + averageRating.toFixed(1);
}

const attachCheckboxListener = (stepItem) => {
    const checkbox = stepItem.querySelector('.checkbox');
    checkbox.addEventListener('change', () => handleStepCheckboxChange(checkbox, stepItem));
}


document
    .querySelectorAll('.ingredient')
    .forEach(el => ingredientElements.push(new IngredientElement(el)));

document
    .querySelector('.portions')
    .addEventListener('change', handleNewPortions);

document
    .querySelectorAll('.steps')
    .forEach(stepItem => attachCheckboxListener(stepItem));

document
    .querySelector('#post')
    .addEventListener('click', handleNewComment);





let starValue = null;

const stars = document.querySelectorAll(".rating__star");
let totalStarsClicked = 0;
let totalStarValue = 0;
const previousStar = null;
/*BUG you can press a star many times and its count in the*/
    stars.forEach(function(star) {
        star.addEventListener("click", function() {
            const starValue = this.getAttribute("value");
            totalStarValue += parseInt(starValue);
            totalStarsClicked++;
            console.log(starValue);
            if(commentField.value === ""){
                commentField.value = "Betyg: " + starValue + "/5";
            } else{
                commentField.value += " Betyg: " + starValue + "/5";
            }
        });
    });

function timer(){
    setTimeout(setAlert, 1000);
}
function setAlert(){
    const audio = new Audio("/sound/i-want-pizza-47519.mp3")
    audio.play();
} 

function clearComment(){
    const resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", function(){
        commentField.value ="";
    })
}

clearComment();




