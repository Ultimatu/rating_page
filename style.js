const mainContainer = document.querySelector(".first-section")
const thanksContainer = document.querySelector(".second-section")
const submitButton = document.getElementById("submit-rating")
const rateAgain = document.getElementById("rate-again")
const actualRating = document.getElementById("rating")
const ratings = document.querySelectorAll(".btn")
const maxRate = document.getElementById("btn-test")



submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none"
    thanksContainer.classList.remove("hidden")

    ratings.forEach((rating) => {
        
        rating.addEventListener("click", () => {
            actualRating.innerHTML = rating.innerHTML
        })
    })
   
})

rateAgain.addEventListener("click", ()=> {
    mainContainer.style.display = "block"
    thanksContainer.classList.add("hidden")
})

