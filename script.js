let string = ""
let buttons = document.querySelectorAll(".circle")
let clearButton = document.getElementsByClassName('clear')[0]
let cutButton = document.getElementsByClassName('cut')[0]

function updateButtonStates() {
    if (string === "") {
        clearButton.classList.add('cursor-not-allowed');
        cutButton.classList.add('cursor-not-allowed');
        clearButton.classList.remove('bg-[#A5A5A5]');
        clearButton.classList.add('bg-[#726d6d]');
        cutButton.classList.remove('bg-[#FF9F0A]');
        cutButton.classList.add('bg-[#9e702a]');
    } else {
        clearButton.classList.remove('cursor-not-allowed');
        cutButton.classList.remove('cursor-not-allowed');
        clearButton.classList.remove('bg-[#726d6d]');
        clearButton.classList.add('bg-[#A5A5A5]');
        cutButton.classList.remove('bg-[#9e702a]');
        cutButton.classList.add('bg-[#FF9F0A]');
    }
}

// Initialize button states
updateButtonStates();




Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string)
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML == "C") {
            string = ""
            document.querySelector('input').value = string
        } else if (e.target.innerHTML == "✕") {
            string = string.slice(0, -1);
            document.querySelector('input').value = string
        }
        else {
            // console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string
        }
        updateButtonStates();

    })
})

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var operators = ["*", "/", "%", "-", "+", "(", ")"]

document.addEventListener('keyup', (event) => {
    if (event.key in nums || operators.includes(event.key)) {
        console.log(event.key);
        string += event.key; // Append the pressed key to the string
        document.querySelector('input').value = string; // Update the input value
    } else if (event.key == "=") {
        string = eval(string)
        document.querySelector('input').value = string
    } else if (event.key == "Enter") {
        string = eval(string)
        document.querySelector('input').value = string
    } else if (event.code == "Backspace") {
        console.log(event.code)
        string = string.slice(0, -1);
        document.querySelector('input').value = string
    } else if (event.code == "Delete") {
        string = ""
        document.querySelector('input').value = string
    }
    updateButtonStates();
})