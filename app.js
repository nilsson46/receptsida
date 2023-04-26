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



function checkbox() {
    const checkboxes = document.querySelectorAll(".checkbox");
    const steps = document.querySelectorAll(".steps");

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

    const li = document.createElement("li");
    li.className = "comment"
    const text = document.createTextNode(commentValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
    document.getElementById("comment").value ="";
});

const stars = document.querySelectorAll(".rating__star");
    stars.forEach(function(star) {
        star.addEventListener("click", function() {
            const starValue = this.getAttribute("value");
            starValue.className ="starValue"
            console.log(starValue);
            const commentField = document.getElementById("comment");
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




