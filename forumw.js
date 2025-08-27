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
        // 開新分頁 window.open(...)
    });
