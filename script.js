document.getElementById("reservation-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    if (name && date && time && guests) {
        document.getElementById("success-message").classList.remove("hidden");
        document.getElementById("reservation-form").reset();
    }
});
