// document.querySelector('.tr-menu').addEventListener('click', function (e) {
//     e.preventDefault();
//     var catMenu = document.querySelector('.cat-menu');
//     if (catMenu.style.display === 'none' || catMenu.style.display === '') {
//         catMenu.style.display = 'block';
//     } else {
//         catMenu.style.display = 'none';
//     }
// });


document.querySelector('.navbar-toggler').addEventListener('click', function() {
    let icon = document.getElementById('navbar-toggler-icon');
    if (icon.classList.contains('navbar-toggler-icon')) {
        icon.classList.remove('navbar-toggler-icon');
        icon.innerHTML = '<i class="fa fa-times"></i>'; // Font Awesome close icon
    } else {
        icon.classList.add('navbar-toggler-icon');
        icon.innerHTML = ''; // Revert to hamburger icon
    }
});
