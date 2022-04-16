
const rateState = () => {
    let notRated = document.getElementById('rateStartState');
    let rated = document.getElementById('thankYouSection');
    if (rated.style.display !== "none") {
        rated.style.display = "block"; 
        notRated.style.display ="none";
    } else {
        rated.style.display = "none";
    }
};

const
    display = document.querySelector(".text"),
    buttons = document.querySelectorAll(".numberbutton");

buttons.forEach(button => button.addEventListener("click", function() {
    display.value = button.value;
    display.innerHTML = `You selected ${display.value} out of 5`;
}));
