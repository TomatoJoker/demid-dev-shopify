const stickyCart = document.getElementById('sticky-cart');

document.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        stickyCart.classList.add('show');
    } else {
        stickyCart.classList.remove('show');
    }
});