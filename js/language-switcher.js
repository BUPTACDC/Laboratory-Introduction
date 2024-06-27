document.addEventListener('DOMContentLoaded', function() {
    const switchLangButton = document.getElementById('switch-lang');

    const translations = {
        '首页': 'Home',
        '成员介绍': 'Members',
        '科研成果': 'Research Results',
        '相关活动': 'Related Activities',
        '实验室名称': 'Laboratory Name',
        '研究方向：人工智能、机器学习、大数据、计算机视觉、自然语言处理': 'Research Directions: AI, Machine Learning, Big Data, Computer Vision, NLP',
        '欢迎来到我们的实验室。我们致力于推动科技前沿，专注于人工智能和相关领域的研究。': 'Welcome to our lab. We are committed to advancing the frontier of technology, focusing on artificial intelligence and related fields.',
        '近期公告': 'Recent Announcements',
        '公告标题1': 'Announcement Title 1',
        '这是公告内容1的简短描述。': 'This is a brief description of announcement content 1.',
        '公告标题2': 'Announcement Title 2',
        '这是公告内容2的简短描述。': 'This is a brief description of announcement content 2.',
        'Mentors': '导师',
        'PhD Students': '博士生',
        'Master Students': '研究生',
        '2016 Class': '2016级',
        '2017 Class': '2017级',
        '导师1': 'Mentor 1',
        '导师2': 'Mentor 2',
        '博士生1': 'PhD Student 1',
        '博士生2': 'PhD Student 2',
        '研究生1': 'Master Student 1',
        '研究生2': 'Master Student 2',
        '研究方向：人工智能、机器学习': 'Research Direction: AI, Machine Learning',
        '自我介绍：这是导师1的自我介绍。': 'Introduction: This is the introduction of Mentor 1.',
        '部分成果': 'Achievements',
        '成果1': 'Achievement 1',
        '成果2': 'Achievement 2',
        '期刊论文': 'Journal Papers',
        '标题：期刊论文1': 'Title: Journal Paper 1',
        '作者：作者1, 作者2': 'Authors: Author 1, Author 2',
        '期刊：期刊名称': 'Journal: Journal Name',
        '年份：2024': 'Year: 2024',
        '标题：期刊论文2': 'Title: Journal Paper 2',
        '年份：2023': 'Year: 2023',
        '会议论文': 'Conference Papers',
        '标题：会议论文1': 'Title: Conference Paper 1',
        '会议：会议名称': 'Conference: Conference Name',
        '标题：会议论文2': 'Title: Conference Paper 2',
        '获得奖项': 'Awards',
        '奖项名称：奖项1': 'Award: Award 1',
        '颁发机构：机构名称': 'Institution: Institution Name',
        '奖项名称：奖项2': 'Award: Award 2',
        '基金项目': 'Projects',
        '项目名称：基金项目1': 'Project: Project 1',
        '资助机构：机构名称': 'Funding Institution: Institution Name',
        '项目名称：基金项目2': 'Project: Project 2'
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
            const zhText = element.getAttribute('data-zh');
            const enText = translations[zhText];
            if (enText) {
                element.textContent = enText;
            }
        });
    }

    // 更新成员选择列表
    function updateMemberList() {
        const lists = document.querySelectorAll('#mentor-list, #phd-list ul, #master-list ul');
        lists.forEach(list => {
            list.querySelectorAll('li').forEach(item => {
                const zhText = item.getAttribute('data-zh');
                const enText = translations[zhText];
                if (isChinese) {
                    item.textContent = zhText;
                } else {
                    item.textContent = enText;
                }
            });
        });
    }

    // 初始调用成员列表更新
    updateMemberList();
});
