const krabbyPatty = document.querySelector('.krabby-patty');
const sidebar = document.querySelector('.sidebar');
const closebtn = document.querySelector('.xbtn');
const listItems = document.querySelectorAll('li');

// toggles function on click
krabbyPatty.addEventListener('click', togglebtn);
closebtn.addEventListener('click', togglebtn);

listItems.forEach(li => li.addEventListener('click', togglebtn));

function togglebtn() {
    sidebar.classList.toggle('active');
    closebtn.classList.toggle('close');
}




