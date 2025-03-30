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
    console.log("Looking for ID:", id); // Debugging
    let obj = document.getElementById(id);
    console.log("Found element:", obj); // Debugging
    
    if (!obj) {
        console.error("Error: Element with ID", id, "not found!");
        return;  // Stop execution if null
    }

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

document.addEventListener("DOMContentLoaded", function () {
    const qrButton = document.getElementById("qr-button");  // Get the QR button
    const qrPopup = document.getElementById("qr-popup");  // Get the popup
    const closeQrPopup = document.getElementById("close-qr-popup");  // Close button

    // Show QR popup when QR button is clicked
    qrButton.addEventListener("click", function () {
        qrPopup.style.display = "block"; 
    });

    // Hide QR popup when Close button is clicked
    closeQrPopup.addEventListener("click", function () {
        qrPopup.style.display = "none"; 
    });

    // Hide QR popup when clicking outside the QR image
    window.addEventListener("click", function (event) {
        if (event.target === qrPopup) {
            qrPopup.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const closeQrPopup = document.getElementById("close-qr-popup");

    if (!closeQrPopup) {
        console.error("❌ Close button not found! Check your HTML.");
    } else {
        console.log("✅ Close button found!");
    }
});

closeQrPopup.addEventListener("click", function () {
    console.log("✅ Close button clicked!");
});

document.getElementById("qr-popup").style.display = "none";

document.addEventListener("DOMContentLoaded", function () {
    // Run after page is fully loaded
    animateValue("total-sales", 0, 1543, 3000);
    animateValue("total-revenue", 0, 98230, 3000);
    animateValue("total-customers", 0, 785, 3000);

    const closeQrPopup = document.getElementById("close-qr-popup");
    
    if (!closeQrPopup) {
        console.error("❌ Close button not found! Check your HTML.");
    } else {
        closeQrPopup.addEventListener("click", function () {
            document.getElementById("qr-popup").style.display = "none";
        });
    }
});






