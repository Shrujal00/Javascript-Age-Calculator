document.addEventListener("DOMContentLoaded", function () {
    let dateInput = document.getElementById("date");

    // Set max date to today so users cannot enter future dates
    let today = new Date();
    let maxDate = today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    dateInput.setAttribute("max", maxDate);
});

function calculate() {
    let userInput = document.getElementById("date").value;
    
    if (!userInput) {
        alert("Please select a date!");
        return;
    }

    let date = new Date(userInput);  
    let today = new Date();  

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

    let spans = document.querySelectorAll(".dispage .colored");
    spans[0].innerText = years;   // Years
    spans[1].innerText = months;  // Months
    spans[2].innerText = days;    // Days
}
