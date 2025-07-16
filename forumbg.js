// 3. 滾動監聽：超過 800px 顯示按鈕，否則隱藏
window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    if (window.scrollY > 800) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

// 點擊平滑捲回頁首
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('title')
    .addEventListener('click', () => {
        window.open('http://127.0.0.1:5502/PJ.HTML', '_blank');
        // 若要開新分頁改成 window.open(...)
    });

document.querySelectorAll('.bg-carousel').forEach(carousel => {
    const slides = carousel.querySelectorAll('.slide');
    let idx = 0;

    // 初始化第一張
    slides[idx].classList.add('active');

    // 每 3 秒切換一次
    setInterval(() => {
        slides[idx].classList.remove('active');
        idx = (idx + 1) % slides.length;
        slides[idx].classList.add('active');
    }, 3000);
});
