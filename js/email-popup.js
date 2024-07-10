document.addEventListener('DOMContentLoaded', function() {
    const emailLink = document.getElementById('email-link');
    
    emailLink.addEventListener('click', function(event) {
        event.preventDefault();
        openEmailPopup();
    });

    function openEmailPopup() {
        const emailPopup = document.createElement('div');
        emailPopup.classList.add('email-popup');
        emailPopup.innerHTML = `
            <div class="email-popup-content">
                <span class="close-btn">&times;</span>
                <h2>发送邮件</h2>
                <form action="mailto:lab@example.com" method="post" enctype="text/plain">
                    <label for="name">姓名:</label>
                    <input type="text" id="name" name="name" required>
                    <label for="email">邮箱:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="message">消息:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                    <button type="submit">发送</button>
                </form>
            </div>
        `;
        document.body.appendChild(emailPopup);

        const closeBtn = emailPopup.querySelector('.close-btn');
        closeBtn.addEventListener('click', function() {
            document.body.removeChild(emailPopup);
        });
    }
});
