let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

const updateCarousel = () => {
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
};

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
};

// 自动轮播间隔，例如 5000 毫秒（5秒）
setInterval(nextSlide, 5000);
