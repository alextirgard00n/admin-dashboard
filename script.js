const krabbyPatty = document.querySelector('.krabby-patty');
const sidebar = document.querySelector('.sidebar');
const closebtn = document.querySelector('.close');
const listItems = document.querySelectorAll('li');

krabbyPatty.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

closebtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

listItems.forEach(li => li.addEventListener('click', () => {
    sidebar.classList.remove('active');
}));

document.body.addEventListener("click", () => {
    if (sidebar.classList.contains("active")) {
        // sidebar.classList.remove("active");
        console.log("help");
    }
});



