let userInput;
let date;
let years;
let months;
let days;



userInput = document.getElementById("date").value;
userlnput.max = new Date();
date = new Date(userInput);


function calculate() {
    let userInput = document.getElementById("date").value;
    let date = new Date(userInput);  // Get the latest selected date
    let today = new Date();  // Get today's date

    let years = today.getFullYear() - date.getFullYear();
    let months = today.getMonth() - date.getMonth();
    let days = today.getDate() - date.getDate();

    if (days < 0) {
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    document.querySelector(".dispage span:nth-child(1)").innerText = years;
    document.querySelector(".dispage span:nth-child(2)").innerText = months;
    document.querySelector(".dispage span:nth-child(3)").innerText = days;
}
