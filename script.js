const images = document.querySelectorAll('.gallery-container img');
const lightbox = document.getElementById('lightbox');
const fullImg = document.getElementById('full-img');
const closeBtn = document.querySelector('.close');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        fullImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

function filterSelection(c) {
    const items = document.querySelectorAll(".gallery-container img");
    
    if (c === "all") c = "";
    
    items.forEach(item => {
        item.style.display = "none";
        if (item.classList.contains(c) || c === "") {
            item.style.display = "block";
        }
    });

    const buttons = document.querySelectorAll(".filters button");
    buttons.forEach(btn => btn.classList.remove("active"));
    
    const clickedButton = window.event.target;
    if (clickedButton && clickedButton.tagName === "BUTTON") {
        clickedButton.classList.add("active");
    }
}