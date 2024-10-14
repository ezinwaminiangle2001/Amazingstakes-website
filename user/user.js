document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('.fa-bars');
    const wrapper = document.getElementById('wrappers'); 

    toggleButton.addEventListener('click', function () {
      wrapper.classList.toggle('sidebar-hidden'); 
    });
  });

  const toggleButton = document.querySelector('.fa-bars');
  const appMenu = document.querySelector('.app-menu'); 
const wrapper = document.getElementById('wrappers');

toggleButton.addEventListener('click', () => {
    wrapper.classList.toggle('sidebar-expanded');
});


window.addEventListener('click', (e) => {
  if (!appMenu.contains(e.target) && !toggleButton.contains(e.target)) {
      // Check if the sidebar is currently visible
      if (wrapper.classList.contains('sidebar-expanded')) {
          wrapper.classList.remove('sidebar-expanded'); // Hide the sidebar
      }
  }
});


// document.addEventListener("DOMContentLoaded", function() {

//   const isLoggedIn = checkLoginStatus();

//   const loginBtn = document.getElementById('login-btn');
//   const registerBtn = document.getElementById('register-btn');
//   const accountBtn = document.getElementById('account-btn');

//   if (isLoggedIn) {
//       loginBtn.style.display = 'none';
//       registerBtn.style.display = 'none';
//       accountBtn.style.display = 'block';
//   } else {
//       loginBtn.style.display = 'block';
//       registerBtn.style.display = 'block';
//       accountBtn.style.display = 'none';
//   }
// });


// function checkLoginStatus() {
//   return !!localStorage.getItem('/user/premium-tips.html'); 
// }


document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logout-btn");

  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
      // Show logout button if logged in
      logoutBtn.style.display = "block";

      // Handle logout
      logoutBtn.addEventListener("click", function (event) {
          event.preventDefault(); 

          // Clear login state
          localStorage.removeItem("isLoggedIn");

         
          window.location.href = "../login.html";
      });
  } else {
      logoutBtn.style.display = "none";
  }
});