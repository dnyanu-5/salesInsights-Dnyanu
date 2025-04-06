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


//qr pop up

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




//remove this code if any issue persits


// Show login popup when "Get Started" is clicked
document.getElementById("cta-button").addEventListener("click", function () {
    document.getElementById("login-popup").style.display = "block";
});

// Close login popup
document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("login-popup").style.display = "none";
});

// When user clicks 'Login'
document.getElementById("login-button").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email && password) {
        // Option 1: Scroll to embedded dashboard
        // document.querySelector(".dashboard").scrollIntoView({ behavior: "smooth" });

        // Option 2: Redirect to Power BI page
        window.location.href = "https://app.powerbi.com/reportEmbed?reportId=7af160f9-0781-42ac-828a-30cd666acde2&autoAuth=true&ctid=053cbcff-aa58-4d20-87a3-575d830ae75b";
    } else {
        alert("Please enter both email and password.");
    }
});





document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    loginBtn.addEventListener("click", function () {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Replace these with your actual credentials
        const correctEmail = "2022ce59f@sigce.edu.in";
        const correctPassword = "5August _04";

        if (email === correctEmail && password === correctPassword) {
            window.location.href = "https://app.powerbi.com/reportEmbed?reportId=7af160f9-0781-42ac-828a-30cd666acde2&autoAuth=true&ctid=053cbcff-aa58-4d20-87a3-575d830ae75b";
        } else {
            alert("Incorrect email or password. Try again.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.getElementById("cta-button");
    const loginPopup = document.getElementById("login-popup");
    const closePopup = document.getElementById("close-popup");
    const loginBtn = document.getElementById("login-btn");
  
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
  
    const allowedEmail = "2022ce59f@sigce.edu.in";
    const allowedPassword = "5August _04";
  
    // Show login popup
    ctaButton.addEventListener("click", () => {
      loginPopup.style.display = "block";
    });
  
    // Close login popup
    closePopup.addEventListener("click", () => {
      loginPopup.style.display = "none";
    });
  
    // Login validation
    loginBtn.addEventListener("click", () => {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (email === allowedEmail && password === allowedPassword) {
        // Redirect to Power BI dashboard
        window.location.href = "https://app.powerbi.com/reportEmbed?reportId=7af160f9-0781-42ac-828a-30cd666acde2&autoAuth=true&ctid=053cbcff-aa58-4d20-87a3-575d830ae75b";
      } else {
        alert("Invalid email or password!");
      }
    });
  });
  






