document.addEventListener("DOMContentLoaded", function () {
    // Sales Data
    let totalSales = 1543;
    let totalRevenue = 98230;
    let totalCustomers = 785;

    // Animate numbers
    animateValue("total-sales", 0, totalSales, 3000);
    animateValue("total-revenue", 0, totalRevenue, 3000);
    animateValue("total-customers", 0, totalCustomers, 3000);


});

// Number animation function
function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = range / (duration / 20);
    let timer = setInterval(function () {
        current += increment;
        obj.textContent = Math.floor(current);
        if (current >= end) {
            obj.textContent = end;
            clearInterval(timer);
        }
    }, 20);
} 

document.addEventListener("DOMContentLoaded", function () {
    const loginPopup = document.getElementById("login-popup");
    const ctaButton = document.getElementById("cta-button");
    const closePopup = document.getElementById("close-popup");

    ctaButton.addEventListener("click", function () {
        loginPopup.style.display = "block";
        document.body.classList.add("popup-active");
    });

    closePopup.addEventListener("click", function () {
        loginPopup.style.display = "none";
        document.body.classList.remove("popup-active");
    });
});




