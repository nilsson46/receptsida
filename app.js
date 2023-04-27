const portionsInput = document.querySelector(".portions");
const ingredientSizes = document.querySelectorAll(".ingredients-size");
const amountSpans = document.querySelectorAll(".amount");
const commentField = document.getElementById("comment");
const checkboxes = document.querySelectorAll(".checkbox");
    const steps = document.querySelectorAll(".steps");

function updateIngredientAmounts() {
  const portions = portionsInput.value;
  let originalValue, newValue = undefined;
  
  ingredientSizes.forEach((sizeInput, index) => {
    originalValue = sizeInput.getAttribute("value");
    const newValue = originalValue * portions;
    amountSpans[index].textContent = `${newValue}`;
  });
}

updateIngredientAmounts();

portionsInput.addEventListener("change", updateIngredientAmounts);



function checkbox() {
    checkboxes.forEach(function(checkbox, index) {
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                steps[index].style.color = "grey";
            } else {
                steps[index].style.color = "initial";
            }
        });
    });
}

checkbox();

const post = document.getElementById("post");
post.addEventListener("click", function(){
    const commentValue = document.getElementById("comment").value;
    if(commentValue == ""){
        return;
    }
    const li = document.createElement("li");
    li.className = "comment"
    const text = document.createTextNode(commentValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
    document.getElementById("comment").value ="";
    let totalRatingDiv = document.querySelector(".total-rating");
    const averageRating = totalStarValue / totalStarsClicked;
    totalRatingDiv.textContent = "Snittbetyg: " + averageRating.toFixed(1);
});

let starValue = null;

const stars = document.querySelectorAll(".rating__star");
let totalStarsClicked = 0;
let totalStarValue = 0;
const previousStar = null;
/*TODO you can press a star many times and its count in the*/
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




