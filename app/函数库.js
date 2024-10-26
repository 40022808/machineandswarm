import {
    文本1,文本0,文本1_回答, 文本2,文本2_回答, 文本0_回答, 文本0_后续1, 文本0_后续1_回答,文本2_后续1,文本2_后续1_回答,文本3,文本3_回答,文本2_后续2,
    文本2_后续2_回答,文本2_后续3,文本2_后续3_回答,文本2_后续2_效果, 文本2_后续1_奖励, 文本2_后续2_奖励, 文本3_奖励
} from "./文本.js";

import {
    敌人名字信息, 敌人属性信息
} from "./npcs.js";


export function 敌人名字信息_获取(number) {
    var name = 敌人名字信息(number)
    return name
}


function 随机事件(number) {
    let randomnumber;
    let firstDigit = parseInt(number.toString()[0]); // 获取 number 的第一个数字
    do {
        randomnumber = getRandomInt(2,3);
    } 
    while (randomnumber == firstDigit || randomnumber == number);
    return randomnumber;
}

function 随机后续(number,min, max) {
    let randomnumber = number + '_' + getRandomInt(min,max)
    return randomnumber
}


const 事件效果Map = {
    "2_2":文本2_后续2_效果
};

function 事件效果(number) {
    const textFunction = 事件效果Map[number];
    return textFunction ? textFunction() : null;
}


const 事件奖励Map = {
    "2_1":文本2_后续1_奖励,
    "2_2":文本2_后续2_奖励,
    "3":文本3_奖励
};

function 获取事件奖励(number,rewar) {
    const textFunction = 事件奖励Map[number];
    return textFunction ? textFunction(rewar) : null;
}


const textsMap = {
    "0": 文本0,
    "0_1": 文本0_后续1,
    "文本1": 文本1,
    "2": 文本2,
    "2_1": 文本2_后续1,
    "2_2":文本2_后续2,
    "2_3":文本2_后续3,
    "3":文本3
};

function texts(number) {
    const textFunction = textsMap[number];
    return textFunction ? textFunction() : null;
}



const 文本回答Map= {
    "0": 文本0_回答,
    "0_1": 文本0_后续1_回答,
    "文本1": 文本1_回答,
    "2": 文本2_回答,
    "2_1": 文本2_后续1_回答,
    "2_2":文本2_后续2_回答,
    "2_3":文本2_后续3_回答,
    "3":文本3_回答
}

export function 文本回答(number) {
    const textFunction = 文本回答Map[number];
    return textFunction ? textFunction() : null;
}

const 文本标题Map = {
    "0":"<h1>[██████]</h1><br>",
    "0_1":"<h1>[██████]</h1><br>",
    "文本1":"<h1>[冒险的开始]</h1><br>",
    "2":"<h1>[昏暗的走廊]</h1><br>",
    "2_1":"<h1>[不再昏暗的走廊]</h1><br>",
    "2_2":"<h1>[昏暗的走廊]</h1><br>",
    "2_3":"<h1>[昏暗的走廊]</h1><br>",
    "3":"<h1>[智慧与财富]</h1><br>"
}

function 文本标题(number) {
    const text =  文本标题Map[number];
    return text
}


const 文本回答_函数_战斗开始Map = {
    "2_1": '201',
    "2_2": '201',
    "3": '201'
}


function 文本回答_函数_战斗开始(number) {
    let npcnumber = 0
    if (boss生成倒计时_变量 == 1) {
        npcnumber = 1
    }
    else if (boss生成倒计时_变量 <= 5) {
        npcnumber = getRandomInt(1,2)
    }
    else {
        npcnumber = getRandomInt(1,3)
    }
    const textFunction = 文本回答_函数_战斗开始Map[number];
    return 战斗开始(npcnumber,textFunction)
}


function 文本回答_函数(number) {
    const actions = {
        "文本1": () => {handleClick('#文本1_回答_1', 随机事件(number),number,1);   handleClick('#文本1_回答_2', 随机事件(number),number,2);},
        "0": () => handleClick('#文本0_回答_1', "0_1",number,1),
        "0_1": () => handleClick('#文本0_后续1_回答_1', "文本1", number,1,500),
        "2": () => {handleClick('#文本2_回答_1', "2_1",number,1);    handleClick('#文本2_回答_2',  随机后续(number,2, 3),number,2)},
        "2_1": () => handleClick('#文本2_后续1_回答_1', () => 文本回答_函数_战斗开始(number),number,1),
        "2_2":() => handleClick('#文本2_后续2_回答_1', () => 文本回答_函数_战斗开始(number), number,1),
        "2_3":() => handleClick('#文本2_后续3_回答_1',随机事件(number),number,1),
        "3":() => {handleClick('#文本3_回答_1', () => 文本回答_函数_战斗开始(number),number,1);     handleClick('#文本3_回答_2', () =>文本回答_函数_战斗开始(number),number,2);}
    };

    if (actions[number]) {
        actions[number]();
    }
}

function handleClick(selector, nextStep,number ,rewar,delay = 100) {
    const element = document.querySelector(selector);
    element.addEventListener('click', () => {
        const 冒险中选择_选择 = document.querySelector('.冒险中选择_选择');
        冒险中选择_选择.innerHTML = "";
        冒险中选择_消失();
        setTimeout(() => {
            if (typeof nextStep === 'function') {
                nextStep();
            }
            else {
                冒险中选择_显示(nextStep);
                
            }
        }, delay);
        setTimeout(() => {
            事件效果(number)
            获取事件奖励(number,rewar)
        }, delay);
    });
}

export var boss生成倒计时_变量 = 0


boss生成倒计时_变化_初始化()

export function 冒险中选择_显示(number) {
    boss生成倒计时_变化(number)
    当前事件 = number
    const 冒险中选择 = document.querySelector('.冒险中选择0')
    冒险中选择.style.display = 'flex';
    const 冒险中选择_text = document.querySelector('.冒险中选择_text')
    冒险中选择_text.innerHTML = ""
    setTimeout(() => {
        showText(texts(number),冒险中选择_text, number)
    }, 500);
    
}

// 逐字显示文本
export function showText(text, 对话框, number) {
    对话框.innerHTML =  ""
    对话框.innerHTML = 文本标题(number)
    let index = 0
    const intervalId = setInterval(() => {
        对话框.innerHTML +=  '<span class="冒险中选择_显示_text_文字">' + text[index] + '</span>';
        index++;
        if (index >= text.length) {
            clearInterval(intervalId);
            setTimeout(() => {
                文本回答(number)
                文本回答_函数(number)
            }, 300);
        }
    }, 100);

}



export function docbgm() {
    const 悬疑bgm = document.querySelector('#悬疑bgm')
    const 城镇 = document.querySelector('#城镇')
    const 热血战斗 = document.querySelector('#热血战斗')
    const 战斗BGM = document.querySelector('#战斗BGM')
    const 按钮2 = document.querySelector('#按钮2')
    const 受伤1 = document.querySelector('#受伤1')
    const 受伤1_2 = document.querySelector('#受伤1_2')
    const 受伤1_3 = document.querySelector('#受伤1_3')
    const end1 = document.querySelector('#end1')
    const 敌人死亡 = document.querySelector('#敌人死亡')
    const 攻击1 = document.querySelector('#攻击1')
    const error1 = document.querySelector('#error1')

}
docbgm()


export function cat() {
    console.log(`
------------------------------------------------------------

⣿⣿⣿⠟⠛⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢋⣩⣉⢻⣿⣿⣿              
⣿⣿⣿⠀⣿⣶⣕⣈⠹⠿⠿⠿⠿⠟⠛⣛⢋⣰⠣⣿⣿⠀⣿⣿⣿              
⣿⣿⣿⡀⣿⣿⣿⣧⢻⣿⣶⣷⣿⣿⣿⣿⣿⣿⠿⠶⡝⠀⣿⣿⣿              
⣿⣿⣿⣷⠘⣿⣿⣿⢏⣿⣿⣋⣀⣈⣻⣿⣿⣷⣤⣤⣿⡐⢿⣿⣿               
⣿⣿⣿⣿⣆⢩⣝⣫⣾⣿⣿⣿⣿⡟⠿⠿⠦⠀⠸⠿⣻⣿⡄⢻⣿
⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣾⣿⣿⣿⣿⠇⣼⣿       恭喜你发现了彩蛋猫，
⣿⣿⣿⣿⣿⣿⡄⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣰⣿⣿       获得密语0:[彩蛋猫]!
⣿⣿⣿⣿⣿⣿⠇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⣿⣿⣿       
⣿⣿⣿⣿⣿⠏⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿       
⣿⣿⣿⣿⠟⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿       
⣿⣿⣿⠋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⣿⣿⣿
⣿⣿⠋⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿

------------------------------------------------------------
`)

}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



export var name_code = document.querySelector('#name_code')

export var medate = {
    me攻击力 : 110,
    me防御力 : 1,
    me体质 : 10,
    me精神 : 5,
    me等级 : 1,
    之前等级: 1,
    me经验 : 0,
    me经验上限 : 10,
    me生命上限 : 0,
    me生命 : 0,
    me魔力上限 : 0,
    me魔力 : 0,
    me财富:0,
    me技能点:0
};

属性初始化()

function 属性初始化() {
    medate.me生命上限 = medate.me体质 * 10
    medate.me生命 = medate.me生命上限
    medate.me魔力上限 = medate.me精神 * 10
    medate.me魔力 = medate.me魔力上限
}
function 属性初始化2() {
    medate.me生命上限 = medate.me体质 * 10
    medate.me魔力上限 = medate.me精神 * 10
}


export var rewardData = {
    exp : 0,
    coin : 0
}


export function 属性刷新() {
    属性初始化2()
    let 星空币数量 = medate.me财富
    let 星空币单位 = ''
    if (星空币数量.toString().length == 5) {
        星空币数量 = 星空币数量 / 10000
        星空币单位 = '万'
    }
    const 攻击力 = document.querySelector('.攻击力')
    const 防御力 = document.querySelector('.防御力')
    const 体质 = document.querySelector('.体质')
    const 精神 = document.querySelector('.精神')
    const 等级 = document.querySelector('.等级')
    var 攻击力信息 = '攻击力:' + medate.me攻击力
    var 防御力信息 = '防御力:' + medate.me防御力
    var 体质信息 = '体质:' + medate.me体质
    var 精神信息 = '精神:' + medate.me精神
    var 等级信息 = '等级:' + medate.me等级
    var 生命上限信息 = '生命上限:' + medate.me生命上限
    var 魔力上限信息 = '魔力上限:' + medate.me魔力上限
    var 财富信息 = '星空币: ' + 星空币数量 + 星空币单位
    var 经验值信息 = '经验值:' + medate.me经验 + '/' + medate.me经验上限
    var 技能点信息 = "技能点:" + medate.me技能点
    攻击力.innerHTML = 攻击力信息
    防御力.innerHTML = 防御力信息
    体质.innerHTML = 体质信息
    精神.innerHTML = 精神信息
    等级.innerHTML = 等级信息
    /////////////////////////////////////////////////////
    const 人物详细信息_属性信息_生命上限 = document.querySelector('.人物详细信息_属性信息_生命上限')
    const 人物详细信息_属性信息_魔力上限 = document.querySelector('.人物详细信息_属性信息_魔力上限')
    const 人物详细信息_属性信息_攻击力 = document.querySelector('.人物详细信息_属性信息_攻击力')
    const 人物详细信息_属性信息_防御力 = document.querySelector('.人物详细信息_属性信息_防御力')
    const 人物详细信息_属性信息_体质 = document.querySelector('.人物详细信息_属性信息_体质')
    const 人物详细信息_属性信息_精神 = document.querySelector('.人物详细信息_属性信息_精神')
    const 人物详细信息_属性信息_等级 = document.querySelector('.人物详细信息_属性信息_等级')
    const 人物详细信息_属性信息_财富 = document.querySelector('.人物详细信息_属性信息_财富')
    const 人物详细信息_属性信息_经验值 = document.querySelector('.人物详细信息_属性信息_经验值')
    const 人物详细信息_属性信息_技能点 = document.querySelector('.人物详细信息_属性信息_技能点')
    人物详细信息_属性信息_生命上限.innerHTML = 生命上限信息
    人物详细信息_属性信息_魔力上限.innerHTML = 魔力上限信息
    人物详细信息_属性信息_攻击力.innerHTML = 攻击力信息
    人物详细信息_属性信息_防御力.innerHTML = 防御力信息
    人物详细信息_属性信息_体质.innerHTML = 体质信息
    人物详细信息_属性信息_精神.innerHTML = 精神信息
    人物详细信息_属性信息_等级.innerHTML = 等级信息
    人物详细信息_属性信息_财富.innerHTML = 财富信息
    人物详细信息_属性信息_经验值.innerHTML = 经验值信息
    人物详细信息_属性信息_技能点.innerHTML = 技能点信息
    /////////////////////////////////////////////////////
    状态刷新()
}

export function 状态刷新() {
    const css生命 = document.querySelector('.css生命')
    const css魔力 = document.querySelector('.css魔力')
    const 经验值 = document.querySelector('.经验值')
    const 生命信息 = document.querySelector('.生命信息')
    const 魔力信息 = document.querySelector('.魔力信息')
    生命信息.textContent = medate.me生命
    魔力信息.textContent = medate.me魔力

    let mehp = medate.me生命 / medate.me生命上限
    let memaxhp = 50
    css生命.style.width = (memaxhp * mehp) + 'vw'

    let memp = medate.me魔力 / medate.me魔力上限
    let memaxmp = 50
    css魔力.style.width = (memaxmp * memp) + 'vw'
    
    let meex = medate.me经验 / medate.me经验上限
    let memaxex = 10
    经验值.style.width = (memaxex * meex) + 'vw'
}

var 升级次数 = 0

function 升级检测() {
    
    let interval = window.setInterval(function() {
        if (medate.me经验 >= medate.me经验上限) {
            medate.me经验 = medate.me经验 - medate.me经验上限
            medate.me经验上限 = medate.me经验上限 * 2
            medate.me等级 = medate.me等级 + 1
            升级次数 = 升级次数 + 1 
            技能点奖励()
            属性刷新()
        }   
        else {
          clearInterval(interval); // 清除定时器
          属性刷新()
        }
    }, 0); 
}



function 升级奖励() {
    清除奖励信息()
    升级次数 = 升级次数 - 1
    medate.之前等级 = medate.之前等级 + 1
    let 之前等级 = medate.之前等级 - 1
    var newh1 = document.createElement('h1')
    newh1.innerHTML = '恭喜你等级提升!' + '( ' + 之前等级 + ' → ' + medate.之前等级 + ' )' + '(' + '拥有的技能点:' + medate.me技能点 + ')'
    var newdiv = document.createElement('div')
    newdiv.className = '升级奖励_box'
    var newh2 = document.createElement('h2')
    newh2.innerHTML = '请选择奖励'
    document.querySelector('.奖励弹窗_box').appendChild(newh1)
    document.querySelector('.奖励弹窗_box').appendChild(newh2)
    document.querySelector('.奖励弹窗_box').appendChild(newdiv)
    var rewar1 = document.createElement('button')
    var rewar2 = document.createElement('button')
    var rewar3 = document.createElement('button')
    升级奖励_随机一个奖励(rewar1,rewar2,rewar3)
    newdiv.appendChild(rewar1)
    newdiv.appendChild(rewar2)
    newdiv.appendChild(rewar3)

}


function 技能点奖励() {
    for (let i = 0 ; i <= 100 ; i += 2) {
        if (medate.me等级 == i) {
            medate.me技能点 = medate.me技能点 + 1
        }
    }
}

function 升级奖励_随机一个奖励(rewar1, rewar2, rewar3) {
    // 定义四个不同的 class 名称、内容和对应的函数
    let rewards = [
        { className: '升级奖励_增加攻击力', content: '增加攻击力 +5', action: function() { 升级奖励_奖励执行(1) } },
        { className: '升级奖励_增加防御力', content: '增加防御力 +1', action: function() { 升级奖励_奖励执行(2) } },
        { className: '升级奖励_增加体质', content: '增加体质 +2', action: function() { 升级奖励_奖励执行(3) } },
        { className: '升级奖励_增加精神', content: '增加精神 +1', action: function() { 升级奖励_奖励执行(4) } }
    ];

    // 随机打乱 rewards 数组
    rewards.sort(() => Math.random() - 0.5);

    // 分配 class 名称、内容和函数
    rewar1.className = rewards[0].className;
    rewar1.textContent = rewards[0].content;
    rewar1.onclick = rewards[0].action;

    rewar2.className = rewards[1].className;
    rewar2.textContent = rewards[1].content;
    rewar2.onclick = rewards[1].action;

    rewar3.className = rewards[2].className;
    rewar3.textContent = rewards[2].content;
    rewar3.onclick = rewards[2].action;
}

function 升级奖励_奖励执行(type) {
    if (type == 1) {
        medate.me攻击力 = medate.me攻击力 + 5
    }
    else if (type == 2) {
        medate.me防御力 = medate.me防御力 + 1
    }
    else if (type == 3) {
        medate.me体质 = medate.me体质 + 2
    }
    else if (type == 4) {
        medate.me精神 = medate.me精神 + 1
    }
    属性初始化()
    属性刷新()
    清除奖励信息()
    var newdiv = document.createElement('div')
    newdiv.className = '升级奖励_box'
    var newh1 = document.createElement('h1')
    newh1.innerHTML = '属性已提升!'
    document.querySelector('.奖励弹窗_box').appendChild(newdiv)
    newdiv.appendChild(newh1)
}


function 清除奖励信息() {
    // 获取父元素
    var parentElement = document.querySelector('.奖励弹窗_box');

    // 获取所有子元素
    var childElements = parentElement.children;

    // 将子元素转换为数组，以便使用数组方法
    var childArray = Array.from(childElements);

    // 遍历子元素数组
    childArray.forEach(function(child) {
        // 如果子元素不是 class='奖励弹窗_关闭'，则删除
        if (!child.classList.contains('奖励弹窗_关闭')) {
            parentElement.removeChild(child);
        }
    });
}


export function start() {
    const startbutton = document.querySelector('.startbutton')
    const start = document.querySelector('.start')
    const start1 = document.querySelector('.start1')
    const start2 = document.querySelector('.start2')
    startbutton.addEventListener('click',()=>{
        全屏()
        音乐播放(悬疑bgm)
        start.style.display = 'none';
        start1.style.display = 'block';
        
    })
}


export function start1() {
    const start1 = document.querySelector('.start1')
    const start2 = document.querySelector('.start2')
    const 是否跳过_跳过 = document.querySelector('.是否跳过_跳过')
    是否跳过_跳过.addEventListener('click',()=>{
        start1.style.display = 'none';
        fadeElementIn(start2, 4000)
        start2.style.display = 'block';
    })
    const 是否跳过_不跳过 = document.querySelector('.是否跳过_不跳过')
    是否跳过_不跳过.addEventListener('click',()=>{
        const 是否跳过 = document.querySelector('.是否跳过')
        是否跳过.style.display = 'none';
        背景剧情_播放()
    })
}





// 全屏事件
function 全屏() {
    var element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}




function 背景剧情_播放() {
    const logo = document.querySelector('.logo')
    const 剧情 = document.querySelector('.剧情')
    const 剧情_h1 = document.querySelector('#剧情_h1')
    const 剧情_h2 = document.querySelector('#剧情_h2')
    剧情.style.display = 'block';
    let text1 = '这是个存在魔法的世界，生活着各种各样的种族。'
    let text1_tim = (text1.length * 260)
    let text2 = '人类，精灵，巨龙，恶魔....'
    let text2_tim = text1_tim + (text2.length * 250)
    let text3 = '突然有一天祂[██]出现了'
    let text3_tim = text2_tim + (text3.length * 250)
    let text4 = '一瞬间整个世界都被祂改造了，变得像游戏一样。'
    let text4_tim = text3_tim + (text4.length * 250)
    let text5 = '智慧生命拥有了像是游戏角色一样的个人面板,个人背包,可以通过获取经验值升级变强。'
    let text5_tim = text4_tim + (text5.length * 250)
    let text6 = '全世界各地出现了名为副本的特殊空间。'
    let text6_tim = text5_tim + (text6.length * 250)
    let text7 = '里面到处都是不能交流的敌人，会思考的机械，诡异的虫子。'
    let text7_tim = text6_tim + (text7.length * 250)
    let text8 = '虽然很危险，但是也充满了机遇。而你就是一名寻求机遇的冒险者!'
    let text8_tim = text7_tim + (text8.length * 250)
    setTimeout(() => {
        背景剧情_播放_text(text1 , 剧情_h1 )
    }, 1000);
    
    setTimeout(() => {
        背景剧情_播放_text(text2 , 剧情_h1 )
    }, text1_tim);

    setTimeout(() => {
        背景剧情_播放_text(text3 , 剧情_h1 )
    }, text2_tim);

    setTimeout(() => {
        背景剧情_播放_text(text4 , 剧情_h1 )
    }, text3_tim);

    setTimeout(() => {
        背景剧情_播放_text(text5 , 剧情_h1 )
    }, text4_tim);
    
    setTimeout(() => {
        背景剧情_播放_text(text6 , 剧情_h1 )
    }, text5_tim);

    setTimeout(() => {
        背景剧情_播放_text(text7 , 剧情_h1 )
    }, text6_tim);

    setTimeout(() => {
        背景剧情_播放_text(text8 , 剧情_h1 )
    }, text7_tim);

    setTimeout(() => {
        剧情_h1.innerHTML = `<div class="logo"><h1 class="智械">智械</h1><h1 class="与">与</h1><h1 class="虫群">虫群</h1></div>`
        剧情_h2.innerHTML = `<div class="开始提示0"><div class="开始提示">点击屏幕开始游戏</div></div>`
        document.body.addEventListener('click', 等待);
    }, text8_tim);
    
}


function 等待(){
    const start1 = document.querySelector('.start1')
    const start2 = document.querySelector('.start2')
    start1.style.display = 'none';
    fadeElementIn(start2, 4000)
    start2.style.display = 'block';
    document.body.removeEventListener('click', 等待);
}




export function start2() {
    const startbutton = document.querySelector('.确定')
    const start2 = document.querySelector('.start2')
    const 游戏 = document.querySelector('.游戏')
    startbutton.addEventListener('click',()=>{
        当前bgm_停止播放()
        音乐播放(城镇)
        默认名字()
        个人信息_名字()
        start2.style.display = 'none';
        fadeElementIn(游戏, 2000)
        游戏.style.display = 'block';
        夜色小镇_显示()
        setTimeout(() => {
            场地_名称_显示()
        }, 2000);
        开局选项_显示(1)
        场地_名称_消失()
    })
}


export function 场地_名称_显示() {
    const 场地_名称 = document.querySelector('.场地_名称')
    场地_名称.style.display = 'flex';
    
}

export function 夜色小镇_显示() {
    const 夜色小镇 = document.querySelector('.夜色小镇')
    夜色小镇.style.display = 'block';
    starPosition(100)
}

function starInit(starCount) {
    
    const 夜色小镇 = document.querySelector('.夜色小镇')
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div")
        star.classList.add("star")
        夜色小镇.appendChild(star)
    }
}

function starPosition(starCount) {
    starInit(starCount)
    const stars = document.querySelectorAll('.star')
    for (let i = 0; i < starCount; i++) {
        let left = Math.floor(Math.random() * window.innerWidth)
        let top = Math.floor(Math.random() * window.innerHeight/1.1)
        stars[i].style.left = left + "px"
        stars[i].style.top = top + "px"
        stars[i].style.animationDelay = Math.floor(Math.random().toFixed(1) * i)+ "s"
    }
}



export function 夜色小镇_消失() {
    const 夜色小镇 = document.querySelector('.夜色小镇')
    夜色小镇.style.display = 'none';
}


export function 场地_名称_消失() {
    const 场地_名称 = document.querySelector('.场地_名称')
    setTimeout(() => {
        场地_名称.style.animation = 'slidein2 1.8s';
    }, 6000);
    setTimeout(() => {
        
        场地_名称.style.display = 'none';
    }, 7800);
}


export function top_显示() {
    const top = document.querySelector('.top')
    top.style.display = 'flex';
}



export function top_消失() {
    const top = document.querySelector('.top')
    top.style.display = 'none';
}




export function 开局选项_显示(off) {
    const 开局选项 = document.querySelector('.开局选项')
    if (off == 1) {
        setTimeout(() => {
            fadeElementIn(开局选项, 2000)
            开局选项.style.display = 'flex';
        }, 4000);
    }
    else if (off == 0) {
        setTimeout(() => {
            开局选项.style.opacity = 0
            fadeElementIn(开局选项, 1500)
            开局选项.style.display = 'flex';
        }, 100);
    }
    
}


export function 开局选项_消失() {
    const 开局选项 = document.querySelector('.开局选项')
    开局选项.style.display = 'none';
}


function 默认名字() {
    if (name_code.value == '') {
        name_code.value = "无名者"
    }
}


function 个人信息_名字() {
    const 名字显示 = document.querySelector('.名字显示')
    名字显示.innerHTML += '[' + name_code.value + ']'
}


const 名字显示 = document.querySelector('.名字显示')
名字显示.addEventListener('click',()=>{
    个人面板_显示()
    部分_人物_显示()
})


export function 战斗选项框_显示() {
    const bottom = document.querySelector('.bottom')
    bottom.style.display = 'flex';
}

export function 战斗选项框_消失() {
    const bottom = document.querySelector('.bottom')
    bottom.style.display = 'none';
}


export function 加载_显示(min, max, count, bgm, bgm2, func, funcnumber, func2, funcnumber2) {
    音乐结束(bgm, 0)
    const 加载 = document.querySelector('.加载')
    加载.style.opacity = 1;
    加载.style.display = 'flex';
    const 加载文字 = document.querySelector('.加载文字')
    加载文字.textContent = `加载中`;
    let tim = getRandomInt(min , max)
    let tim2 = tim * 1000
    let timing = setInterval(() => {
        if (count == 0) {
            加载文字.textContent = `加载中`;
            count = 1
            
        }
        else if (count == 1) {
            加载文字.textContent = `加载中.`;
            count = 2
            
        }
        else if (count == 2) {
            加载文字.textContent = `加载中..`;
            count = 3
            
        }
        else if (count == 3) {
            加载文字.textContent = `加载中...`;
            count = 0
            
        }
    }, 500);
    setTimeout(() => {
        count = 4
        加载_消失(bgm2, func, funcnumber, func2, funcnumber2)
        clearInterval(timing); // 清除定时器
        加载文字.textContent = '加载完成';
    }, tim2);
}

export function 加载_消失(bgm2, func = () => {}, funcnumber = "防止报错", func2 =() => {}, funcnumber2 = "防止报错2") {

    const 加载 = document.querySelector('.加载')
    音乐开始(bgm2, 0.6)
    setTimeout(() => {
        
        fadeElementIn2(加载,2000)
    }, 2000);
    
    setTimeout(() => {
        加载.style.display = 'none';
        
    },4000);

    setTimeout(() => {
        func(funcnumber)
        func2(funcnumber2)     
    }, 4500);
    
}





function 音乐结束(bgm, volume1) {
    let volumecode = 0.6;
    bgm.volume = volumecode;
    let timing = setInterval(() => {
        if (volumecode > volume1) {
            volumecode -= 0.1;
            if (volumecode > 0) {
                bgm.volume = volumecode;
            }
        }

        if (volumecode <= volume1) {
            bgm.pause();
            clearInterval(timing); // 清除定时器
        }
    }, 500);
}


var nowbgm  //当前bgm

function 当前bgm(bgm) {
    nowbgm = bgm
}

function 当前bgm_停止播放() {
    nowbgm.pause()
}

function 当前bgm_开始播放() {
    nowbgm.play()
}


function 音乐播放(bgm) {
    bgm.volume = 0.6
    bgm.play()
    当前bgm(bgm)
}

function 音乐开始(bgm, volume) {
    当前bgm(bgm)
    let volumecode = 0
    bgm.volume = volumecode
    bgm.play()
    let tim = 0
    let timing = setInterval(() => {
        if (tim == 0) {
            if (volumecode < volume) {
                volumecode += 0.1
            }
            bgm.volume = volumecode
        }
        else if (tim == 1) {
            if (volumecode < volume) {
                volumecode += 0.1
            }
            bgm.volume = volumecode
        }
        

        if (volumecode >= volume) {
            clearInterval(timing); // 清除定时器
        }
    }, 500)
    
}



export function 冒险选择_显示() {
    const 冒险选择 = document.querySelector('.冒险选择')
    冒险选择.style.display = 'flex';
}


export function 冒险选择_消失() {
    const 冒险选择 = document.querySelector('.冒险选择')
    冒险选择.style.display = 'none';
}




function 战斗区域_显示() {
    const 战斗区域 = document.querySelector('.战斗区域')
    战斗区域.style.display = 'flex';
    const 战斗区域_遮挡 = document.querySelector('.战斗区域_遮挡')
    战斗区域_遮挡.style.display = 'flex';
}

export function 战斗区域_遮挡_消失() {
    const 战斗区域_遮挡 = document.querySelector('.战斗区域_遮挡')
    战斗区域_遮挡.style.display = 'none';
}

export function 战斗区域_遮挡_显示() {
    const 战斗区域_遮挡 = document.querySelector('.战斗区域_遮挡')
    战斗区域_遮挡.style.display = 'flex';
}


function 战斗开始_名字信息(i,npcname) {
    const npc = document.querySelector('.npc' + i)
    npc.innerHTML = 敌人名字信息_获取(npcname)
}


export function 个人面板_显示() {
    const 个人面板 = document.querySelector('.个人面板')
    个人面板.style.display = 'flex';
    属性刷新()
}

export function 个人面板_消失() {
    const 个人面板 = document.querySelector('.个人面板')
    个人面板.style.display = 'none';
}

export function 部分_背包_显示() {
    const 部分_背包 = document.querySelector('#部分_背包')
    部分_背包.style.display = 'block';
}
export function 部分_人物_显示() {
    const 部分_人物 = document.querySelector('#部分_人物')
    部分_人物.style.display = 'block';
}
export function 部分_其他_显示() {
    const 部分_其他 = document.querySelector('#部分_其他')
    部分_其他.style.display = 'block';
}

export function 部分_背包_消失() {
    const 部分_背包 = document.querySelector('#部分_背包')
    部分_背包.style.display = 'none';
}
export function 部分_人物_消失() {
    const 部分_人物 = document.querySelector('#部分_人物')
    部分_人物.style.display = 'none';
}
export function 部分_其他_消失() {
    const 部分_其他 = document.querySelector('#部分_其他')
    部分_其他.style.display = 'none';
}
export function 部分_装备_显示() {
    const 部分_装备 = document.querySelector('#部分_装备')
    部分_装备.style.display = 'block';
}
export function 部分_装备_消失() {
    const 部分_装备 = document.querySelector('#部分_装备')
    部分_装备.style.display = 'none';
}
export function 部分_技能_显示() {
    const 部分_技能 = document.querySelector('#部分_技能')
    部分_技能.style.display = 'block';
}
export function 部分_技能_消失() {
    const 部分_技能 = document.querySelector('#部分_技能')
    部分_技能.style.display = 'none';
}



export function 冒险中选择_消失() {
    const 冒险中选择 = document.querySelector('.冒险中选择0')
    冒险中选择.style.display = 'none';
}

export function boss生成倒计时_消失() {
    const boss生成倒计时 = document.querySelector('.boss生成倒计时')
    boss生成倒计时.style.display = 'none';
}

export function boss生成倒计时_显示() {
    const boss生成倒计时 = document.querySelector('.boss生成倒计时')
    boss生成倒计时.style.display = 'flex';
}



export function 战斗_攻击_显示() {
    const 战斗_攻击 = document.querySelector('.战斗_攻击')
    战斗_攻击.style.display = 'flex';
}

export function 战斗_技能_显示() {
    const 战斗_技能 = document.querySelector('.战斗_技能')
    战斗_技能.style.display = 'flex';
}

export function 战斗_攻击_消失() {
    const 战斗_攻击 = document.querySelector('.战斗_攻击')
    战斗_攻击.style.display = 'none';
}

export function 战斗_技能_消失() {
    const 战斗_技能 = document.querySelector('.战斗_技能')
    战斗_技能.style.display = 'none';
}


export function bottom_信息_显示 (text) {
    const 信息 = document.querySelector('.信息')
    信息.style.display = 'flex';
    信息.innerHTML = text 
}

export function bottom_信息_消失() {
    const 信息 = document.querySelector('.信息')
    信息.style.display = 'none';
    信息.innerHTML = '' 
}


export function bottom_初始选项_消失() {
    const 战斗 = document.querySelector('.战斗')
    const 道具 = document.querySelector('.道具')
    const 逃跑 = document.querySelector('.逃跑')
    战斗.style.display = 'none';
    道具.style.display = 'none';
    逃跑.style.display = 'none';
}

export function bottom_初始选项_显示() {
    const 战斗 = document.querySelector('.战斗')
    const 道具 = document.querySelector('.道具')
    const 逃跑 = document.querySelector('.逃跑')
    战斗.style.display = 'flex';
    道具.style.display = 'flex';
    逃跑.style.display = 'flex';
}




export function 背景剧情_播放_text(text, 对话框) {
    对话框.innerHTML =  ""
    const 打字1 = document.querySelector('#打字1')
    setTimeout(() => {
        打字1.play()
    }, 100);
    
    let index = 0
    const intervalId = setInterval(() => {
        对话框.innerHTML +=  text[index];
        index++;
        if (index >= text.length) {
            clearInterval(intervalId);
            打字1.pause()
        }
    }, 100);

}

export function 战斗_技能_库_显示() {
    const 战斗_技能_库 = document.querySelector('.战斗_技能_库')
    战斗_技能_库.style.display = 'flex';
}

export function 战斗_技能_库_消失() {
    const 战斗_技能_库 = document.querySelector('.战斗_技能_库')
    战斗_技能_库.style.display = 'none';
}

export function 战斗_技能_库_上下选择_显示() {
    const 技能按钮 = document.querySelectorAll('.技能按钮');
    const 战斗_技能_库_上一个 = document.querySelector('.战斗_技能_库_上一个')
    const 战斗_技能_库_下一个 = document.querySelector('.战斗_技能_库_下一个')
    if (技能按钮.length == 1) {
        战斗_技能_库_下一个.style.display = 'none';
        战斗_技能_库_上一个.style.display = 'none';
    }
    else {
        战斗_技能_库_上一个.style.display = 'flex';
        战斗_技能_库_下一个.style.display = 'flex';
    }
}

export function 战斗_技能_库_上下选择_消失() {
    const 战斗_技能_库_上一个 = document.querySelector('.战斗_技能_库_上一个')
    战斗_技能_库_上一个.style.display = 'none';
    const 战斗_技能_库_下一个 = document.querySelector('.战斗_技能_库_下一个')
    战斗_技能_库_下一个.style.display = 'none';
}



export function 弹窗(text) {
    const 弹窗 = document.querySelector('.弹窗')
    弹窗.style.display = 'flex';
    const 弹窗_text = document.querySelector('.弹窗_text')
    弹窗_text.innerHTML = text
}




export function 弹窗_关闭_函数() {
    const 弹窗 = document.querySelector('.弹窗')
    弹窗.style.display = 'none';
}


export function 奖励弹窗(text1,text2) {
    const 奖励弹窗 = document.querySelector('.奖励弹窗')
    奖励弹窗.style.display = 'flex';
    const texts = [text1, text2];
    for (let i = 0; i < 2; i++) {
        var newtext = document.createElement('div');
        newtext.className = '奖励弹窗_text' + (i + 1);
        newtext.innerHTML = texts[i]

        document.querySelector('.奖励弹窗_box').appendChild(newtext)
        
    }

}



export function 检查升级次数() {
    if (升级次数 == 0) {
        奖励弹窗_关闭_函数()
        游戏继续()
    }
    else {
        升级奖励()
    }

}




export function 奖励弹窗_关闭_函数() {
    const 奖励弹窗 = document.querySelector('.奖励弹窗')
    奖励弹窗.style.display = 'none';
}


var 当前事件 = ''

export function 游戏继续() {
    let number1 = 当前事件
    bottom_信息_消失()
    战斗选项框_消失()
    boss生成倒计时_显示()
    let number2 = 随机事件(number1, 2, 3)
    加载_显示(4,6,1,nowbgm,悬疑bgm, 冒险中选择_显示,number2)
    
}



function fadeElementIn(element, duration) {
    let increment = 0.01; // 每次透明度增加的步长
    let opacity = 0; // 初始透明度为 0
  
    let interval = window.setInterval(function() {
      opacity += increment;
      element.style.opacity = opacity;
  
      if (opacity >= 1) {
        clearInterval(interval); // 清除定时器
      }
    }, duration / 100); // 每 10 毫秒执行一次，总共执行 duration 毫秒
}

function fadeElementIn2(element, duration) {
    let increment = 0.01; // 每次透明度增加的步长
    let opacity = 1; // 初始透明度为 0
  
    let interval = window.setInterval(function() {
      opacity -= increment;
      element.style.opacity = opacity;
  
      if (opacity <= 0) {
        clearInterval(interval); // 清除定时器
      }
    }, duration / 100); // 每 10 毫秒执行一次，总共执行 duration 毫秒
}
  

function 随机敌人生成(str) {
    if (str.length !== 3) {
        throw new Error("输入字符串必须由三个数字组成");
    }

    const firstChar = str.charAt(0);
    const secondChar = parseInt(str.charAt(1));
    const thirdChar = parseInt(str.charAt(2));
    let range = [];

    switch (firstChar) {
        case '0':
            for (let i = 0; i <= 13; i += 2) {
                range.push(i);
            }
            break;
        case '1':
            for (let i = 1; i <= 13; i += 2) {
                range.push(i);
            }
            break;
        case '2':
            for (let i = 0; i <= 13; i++) {
                range.push(i);
            }
            break;
        default:
            throw new Error("第一个字符必须是0、1或2");
    }

    // 确保范围内的第一个和第四个数字是有效的
    if (secondChar < 0 || thirdChar >= range.length || secondChar > thirdChar) {
        throw new Error("第二个和第三个字符必须在有效范围内，并且第二个字符不能大于第三个字符");
    }

    // 在指定范围内生成随机数
    const subRange = range.slice(secondChar, thirdChar + 1);
    const randomIndex = Math.floor(Math.random() * subRange.length);
    return subRange[randomIndex];
}



export function 战斗开始(npcs,npcname) {
    加载_显示(3,5,1, 悬疑bgm, 战斗BGM)
    boss生成倒计时_消失()
    setTimeout(() => {
        战斗区域_显示()
        战斗区域_遮挡_显示() 
        冒险中选择_消失()
        敌人生成(npcs,npcname)
        战斗选项框_显示()
        bottom_初始选项_显示()
    }, 1000);
    
}

var npc数量 = 0

function 敌人生成(npcs, npcname0) {
    const 战斗区域 = document.querySelector('.战斗区域');
    let npcnuber = npcs + 1;
    npc数量 = npcs
    for (let i = 1; i < npcnuber; i++) {
        var newNpc = document.createElement('button');
        newNpc.className = 'npc' + i;

        let npcname = 随机敌人生成(npcname0)


        var 敌人属性 = 敌人属性信息(npcname);
        if (敌人属性) {
            newNpc.setAttribute('data-number', 敌人属性.生命); // 设置初始数字
            (function(敌人属性) {
                newNpc.addEventListener('click', function() {
                    let currentNumber = parseInt(this.getAttribute('data-number'));
                    let 伤害 = medate.me攻击力 >= 敌人属性.防御力 ? medate.me攻击力 - 敌人属性.防御力 : 0;
                    if (伤害 >= currentNumber) {
                        this.setAttribute('data-number', 0); 
                    }
                    else {
                        this.setAttribute('data-number', currentNumber - 伤害); 
                    }
                    受伤1.play()
                    let currentNumber2 = parseInt(this.getAttribute('data-number'));
                    攻击敌人后(i,currentNumber2);
                });
            })(敌人属性);
            敌人属性生成(敌人属性,i)
            战斗区域.appendChild(newNpc);
            敌人属性信息_显示(i,敌人属性);
            战斗开始_名字信息(i, npcname);
        }
    }
}



function 敌人属性生成(敌人属性,i) {
    var npc_属性_存放 = document.querySelector('.npc_属性_存放' + i)
    var 攻击力 = document.querySelector('.攻击力' + i)
    var 防御力 = document.querySelector('.防御力' + i)
    var 体质 = document.querySelector('.体质' + i)
    var 精神 = document.querySelector('.精神' + i)
    var 等级 = document.querySelector('.等级' + i)
    var 生命 = document.querySelector('.生命' + i)
    var 魔力 = document.querySelector('.魔力' + i)
    攻击力.textContent = 敌人属性.攻击力
    防御力.textContent = 敌人属性.防御力
    体质.textContent = 敌人属性.体质
    精神.textContent = 敌人属性.精神
    等级.textContent = 敌人属性.等级
    生命.textContent = 敌人属性.生命
    魔力.textContent = 敌人属性.魔力
}


function 敌人属性信息_显示(i,敌人属性) {
    var tooltip = document.createElement('div')
    tooltip.className = 'npc属性_信息框' + i;
    tooltip.innerHTML = `等级:` + 敌人属性.等级 + '<br>' + `防御力:` + 敌人属性.防御力 + '<br>' + `攻击力:` + 敌人属性.攻击力;

    var 战斗区域_遮挡s = document.createElement('div')
    战斗区域_遮挡s.className = '战斗区域_遮挡' + i;
    const 战斗区域_遮挡 = document.querySelector('.战斗区域_遮挡')
    战斗区域_遮挡.appendChild(战斗区域_遮挡s);
    战斗区域_遮挡s.appendChild(tooltip);
}



function 攻击敌人后(i,currentNumber) {
    var npc_属性_存放 = document.querySelector('.npc_属性_存放' + i)
    var 攻击力 = document.querySelector('.攻击力' + i)
    var 防御力 = document.querySelector('.防御力' + i)
    var 体质 = document.querySelector('.体质' + i)
    var 精神 = document.querySelector('.精神' + i)
    var 等级 = document.querySelector('.等级' + i)
    var 生命 = document.querySelector('.生命' + i)
    var 魔力 = document.querySelector('.魔力' + i)
    let npcs = document.querySelector('.npc' + i)
    生命.textContent = currentNumber
    战斗区域_遮挡_显示()
    npcs.classList.add('shrunk');
    npcs.classList.remove('enlarged');                   
    // 在300毫秒后移除类，以恢复原状
    setTimeout(function() {
        npcs.classList.remove('shrunk');
    }, 300);  
    bottom_信息_显示('')
    敌人死亡判定();
    
}


function 敌人死亡判定() {
    const 生命1 = document.querySelector('.生命1')
    const 生命2 = document.querySelector('.生命2')
    const 生命3 = document.querySelector('.生命3')
    var npc行动 = 'ok' 
    if (parseInt(生命1.textContent) == 0) {
        const npc = document.querySelector(".npc1");
        const 战斗区域_遮挡 = document.querySelector(".战斗区域_遮挡1");
        npc行动 = 'no'
        npc.classList.add('npcdie');
        setTimeout(() => {
            敌人死亡.play()
            npc.style.opacity = '0';
        }, 1000); 
        setTimeout(() => {
            npc.remove();
            战斗区域_遮挡.remove();
            敌人属性删除(1)
            npc数量 = npc数量 - 1
        }, 3000); 
    }
    if (parseInt(生命2.textContent) == 0) {
        const npc = document.querySelector(".npc2");
        const 战斗区域_遮挡 = document.querySelector(".战斗区域_遮挡2");
        npc行动 = 'no'
        npc.classList.add('npcdie');
        setTimeout(() => {
            敌人死亡.play()
            npc.style.opacity = '0';
        }, 1000); 
        setTimeout(() => {
            npc.remove();
            战斗区域_遮挡.remove();
            敌人属性删除(2)
            npc数量 = npc数量 - 1
        }, 3000); 
    }
    if (parseInt(生命3.textContent) == 0) {
        const npc = document.querySelector(".npc3");
        const 战斗区域_遮挡 = document.querySelector(".战斗区域_遮挡3");
        npc行动 = 'no'
        npc.classList.add('npcdie');
        setTimeout(() => {
            敌人死亡.play()
            npc.style.opacity = '0';
        }, 1000); 
        setTimeout(() => {
            npc.remove();
            战斗区域_遮挡.remove();
            敌人属性删除(3)
            npc数量 = npc数量 - 1
        }, 3000); 
    }



    if (生命1.textContent !== '' || 生命2.textContent !== '' || 生命3.textContent !== '') {
        if (npc行动 == 'no') {
            setTimeout(() => {
                敌人攻击()
            }, 3000);
        }
        else if (npc行动 == 'ok') {
            敌人攻击()
        }
        setTimeout(() => {
            if (生命1.textContent === '' && 生命2.textContent === '' && 生命3.textContent === '') {
                bottom_信息_显示('战斗胜利!')
                战斗胜利()
            }
        }, 3000);
        
    }
}


function 战斗胜利() {
    清除奖励信息()
    setTimeout(() => {
        奖励弹窗('获得' + rewardData.exp + '点经验值','获得' + rewardData.coin + '星空币')
    }, 1500);
    medate.me经验 = medate.me经验 + rewardData.exp
    medate.me财富 = medate.me财富 + rewardData.coin
    升级检测()
}






function 敌人属性删除(i) {
    var 攻击力 = document.querySelector('.攻击力' + i)
    var 防御力 = document.querySelector('.防御力' + i)
    var 体质 = document.querySelector('.体质' + i)
    var 精神 = document.querySelector('.精神' + i)
    var 等级 = document.querySelector('.等级' + i)
    var 生命 = document.querySelector('.生命' + i)
    var 魔力 = document.querySelector('.魔力' + i)
    攻击力.textContent = ''
    防御力.textContent = ''
    体质.textContent = ''
    精神.textContent = ''
    等级.textContent = ''
    生命.textContent = ''
    魔力.textContent = ''
}

function 敌人攻击() {
    const npc1 = document.querySelector('.npc1')
    const npc2 = document.querySelector('.npc2')
    const npc3 = document.querySelector('.npc3')
    const 攻击力1 = document.querySelector('.攻击力1')
    const 攻击力2 = document.querySelector('.攻击力2')
    const 攻击力3 = document.querySelector('.攻击力3')
    if (攻击力1 && 攻击力1.textContent != '') {
        setTimeout(() => {
            bottom_信息_显示('敌人行动中')
            let number攻击力 = parseInt(攻击力1.textContent)
            let 伤害 = number攻击力 >= medate.me防御力 ? number攻击力 - medate.me防御力 : 0;
            if (medate.me生命 <= 伤害){
                medate.me生命 = 0
            }
            else {
                medate.me生命 = medate.me生命 - 伤害
            }
            敌人攻击特效(1)
            受伤1.play()
            状态刷新()
            if (攻击力2 && 攻击力2.textContent != '') {
                setTimeout(() => {
                    let number攻击力 = parseInt(攻击力2.textContent)
                    let 伤害 = number攻击力 >= medate.me防御力 ? number攻击力 - medate.me防御力 : 0;
                    if (medate.me生命 <= 伤害){
                        medate.me生命 = 0
                    }
                    else {
                        medate.me生命 = medate.me生命 - 伤害
                    }
                    敌人攻击特效(2)
                    受伤1.play()
                    状态刷新()
                    if (攻击力3 && 攻击力3.textContent != '') {
                        setTimeout(() => {
                            let number攻击力 = parseInt(攻击力3.textContent)
                            let 伤害 = number攻击力 >= medate.me防御力 ? number攻击力 - medate.me防御力 : 0;
                            if (medate.me生命 <= 伤害){
                                medate.me生命 = 0
                            }
                            else {
                                medate.me生命 = medate.me生命 - 伤害
                            }
                            敌人攻击特效(3)
                            受伤1.play()
                            状态刷新()
                            setTimeout(() => {
                                敌人攻击后()
                            }, 1000);
                        }, 1000);
                    }
                    else {
                        setTimeout(() => {
                            敌人攻击后()
                        }, 1000);
                    }
                }, 1000);
            }
            else if (攻击力3 && 攻击力3.textContent != '') {
                setTimeout(() => {
                    let number攻击力 = parseInt(攻击力3.textContent)
                    let 伤害 = number攻击力 >= medate.me防御力 ? number攻击力 - medate.me防御力 : 0;
                    if (medate.me生命 <= 伤害){
                        medate.me生命 = 0
                    }
                    else {
                        medate.me生命 = medate.me生命 - 伤害
                    }
                    敌人攻击特效(3)
                    受伤1.play()
                    状态刷新()
                    setTimeout(() => {
                        敌人攻击后()
                    }, 1000);
                }, 1000);
            }
            else {
                setTimeout(() => {
                    敌人攻击后()
                }, 1000);
            }
        }, 1000);
    }
    
    else if (攻击力2 && 攻击力2.textContent != '') {
        setTimeout(() => {
            bottom_信息_显示('敌人行动中')
            let number攻击力 = parseInt(攻击力2.textContent)
            let 伤害 = number攻击力 >= medate.me防御力 ? number攻击力 - medate.me防御力 : 0;
            if (medate.me生命 <= 伤害){
                medate.me生命 = 0
            }
            else {
                medate.me生命 = medate.me生命 - 伤害
            }
            敌人攻击特效(2)
            受伤1.play()
            状态刷新()
            if (攻击力3 && 攻击力3.textContent != '') {
                setTimeout(() => {
                    let number攻击力 = parseInt(攻击力3.textContent)
                    let 伤害 = number攻击力 >= medate.me防御力 ? number攻击力 - medate.me防御力 : 0;
                    if (medate.me生命 <= 伤害){
                        medate.me生命 = 0
                    }
                    else {
                        medate.me生命 = medate.me生命 - 伤害
                    }
                    敌人攻击特效(3)
                    受伤1.play()
                    状态刷新()
                    setTimeout(() => {
                        敌人攻击后()
                    }, 1000);
                }, 1000);
            }
            else {
                setTimeout(() => {
                    敌人攻击后()
                }, 1000);
            }
        }, 1000);
    }
    
    else if (攻击力3 && 攻击力3.textContent != '') {
        setTimeout(() => {
            bottom_信息_显示('敌人行动中')
            let number攻击力 = parseInt(攻击力3.textContent)
            let 伤害 = number攻击力 >= medate.me防御力 ? number攻击力 - medate.me防御力 : 0;
            if (medate.me生命 <= 伤害){
                medate.me生命 = 0
            }
            else {
                medate.me生命 = medate.me生命 - 伤害
            }
            敌人攻击特效(3)
            受伤1.play()
            状态刷新()
            setTimeout(() => {
                敌人攻击后()
            }, 1000);
        }, 1000);
    }

    
    

    
}


function 敌人攻击后() {
    if (medate.me生命 == 0) {
        死亡结局触发()
    }
    else {
        bottom_信息_消失()
        bottom_初始选项_显示()
    }
    
}



function 敌人攻击特效(number) {
    let npcs = document.querySelector('.npc' + number)
    npcs.classList.add('enlarged');
    npcs.classList.remove('shrunk');
    // 在300毫秒后移除类，以恢复原状
    setTimeout(function() {
        npcs.classList.remove('enlarged');
    }, 300);
}



export function 死亡结局触发() {
    const 死亡end = document.querySelector('.死亡end')
    当前bgm_停止播放()
    死亡end.style.display = 'flex'
    setTimeout(() => {
        死亡end.style.opacity = '0.7';
    }, 500);
    setTimeout(() => {
        死亡end.style.opacity = '0';
        setTimeout(() => {
            死亡end.style.opacity = '0.5';
            死亡结局播放()
            setTimeout(() => {
                死亡end.style.opacity = '1';               
            }, 2000);
        }, 2000);
    }, 3000);
}


function 死亡结局播放() {
    const 死亡end_text = document.querySelector('.死亡end_text');
    const 死亡end_标题 = document.querySelector('.死亡end_标题');

    if (medate.me等级 == 1) {
        let text1 = '世界发生如此巨大的改变';
        let text2 = '只要打败敌人就可以获得力量和财富';
        let text3 = '有人发现珍贵道具一夜暴富';
        let text4 = '有人发现强大神器力量暴增';
        let text5 = '可惜这一切都和你没关系';
        let text6 = '因为你已经死了，死在了第一次冒险';

        const texts = [text1, text2, text3, text4, text5, text6];

        async function playTexts() {
            for (let i = 0; i < texts.length; i++) {
                await new Promise(resolve => setTimeout(() => {
                    背景剧情_播放_text(texts[i], 死亡end_text);
                    resolve();
                }, 5000));
            }
            setTimeout(() => {
                死亡end_text.textContent = '';
                音乐播放(end1);
                死亡end_标题.innerHTML = '[结局1:倒霉蛋]<br>如果不是运气不好,我实在是想不到你是怎么死的';
            }, 4800);
            
        }

        playTexts();
    }
    else if (medate.me等级 >= 2 && medate.me等级 <= 10) {
        let text1 = '世界发生改变已经过去了好几年';
        let text2 = '包括你在内所有人都适应了这些新常识';
        let text3 = '因为副本的原因人们获得了新科技';
        let text4 = '世界正在快速发展中';
        let text5 = '就算在这过程中死了很多人';
        let text6 = '人们也不会去在意那些报告中的数字';

        const texts = [text1, text2, text3, text4, text5, text6];

        async function playTexts() {
            for (let i = 0; i < texts.length; i++) {
                await new Promise(resolve => setTimeout(() => {
                    背景剧情_播放_text(texts[i], 死亡end_text);
                    resolve();
                }, 5000));
            }
            setTimeout(() => {
                死亡end_text.textContent = '';
                音乐播放(end1);
                死亡end_标题.innerHTML = '[结局2:数字]<br>你成为了大时代里一串数字中的一员';
            }, 4800);
            
        }

        playTexts();
    }
    else if (medate.me等级 >= 11 && medate.me等级 <= 30) {
        let text1 = '随着你越来越多次的冒险';
        let text2 = '你的名气也越来越大';
        let text3 = '你的实力也变得不错';
        let text4 = '你的野心也逐渐膨胀';
        let text5 = '但是很可惜你还是没有走出这个小地方';
        let text6 = '并且因为自己的大意永远的留在了这里';

        const texts = [text1, text2, text3, text4, text5, text6];

        async function playTexts() {
            for (let i = 0; i < texts.length; i++) {
                await new Promise(resolve => setTimeout(() => {
                    背景剧情_播放_text(texts[i], 死亡end_text);
                    resolve();
                }, 5000));
            }
            setTimeout(() => {
                死亡end_text.textContent = '';
                音乐播放(end1);
                死亡end_标题.innerHTML = '[结局3:高手]<br>如果只看小地方的话你确实是高手';
            }, 4800);
            
        }

        playTexts();
    }
}

export function 技能使用判断(skill) {
    if (skill == '顺风斩') {
        if (medate.me魔力 >= 5) {
            medate.me魔力 = medate.me魔力 - 5
            状态刷新()
            技能_顺风斩()
        }
        else {
            战斗_技能_库_消失()
            战斗_技能_库_上下选择_消失()
            bottom_信息_显示('魔力不足')
            error1.play()
            setTimeout(() => {
                bottom_初始选项_显示()
                bottom_信息_消失()
            }, 1500);
            
        }
    }
}



export function 技能_顺风斩() {
    const 生命1 = document.querySelector('.生命1');
    const 生命2 = document.querySelector('.生命2');
    const 生命3 = document.querySelector('.生命3');
    攻击1.play()
    var abc = 1
    function 处理NPC(npcSelector, 防御力Selector, 生命Selector) {
        const npc = document.querySelector(npcSelector);
        const 防御力 = parseInt(document.querySelector(防御力Selector).textContent);
        const 生命 = document.querySelector(生命Selector);
        
        if (生命.textContent !== '') {
            let currentNumber = parseInt(npc.dataset.number);
            let 伤害 = medate.me攻击力 >= 防御力 ? medate.me攻击力 - 防御力 : 0;

            if (伤害 >= currentNumber) {
                npc.dataset.number = 0;
            }
            else {
                npc.dataset.number = currentNumber - 伤害;
            }


            if (abc == 1) {
                受伤1.play();
                abc = 2
            }
            else if (abc == 2) {
                受伤1_2.play();
                abc = 3
            }
            else if (abc == 3) {
                受伤1_3.play();
                abc = 1
            }
                                  
            生命.textContent = npc.dataset.number;
            npc.classList.add('shrunk');
            npc.classList.remove('enlarged');

            setTimeout(() => {
                npc.classList.remove('shrunk');
            }, 300);
        }
    }
    setTimeout(() => {
        function 处理NPC顺序(index) {
            if (index >= 3) return; // 终止条件
        
            setTimeout(() => {
                if (index == 0) {
                    处理NPC('.npc1', '.防御力1', '.生命1');
                } else if (index == 1) {
                    处理NPC('.npc2', '.防御力2', '.生命2');
                } else if (index == 2) {
                    处理NPC('.npc3', '.防御力3', '.生命3');
                }
                处理NPC顺序(index + 1); // 递归调用下一个
            }, 100);
        }
        
        // 开始处理
        处理NPC顺序(0);
    }, 700);



    bottom_信息_显示('');
    setTimeout(() => {
        敌人死亡判定();
    }, 1100);

}



function boss生成倒计时_变化(number) {
    if (number.toString().length == 1) {   
        boss生成倒计时_变量 = Number(boss生成倒计时_变量) + 1;
        const boss生成倒计时 = document.querySelector('.boss生成倒计时');
        boss生成倒计时.innerHTML = boss生成倒计时_变量;
    } 

}

function boss生成倒计时_变化_初始化() {
    const boss生成倒计时 = document.querySelector('.boss生成倒计时');
    boss生成倒计时.innerHTML = boss生成倒计时_变量;
}