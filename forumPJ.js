<<<<<<< HEAD
// 當使用者點擊「Enter Hell」按鈕時，打開 modal 播放影片
document.getElementById("startBtn").addEventListener("click", () => {
    const modal = document.getElementById("trailerModal");
    const video = document.getElementById("trailerVideo");
    // 替換以下網址為你想要撥放的 Doom 預告片網址
    video.src = "DOOM The Dark Ages  Official Trailer 1 (4K)  Coming 2025.mp4";
    modal.style.display = "block";
});

// 點擊間距中的關閉按鈕關閉 modal
document.querySelector(".close").addEventListener("click", () => {
    const modal = document.getElementById("trailerModal");
    const video = document.getElementById("trailerVideo");
    modal.style.display = "none";
    video.src = "";
});

// 點擊 modal 之外的區域也可關閉 modal
window.addEventListener("click", (event) => {
    const modal = document.getElementById("trailerModal");
    const video = document.getElementById("trailerVideo");
    if (event.target === modal) {
        modal.style.display = "none";
        video.src = "";
    }
});

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
=======
// 當使用者點擊「Enter Hell」按鈕時，打開 modal 播放影片
document.getElementById("startBtn").addEventListener("click", () => {
    const modal = document.getElementById("trailerModal");
    const video = document.getElementById("trailerVideo");
    // 替換以下網址為你想要撥放的 Doom 預告片網址
    video.src = "DOOM The Dark Ages  Official Trailer 1 (4K)  Coming 2025.mp4";
    modal.style.display = "block";
});

// 點擊間距中的關閉按鈕關閉 modal
document.querySelector(".close").addEventListener("click", () => {
    const modal = document.getElementById("trailerModal");
    const video = document.getElementById("trailerVideo");
    modal.style.display = "none";
    video.src = "";
});

// 點擊 modal 之外的區域也可關閉 modal
window.addEventListener("click", (event) => {
    const modal = document.getElementById("trailerModal");
    const video = document.getElementById("trailerVideo");
    if (event.target === modal) {
        modal.style.display = "none";
        video.src = "";
    }
});

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
>>>>>>> d93486e066e34d7b48face2cd0b712d85fb22d5b
