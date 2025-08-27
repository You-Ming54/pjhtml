<<<<<<< HEAD
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


document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('transition-overlay'); // 地獄遮罩
    const hellsigil = document.getElementById('hellsigil');         // 地獄符文

    document.querySelectorAll('.weapon').forEach(div => {
        const url = div.dataset.url;
        if (!url) return;

        div.addEventListener('click', () => {
            // 1. 加入閃爍遮罩
            overlay.classList.add('flash');
            overlay.style.opacity = '1';

            // 2. 畫面震動 & 符文浮現
            document.body.classList.add('shake');
            hellsigil.classList.add('hell-active');

            // 3. 閃爍結束後，進入爆裂
            setTimeout(() => {
                overlay.classList.remove('flash');
                overlay.classList.add('blast');
            }, 2000); // flashRed 動畫總時長（0.3s × 3）

            // 4. 移除震動與符文動畫
            setTimeout(() => {
                document.body.classList.remove('shake');
                hellsigil.classList.remove('hell-active');
            }, 2500); // 在 blast 前先淡出符文

            // 5. 跳轉付款頁（可改成 open(url, '_blank') 新分頁）
            setTimeout(() => {
                window.location.href = url;
            }, 3000);
        });
    });
});


=======
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


document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('transition-overlay'); // 地獄遮罩
    const hellsigil = document.getElementById('hellsigil');         // 地獄符文

    document.querySelectorAll('.weapon').forEach(div => {
        const url = div.dataset.url;
        if (!url) return;

        div.addEventListener('click', () => {
            // 1. 加入閃爍遮罩
            overlay.classList.add('flash');
            overlay.style.opacity = '1';

            // 2. 畫面震動 & 符文浮現
            document.body.classList.add('shake');
            hellsigil.classList.add('hell-active');

            // 3. 閃爍結束後，進入爆裂
            setTimeout(() => {
                overlay.classList.remove('flash');
                overlay.classList.add('blast');
            }, 2000); // flashRed 動畫總時長（0.3s × 3）

            // 4. 移除震動與符文動畫
            setTimeout(() => {
                document.body.classList.remove('shake');
                hellsigil.classList.remove('hell-active');
            }, 2500); // 在 blast 前先淡出符文

            // 5. 跳轉付款頁（可改成 open(url, '_blank') 新分頁）
            setTimeout(() => {
                window.location.href = url;
            }, 3000);
        });
    });
});


>>>>>>> d93486e066e34d7b48face2cd0b712d85fb22d5b
