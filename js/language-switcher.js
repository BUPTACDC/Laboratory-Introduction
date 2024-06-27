document.addEventListener('DOMContentLoaded', function() {
    const switchLangButton = document.getElementById('switch-lang');

    const translations = {
        'Members': '成员介绍',
        'Mentors': '导师',
        'PhD Students': '博士生',
        'Master Students': '研究生',
        '2016 Class': '2016级',
        '2017 Class': '2017级',
        'Research': '科研成果',
        'Publications': '发表论文',
        'Awards': '获得奖项',
        'Projects': '基金项目',
        'Recent Announcements': '近期公告',
        'Home': '首页',
        'Research Results': '科研成果',
        'Related Activities': '相关活动',
        'Welcome to our lab. We are committed to advancing the frontier of technology, focusing on artificial intelligence and related fields.': '欢迎来到我们的实验室。我们致力于推动科技前沿，专注于人工智能和相关领域的研究。',
        'Laboratory Name': '实验室名称',
        'Research Directions: AI, Machine Learning, Big Data, Computer Vision, NLP': '研究方向：人工智能、机器学习、大数据、计算机视觉、自然语言处理'
        // 添加更多翻译内容
    };

    // 读取初始语言状态
    let isChinese = localStorage.getItem('isChinese') !== 'false';

    // 根据初始语言状态设置页面语言
    if (isChinese) {
        switchToChinese();
    } else {
        switchToEnglish();
    }

    switchLangButton.addEventListener('click', function() {
        isChinese = !isChinese;
        localStorage.setItem('isChinese', isChinese);
        location.reload(); // 切换语言后刷新页面
    });

    function switchToChinese() {
        document.querySelectorAll('[data-zh]').forEach(element => {
            element.textContent = element.getAttribute('data-zh');
        });
    }

    function switchToEnglish() {
        document.querySelectorAll('[data-zh]').forEach(element => {
            const enText = translations[element.textContent.trim()];
            if (enText) {
                element.textContent = enText;
            }
        });
    }
});
