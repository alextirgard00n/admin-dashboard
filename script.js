const krabbyPatty = document.querySelector('.krabby-patty');
const sidebar = document.querySelector('.sidebar');
const closebtn = document.querySelector('.xbtn');
const listItems = document.querySelectorAll('li');
const main = document.querySelector('main');

//removes sidebar on mobile clicking anywhere on main
main.addEventListener('click', mainToggle);

// toggles sidebar on click
krabbyPatty.addEventListener('click', togglebtn);
closebtn.addEventListener('click', togglebtn);

//closes sidebar if clicking any sidebar link
listItems.forEach(li => li.addEventListener('click', togglebtn));

function togglebtn() {
    sidebar.classList.toggle('active');
    closebtn.classList.toggle('close');
}

function mainToggle() {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active')
        closebtn.classList.remove('close')
    }
}




