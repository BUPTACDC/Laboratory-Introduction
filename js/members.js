$(document).ready(function() {
    const members = {
        mentor1: {
            photo: 'assets/images/mentor1.jpg',
            name: '导师1',
            research: '研究方向：人工智能、机器学习',
            bio: '自我介绍：这是导师1的自我介绍。',
            achievements: ['成果1', '成果2']
        },
        mentor2: {
            photo: 'assets/images/mentor2.jpg',
            name: '导师2',
            research: '研究方向：大数据、计算机视觉',
            bio: '自我介绍：这是导师2的自我介绍。',
            achievements: ['成果1', '成果2']
        },
        phd2016_1: {
            photo: 'assets/images/phd2016_1.jpg',
            name: '博士生1',
            research: '研究方向：自然语言处理',
            bio: '自我介绍：这是博士生1的自我介绍。',
            achievements: ['成果1', '成果2']
        },
        phd2016_2: {
            photo: 'assets/images/phd2016_2.jpg',
            name: '博士生2',
            research: '研究方向：深度学习',
            bio: '自我介绍：这是博士生2的自我介绍。',
            achievements: ['成果1', '成果2']
        },
        // 添加更多成员数据
    };

    function displayMember(id) {
        const member = members[id];
        if (member) {
            $('#member-photo').attr('src', member.photo);
            $('#member-name').text(member.name);
            $('#member-research').text(member.research);
            $('#member-bio').text(member.bio);
            $('#member-achievements').empty();
            member.achievements.forEach(achievement => {
                $('#member-achievements').append(`<li>${achievement}</li>`);
            });
        }
    }

    $('.members-list li, .members-list ul li').click(function() {
        const memberId = $(this).data('id');
        displayMember(memberId);
    });

    // 初始显示第一个导师的信息
    displayMember('mentor1');
});
