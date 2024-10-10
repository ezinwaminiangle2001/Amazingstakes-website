// document.addEventListener('DOMContentLoaded', function () {
//     const navLinks = document.querySelectorAll('.navbar-nav li a');

//     navLinks.forEach(link => {
//         link.addEventListener('click', function () {
//             // Remove 'active' class from all <li> elements
//             document.querySelectorAll('.navbar-nav li').forEach(li => {
//                 li.classList.remove('active');
//             });

//             // Add 'active' class to the clicked <li> element
//             this.parentElement.classList.add('active');
//         });
//     });
// });

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


// Countdown Timer Logic
const countDownDate = new Date("Oct 04, 2024 19:46:00").getTime();
const timerElement = document.getElementById("timerdemo");
const comingSoonElement = document.getElementById("comingSoon");
const headElement = document.getElementById("head");
const totalOddsSection = document.getElementById("totalOddsSection");
const getAccessBtn = document.getElementById("getAccessBtn");

const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

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

// all matchless
function filterMatches() {
    const leagueSelect = document.getElementById("leagueSelect").value;
    const dateInput = document.getElementById("dateInput").value; // Get selected date
    const matchesTable = document.getElementById("matchesTable");
    const rows = matchesTable.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) { // Start at 1 to skip header
        const league = rows[i].getAttribute("data-league");
        const date = rows[i].getAttribute("data-date");
        const showLeague = leagueSelect === "all" || league === leagueSelect;
        const showDate = dateInput === "" || date === dateInput; // Check if date is empty or matches

        rows[i].style.display = showLeague && showDate ? "" : "none"; // Show or hide row
    }
}


window.onload = function () {
    // Update scores based on today's date
    const today = new Date().toISOString().split('T')[0];
    const rows = document.querySelectorAll("#matchesTable tbody tr");

    rows.forEach(row => {
        const matchDate = row.getAttribute('data-date');
        const scoreCell = row.querySelector("td:nth-child(3)");

        if (matchDate === today) {
            // scoreCell.innerHTML = "<strong style='font-size: 16px;'>2 : 0</strong>";
        } else {
            scoreCell.innerHTML = "<strong style='font-size: 16px;'>-- : --</strong>";
        }
    });

    // Initialize pagination
    displayMatches();
}

let currentPage = 1;
const matchesPerPage = 10;

function displayMatches() {
    const rows = document.querySelectorAll("#matchesTable tbody tr");
    const totalPages = Math.ceil(rows.length / matchesPerPage);

    // Hide all rows
    rows.forEach(row => {
        row.style.display = "none";
    });

    // Calculate start and end indices for the current page
    const start = (currentPage - 1) * matchesPerPage;
    const end = start + matchesPerPage;

    // Show only the rows for the current page
    for (let i = start; i < end && i < rows.length; i++) {
        rows[i].style.display = "table-row";
    }

    // Update pagination controls
    updatePaginationControls(totalPages);
}

function updatePaginationControls(totalPages) {
    const pagination = document.querySelector(".pagination");
    pagination.innerHTML = '';

    // Previous button
    const prevItem = document.createElement("li");
    prevItem.className = "page-item" + (currentPage === 1 ? " disabled" : "");
    prevItem.innerHTML = `<a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Previous</a>`;
    pagination.appendChild(prevItem);

    // Page number buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement("li");
        pageItem.className = "page-item" + (currentPage === i ? " active" : "");
        pageItem.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i})">${i}</a>`;
        pagination.appendChild(pageItem);
    }

    // Next button
    const nextItem = document.createElement("li");
    nextItem.className = "page-item" + (currentPage === totalPages ? " disabled" : "");
    nextItem.innerHTML = `<a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Next</a>`;
    pagination.appendChild(nextItem);
}

function changePage(page) {
    currentPage = page;
    displayMatches();
}



// free prediction


