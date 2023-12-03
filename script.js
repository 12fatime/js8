const one=document.querySelector(".one");
const button=document.querySelector(".button");
const input = document.querySelectorAll("input[name='feedback']");
const emojione = document.querySelector(".selectedEmoji");
let span = document.querySelector("span");
btn.addEventListener('click', () => {
    input.forEach(input => {
        if (input.checked) {
            span.innerHTML = input.value
        
            if (input.id === "unhappy") {
                one.style.backgroundColor = "red";
            }
            if (input.id === "neutral") {
                one.style.backgroundColor = "blue";
            }
            if (input.id === "satisfied") {
                one.style.backgroundColor = "green";
            }
        }else{
            input.parentNode.style.display = 'none';
        }
    })
    button.innerText="Thanks for Feedback "
})