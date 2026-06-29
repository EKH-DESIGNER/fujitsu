let header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
});
