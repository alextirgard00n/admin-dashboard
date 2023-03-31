const krabbyPatty = document.querySelector('.krabby-patty');
const sidebar = document.querySelector('.sidebar');

krabbyPatty.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

