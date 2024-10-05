document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove 'active' class from all <li> elements
            document.querySelectorAll('.navbar-nav li').forEach(li => {
                li.classList.remove('active');
            });

            // Add 'active' class to the clicked <li> element
            this.parentElement.classList.add('active');
        });
    });
});  

document.querySelector('.navbar-toggler').addEventListener('click', function () {
    let icon = document.getElementById('navbar-toggler-icon');
    if (icon.classList.contains('navbar-toggler-icon')) {
        icon.classList.remove('navbar-toggler-icon');
        icon.innerHTML = '<i class="fa fa-times"></i>'; // Font Awesome close icon
    } else {
        icon.classList.add('navbar-toggler-icon');
        icon.innerHTML = ''; // Revert to hamburger icon
    }
});



// var countDownDate = new Date("Oct 04, 2024 19:46:00").getTime();
// var x = setInterval(function () {
//     var now = new Date().getTime();
//     var distance = countDownDate - now;
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     document.getElementById("timerdemo").innerHTML = hours + "h: " + minutes + "m: " + seconds + "s ";
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("timerdemo").innerHTML = "EXPIRED";
//     }
// }, 1000);


// Countdown Timer Logic
var countDownDate = new Date("Oct 04, 2024 19:46:00").getTime();
var timerElement = document.getElementById("timerdemo");
var comingSoonElement = document.getElementById("comingSoon");
var headElement = document.getElementById("head");
var totalOddsSection = document.getElementById("totalOddsSection");
var getAccessBtn = document.getElementById("getAccessBtn");

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = hours + "h: " + minutes + "m: " + seconds + "s ";

    // If the countdown is finished, show "Today's Tip is coming soon" and hide total odds + access button
    if (distance < 0) {
        clearInterval(x);
        timerElement.style.display = "none";  // Hide the timer
        headElement.style.display = "none";   // Hide the "Investment Tip Starts"
        comingSoonElement.classList.remove("d-none");  // Show "Today's Tip is coming soon"
        totalOddsSection.style.display = "none"; // Hide total odds
        getAccessBtn.style.display = "none";     // Hide get access button
    }
}, 1000);