let num1 = 3
let num2 = 10
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let calBtn = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add(){
    calBtn.textContent = "Sum : " + (num1+num2)
}
function subtract(){
    if(num1>num2){
        calBtn.textContent = "Subtract : " + (num1-num2)
    }
    calBtn.textContent = "Subtract : " + (num2-num1)
    
}
function divide(){
    if(num1>num2){
        calBtn.textContent = "Divide : " + (num1/num2)
    }
    calBtn.textContent = "Divide : " + (num2/num1)
}

function multiply(){
    
    calBtn.textContent = "Multiply : " + (num1*num2)
}

