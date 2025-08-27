document.addEventListener('DOMContentLoaded', () => {
    // DOM 元素
    const inputEl = document.getElementById('commentInput');
    const imgInput = document.getElementById('imageInput');
    const postBtn = document.getElementById('postBtn');
    const listEl = document.getElementById('commentsList');

    // 資料結構
    const comments = [];
    let nextId = 0;

    const saved = localStorage.getItem('forum_comments');
    if (saved) {
        try {
            const arr = JSON.parse(saved);
            comments.push(...arr);
            nextId = Math.max(...arr.map(c => c.id)) + 1;
            renderComments();  // ✅ 立即渲染
        } catch (e) {
            console.warn('留言載入失敗', e);
        }
    }

    // 時間格式
    function formatNow() {
        const d = new Date();
        return d.toLocaleString('zh-TW', {
            year: 'numeric', month: '2-digit',
            day: '2-digit', hour: '2-digit', minute: '2-digit'
        });
    }

    // 渲染留言與回覆
    function renderComments() {
        listEl.innerHTML = '';
        comments.forEach(c => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.dataset.id = c.id;



            // 主留言結構
            let html = `
        <div class="meta">${c.user} • ${c.time}</div>
        <div class="text">${c.text}</div>
      `;

            // 圖片預覽
            if (c.images && c.images.length) {
                html += `<div class="images">` +
                    c.images.map(src => `<img src="${src}" alt="附加圖片">`).join('') +
                    `</div>`;
            }

            // 回覆按鈕與回覆框
            html += `
        <button type="button" class="reply-btn">回覆</button>
        <div class="reply-box hidden">
          <textarea class="reply-input" placeholder="回覆這則留言…"></textarea>
          <button type="button" class="reply-submit">送出回覆</button>
        </div>
        <div class="replies"></div>
      `;

            commentDiv.innerHTML = html;
            listEl.prepend(commentDiv);

            // 渲染回覆清單
            const repliesEl = commentDiv.querySelector('.replies');
            c.replies.forEach(r => {
                const rDiv = document.createElement('div');
                rDiv.className = 'comment';
                rDiv.innerHTML = `
          <div class="meta">${r.user} • ${r.time}</div>
          <div class="text">${r.text}</div>
        `;
                repliesEl.appendChild(rDiv);
            });
        });

        bindReplyEvents();
        try {
            localStorage.setItem('forum_comments', JSON.stringify(comments));
        } catch (e) {
            console.warn('留言儲存失敗', e);
        }
    }

    // 綁定回覆事件
    function bindReplyEvents() {
        document.querySelectorAll('#commentsList > .comment').forEach(el => {
            const replyBtn = el.querySelector('.reply-btn');
            if (!replyBtn) return;  // 排除回覆本身的 .comment

            const id = Number(el.dataset.id);
            const replyBox = el.querySelector('.reply-box');
            const replyInput = el.querySelector('.reply-input');
            const replySubmit = el.querySelector('.reply-submit');

            replyBtn.addEventListener('click', () => {
                replyBox.classList.toggle('hidden');
                replyInput.focus();
            });

            replySubmit.addEventListener('click', () => {
                const text = replyInput.value.trim();
                if (!text) return alert('回覆不可空白');

                const target = comments.find(c => c.id === id);
                target.replies.push({
                    user: '訪客',
                    time: formatNow(),
                    text
                });
                renderComments();
            });
        });
    }

    // 發表留言（含圖片）
    postBtn.addEventListener('click', () => {
        const text = inputEl.value.trim();
        const files = Array.from(imgInput.files);

        if (!text && files.length === 0) {
            return alert('請輸入文字或選擇至少一張圖片');
        }

        const readers = files.map(file => {
            return new Promise(resolve => {
                const fr = new FileReader();
                fr.onload = () => resolve(fr.result);
                fr.readAsDataURL(file);
            });
        });

        Promise.all(readers).then(images => {
            comments.push({
                id: nextId++,
                user: '訪客',
                time: formatNow(),
                text,
                replies: [],
                images
            });

            inputEl.value = '';
            imgInput.value = '';
            renderComments();
            
            });
        });
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

    document.getElementById('title')
        .addEventListener('click', () => {
            window.open('http://127.0.0.1:5502/PJ.HTML', '_blank');
            // 若要開新分頁改成 window.open(...)
        });