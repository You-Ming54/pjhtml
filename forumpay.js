document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(location.search);
    const productId = params.get('product') || '1';

    const data = {
        '1': {
            label: '一般版 - 1790 元',
            desc: '標準版包含實體盒裝、遊戲光碟與數位下載授權。',
            requireAddress: false
        },
        '2': {
            label: '典藏版 - 2850 元',
            desc: '典藏版附贈皮膚包、數位美術設定集、原聲帶與實體模型。',
            requireAddress: true
        }
    };

    const info = data[productId] || data['1'];

    // 預設載入選單與描述
    document.querySelector('#productDesc p').textContent = info.desc;
    const select = document.getElementById('productSelect');
    select.innerHTML = `<option value="${productId}">${info.label}</option>`;

    if (info.requireAddress) {
        document.getElementById('addrGroup').classList.remove('hidden');
        document.getElementById('address').required = true;
    }

    document.getElementById('checkoutForm').addEventListener('submit', e => {
        e.preventDefault();

        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address')?.value.trim();

        if (!phone || !email || (info.requireAddress && !address)) {
            alert('請完整填寫所有必填欄位');
            return;
        }

        // 生成 20 碼序號
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let code = '';
        for (let i = 0; i < 20; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        // 顯示虛擬收據畫面
        document.getElementById('productName').textContent = info.label;
        document.getElementById('serialCode').textContent = code;

        document.getElementById('checkoutForm').classList.add('hidden');
        document.getElementById('productDesc').classList.add('hidden');
        document.getElementById('receiptScreen').classList.remove('hidden');
    });
});
