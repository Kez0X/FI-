document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});


// Menu Burger
const mobileMenu = document.getElementById("mobile-menu");
const menu = document.getElementById("menu");

mobileMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});
