import {
    文本1,彩蛋1,文本1_回答, 文本2,文本2_回答, 彩蛋1_回答, 彩蛋1_后续1, 彩蛋1_后续1_回答,文本2_后续1,文本2_后续1_回答
} from "./文本.js";

import {
    敌人名字信息
} from "./npcs.js";


export function 敌人名字信息_获取(number) {
    if (number == "0") {
        var name = 敌人名字信息("0")
        return name
    }
}


export function texts(number) {
    if (number == "1") {
        var text = 文本1()
        return text
    }
    else if (number == "彩蛋1") {
        var text = 彩蛋1()
        return text
    }
    else if (number == "彩蛋1_1") {
        var text = 彩蛋1_后续1()
        return text
    }
    else if (number == "2") {
        var text = 文本2()
        return text
    }
    else if (number == '2_1') {
        var text = 文本2_后续1()
        return text
    }
}


export function 文本回答(number) {
    if (number == "1") {
        文本1_回答()
    }
    else if (number == "2") {
        文本2_回答()
    }
    else if (number == "彩蛋1") {
        彩蛋1_回答()
    }
    else if (number == "彩蛋1_1") {
        彩蛋1_后续1_回答()
    }
    else if (number == "2_1") {
        文本2_后续1_回答()
    }
}

function 文本标题(number) {
    if (number == "1") {
        let 标题 =  "<h1>[冒险的开始]</h1><br>"
        return 标题
    }
    else if (number == "2") {
        let 标题 =  "<h1>[昏暗的走廊]</h1><br>"
        return 标题
    }
    else if (number == "彩蛋1") {
        let 标题 =  "<h1>[██████]</h1><br>"
        return 标题
    }
    else if (number == "彩蛋1_1") {
        let 标题 =  "<h1>[██████]</h1><br>"
        return 标题
    }
    else if (number == "2_1") {
        let 标题 =  "<h1>[不再昏暗的走廊]</h1><br>"
        return 标题
    }
}



function 文本回答_函数(number) {
    if (number == "1") {
        文本1_回答_1_函数()
        文本1_回答_2_函数()       
    }
    else if (number == "彩蛋1") {
        彩蛋1_回答_1_函数()
    }
    else if (number == "彩蛋1_1") {
        彩蛋1_后续1_回答_1_函数()
    }
    else if (number == "2") {
        文本2_回答_1_函数()
    }
    else if (number == "2_1") {
        文本2_后续1_回答_1_函数()
    }
}


function 文本1_回答_1_函数() {
    const 文本1_回答_1 = document.querySelector('#文本1_回答_1')
    文本1_回答_1.addEventListener('click',()=>{
        const 冒险中选择_选择 = document.querySelector('.冒险中选择_选择')
        冒险中选择_选择.innerHTML = ""
        冒险中选择_消失()
        setTimeout(() => {
            冒险中选择_显示("2")
        }, 100);
    })
    
}

function 文本1_回答_2_函数() {
    const 文本1_回答_2 = document.querySelector('#文本1_回答_2')
    文本1_回答_2.addEventListener('click',()=>{
        const 冒险中选择_选择 = document.querySelector('.冒险中选择_选择')
        冒险中选择_选择.innerHTML = ""
        冒险中选择_消失()
        setTimeout(() => {
            冒险中选择_显示("2")
        }, 100);
    })
    
}

function 彩蛋1_回答_1_函数() {
    const 彩蛋1_回答_1 = document.querySelector('#彩蛋1_回答_1')
    彩蛋1_回答_1.addEventListener('click',()=>{
        const 冒险中选择_选择 = document.querySelector('.冒险中选择_选择')
        冒险中选择_选择.innerHTML = ""
        setTimeout(() => {
            冒险中选择_显示("彩蛋1_1")
        }, 100);
        
    })
}

function 彩蛋1_后续1_回答_1_函数() {
    const 彩蛋1_后续1_回答_1 = document.querySelector('#彩蛋1_后续1_回答_1')
    彩蛋1_后续1_回答_1.addEventListener('click',()=>{
        const 冒险中选择_选择 = document.querySelector('.冒险中选择_选择')
        冒险中选择_选择.innerHTML = ""
        冒险中选择_消失()
        setTimeout(() => {
            冒险中选择_显示("1")
        }, 500);
        
    })
}

function 文本2_回答_1_函数() {
    const 文本2_回答_1 = document.querySelector('#文本2_回答_1')
    文本2_回答_1.addEventListener('click',()=>{
        const 冒险中选择_选择 = document.querySelector('.冒险中选择_选择')
        冒险中选择_选择.innerHTML = ""
        冒险中选择_消失()
        setTimeout(() => {
            冒险中选择_显示("2_1")
        }, 100);
        
    })
}


function 文本2_后续1_回答_1_函数() {
    const 文本2_后续1_回答_1 = document.querySelector('#文本2_后续1_回答_1')
    文本2_后续1_回答_1.addEventListener('click',()=>{
        const 冒险中选择_选择 = document.querySelector('.冒险中选择_选择')
        冒险中选择_选择.innerHTML = ""
        冒险中选择_消失()
        setTimeout(() => {
            战斗开始(3,0)
        }, 100);
        
    })
}



export function docbgm() {
    const 悬疑bgm = document.querySelector('#悬疑bgm')
    const 城镇 = document.querySelector('#城镇')
    const 热血战斗 = document.querySelector('#热血战斗')
    const 战斗BGM = document.querySelector('#战斗BGM')
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



var name_code = document.querySelector('#name_code')
var me攻击力 = 10
var me防御力 = 5
var me体质 = 10
var me精神 = 10
var me等级 = 1
var me经验 = 0
var me经验上限 = 100
var me生命上限 = me体质 * 10
var me生命 = me生命上限
var me魔力上限 = me精神 * 10
var me魔力 = me魔力上限


export function 属性刷新() {
    const 攻击力 = document.querySelector('.攻击力')
    const 防御力 = document.querySelector('.防御力')
    const 体质 = document.querySelector('.体质')
    const 精神 = document.querySelector('.精神')
    const 等级 = document.querySelector('.等级')
    const 经验值 = document.querySelector('.经验值')
    攻击力.innerHTML += me攻击力
    防御力.innerHTML += me防御力
    体质.innerHTML += me体质
    精神.innerHTML += me精神
    等级.innerHTML += me等级
    状态刷新()
}

function 状态刷新() {
    const css生命 = document.querySelector('.css生命')
    const css魔力 = document.querySelector('.css魔力')
    let mehp = me生命 / me生命上限
    let memaxhp = 50
    css生命.style.width = (memaxhp * mehp) + 'vw'
    let memp = me魔力 / me魔力上限
    let memaxmp = 50
    css魔力.style.width = (memaxmp * memp) + 'vw'
}



export function start() {
    const startbutton = document.querySelector('.startbutton')
    const start = document.querySelector('.start')
    const start1 = document.querySelector('.start1')
    const start2 = document.querySelector('.start2')
    startbutton.addEventListener('click',()=>{
        全屏()
        悬疑bgm.volume = 0.6
        悬疑bgm.play()
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
    let text1_tim = (text1.length * 500)
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
        悬疑bgm.pause()
        城镇.volume = 0.6
        城镇.play()
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



export function 战斗选项框_显示() {
    const bottom = document.querySelector('.bottom')
    bottom.style.display = 'flex';
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
    let volumecode = 0.6
    bgm.volume = volumecode
    let tim = 0
    let timing = setInterval(() => {
        if (tim == 0) {
            if (volumecode > volume1) {
                volumecode -= 0.1
            }
            bgm.volume = volumecode
        }
        else if (tim == 1) {
            if (volumecode > volume1) {
                volumecode -= 0.1
            }
            bgm.volume = volumecode
        }

        if (volumecode = volume1) {
            bgm.pause()
            clearInterval(timing); // 清除定时器
        }
    }, 500)
}



function 音乐开始(bgm, volume) {
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



export function 战斗开始(npcs,npcname) {
    加载_显示(3,5,1, 悬疑bgm, 战斗BGM)
    setTimeout(() => {
        战斗区域_显示()
        冒险中选择_消失()
        敌人生成(npcs,npcname)
        战斗选项框_显示()
    }, 1000);
    
}

function 敌人生成(npcs,npcname) {
    const 战斗区域 = document.querySelector('.战斗区域')
    let npcnuber = npcs + 1
    for (let i = 1; i < npcnuber; i++) {
        var newNpc = document.createElement('button')
        newNpc.className = 'npc' + i; 
        newNpc.setAttribute('data-number',100); // 设置初始数字
        newNpc.addEventListener('click', function() {
            let currentNumber = parseInt(this.getAttribute('data-number'));
            this.setAttribute('data-number', currentNumber - 1); // 数字加1
        });
        战斗区域.appendChild(newNpc);
        战斗开始_名字信息(i,npcname)
    }

    
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



export function 冒险中选择_显示(number) {
    const 冒险中选择 = document.querySelector('.冒险中选择0')
    冒险中选择.style.display = 'flex';
    const 冒险中选择_text = document.querySelector('.冒险中选择_text')
    冒险中选择_text.innerHTML = ""
    setTimeout(() => {
        showText(texts(number),冒险中选择_text, number)
    }, 500);
    
}


export function 冒险中选择_消失() {
    const 冒险中选择 = document.querySelector('.冒险中选择0')
    冒险中选择.style.display = 'none';
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
    信息.textContent = text 
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
  

