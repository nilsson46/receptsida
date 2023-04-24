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

/*TODO set a timer with a fun sound! */ 

const post = document.getElementById("post");
post.addEventListener("click", function(){
    const commentValue = document.getElementById("comment").value;

    const li = document.createElement("li");
    li.className = "comment"
    const text = document.createTextNode(commentValue);
    li.appendChild(text);
    const hr = document.createElement("hr");
    li.appendChild(hr);
    document.getElementById("unordered").appendChild(li);
});

const stars = document.querySelectorAll(".rating__star");
    stars.forEach(function(star) {
        star.addEventListener("click", function() {
            const starValue = this.getAttribute("value");
            console.log(starValue);
        });
    });




