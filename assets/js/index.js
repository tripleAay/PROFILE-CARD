function updateTime() {
    document.getElementById('utcTime').innerText = new Date().toISOString();
}
updateTime();
setInterval(updateTime, 1000);



const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
