const searchInput = document.querySelector('.search-bar input');
const navLinks = document.querySelectorAll('.nav-bar a');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    navLinks.forEach(link => {
        if (link.textContent.toLowerCase().includes(query)) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });
});
let cartCount = 0;

document.querySelector('.cart-icon').addEventListener('click', () => {
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
});
document.querySelectorAll('.dropdown-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const menu = link.nextElementSibling;
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
});

