let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
const totalItems = items.length;

const updateCarousel = () => {
    items.forEach((item, index) => {
        item.classList.remove('active');
    });
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
    });
    items[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');
};

const setCurrentSlide = (index) => {
    currentIndex = index;
    updateCarousel();
};

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
};

const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
};

// 初始化轮播图
document.addEventListener('DOMContentLoaded', () => {
    updateCarousel();
    setInterval(nextSlide, 5000); // 自动轮播间隔
});

