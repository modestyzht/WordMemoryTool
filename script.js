// 示例单词列表
const wordList = [
    {
        word: "apple",
        definition: "一个有着红色或绿色皮肤和坚实白色果肉的圆形水果",
        example: "她吃了一个苹果作为小吃。"
    },
    {
        word: "cat",
        definition: "一种小型的驯养食肉动物",
        example: "猫正躺在沙发上睡觉。"
    },
    {
        word: "sun",
        definition: "地球围绕的星体，为地球提供热量和光线",
        example: "太阳从东方升起。"
    },
    {
        word: "computer",
        definition: "一种能够进行数据处理的智能电子设备",
        example: "我使用电脑浏览网页和写代码。"
    },
    {
        word: "book",
        definition: "用纸张装订的一组印刷或写成的空白或印有内容的页面",
        example: "我喜欢读书，尤其是小说。"
    },
    {
        word: "dog",
        definition: "一种常见的家养动物，人类的忠诚伴侣",
        example: "我们家有一只可爱的狗。"
    },
    {
        word: "rain",
        definition: "从云中落下的水滴，形成降水现象",
        example: "今天下午可能会有雨。"
    },
    {
        word: "flower",
        definition: "植物的繁殖部分，通常有彩色花瓣",
        example: "她收到了一束美丽的花。"
    },
    {
        word: "tree",
        definition: "生长在土地上的大型植物，有树干和树枝",
        example: "这棵树在秋天变得很漂亮，叶子变红了。"
    },
    {
        word: "water",
        definition: "液态的无色透明液体，生命所需的基本元素",
        example: "我们每天都需要喝足够的水。"
    },
    {
        word: "car",
        definition: "四轮车辆，通常由发动机驱动",
        example: "我每天开车上班。"
    },
    {
        word: "phone",
        definition: "一种通讯设备，用于语音通话和发送短信",
        example: "她用手机给我打电话。"
    },
    {
        word: "school",
        definition: "为学生提供教育的机构",
        example: "我在一所小学上学。"
    },
    {
        word: "music",
        definition: "声音的艺术形式，通过乐器演奏或歌唱表现",
        example: "我喜欢听流行音乐。"
    },
    {
        word: "house",
        definition: "人们居住的建筑物",
        example: "我家有三层楼。"
    },
    {
        word: "pen",
        definition: "用于写字的工具，通常由笔杆和笔尖组成",
        example: "我用钢笔写信。"
    },
    {
        word: "time",
        definition: "持续的过程，时间的衡量单位",
        example: "我每天晚上都会看电视一段时间。"
    }
];


// 获取单词列表的父元素
const wordListContainer = document.querySelector('.word-list ul');

// 循环添加单词列表项
wordList.forEach(wordItem => {
    const listItem = document.createElement('li');
    listItem.textContent = wordItem.word;
    listItem.addEventListener('click', () => {
        displayWordDetails(wordItem);
        startMemoryTest();
    });
    wordListContainer.appendChild(listItem);
});

// 显示单词的定义和例句
function displayWordDetails(wordItem) {
    const wordDetailsContainer = document.querySelector('.word-details');
    wordDetailsContainer.innerHTML = `
        <h2>${wordItem.word}</h2>
        <p><strong>Definition:</strong> ${wordItem.definition}</p>
        <p><strong>Example:</strong> ${wordItem.example}</p>
    `;

    // 设置当前测试的单词
    currentWord = wordItem;

    // 调用记忆测试功能
    startMemoryTest();
}
// 当前测试的单词
let currentWord;

// 显示单词的定义和例句
function displayWordDetails(wordItem) {
    const wordDetailsContainer = document.querySelector('.word-details');
    wordDetailsContainer.innerHTML = `
        <h2>${wordItem.word}</h2>
        <p><strong>Definition:</strong> ${wordItem.definition}</p>
        <p><strong>Example:</strong> ${wordItem.example}</p>
    `;

    // 设置当前测试的单词
    currentWord = wordItem;

    // 调用记忆测试功能
    startMemoryTest();
}

// 开始记忆测试
function startMemoryTest() {
    const memoryTestContainer = document.querySelector('.memory-test');

    // 创建填空题
    memoryTestContainer.innerHTML = `
        <h3>填空题：</h3>
        <p>请填写单词 "<span class="blank"></span>" 的定义：</p>
        <input type="text" id="definitionInput" placeholder="在此输入单词的定义">
        <button onclick="checkAnswer()">提交</button>
        <p id="feedback"></p>
    `;
}

// 检查用户答案
function checkAnswer() {
    const definitionInput = document.getElementById('definitionInput');
    const feedback = document.getElementById('feedback');

    // 检查用户答案是否正确
    if (definitionInput.value.trim().toLowerCase() === currentWord.definition.toLowerCase()) {
        feedback.textContent = "答案正确！";
    } else {
        feedback.textContent = "答案错误，请再试一次。";
    }
}

