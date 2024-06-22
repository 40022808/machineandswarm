import {
    文本1,彩蛋1,文本1_回答
} from "./文本.js";


export function texts(number) {
    if (number == 1) {
        var text = 文本1()
        return text
    }
    else if (number == 9999) {
        var text = 彩蛋1()
        return text
    }
}


export function 文本回答(number) {
    if (number == 1) {
        文本1_回答()
    }
}








export function docbgm() {
    const 悬疑bgm = document.querySelector('#悬疑bgm')
    const 城镇 = document.querySelector('#城镇')
    const 热血战斗 = document.querySelector('#热血战斗')
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
        悬疑bgm.volume = 0.6
        悬疑bgm.play()
        start.style.display = 'none';
        fadeElementIn(start2, 5000)
        start2.style.display = 'block';
        
    })
}


export function start1() {
    const start1 = document.querySelector('.start1')
    const start2 = document.querySelector('.start2')
    start1.style.display = 'none';
    fadeElementIn(start2, 5000)
    start2.style.display = 'block';
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
        开局选项_显示()
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
    starPosition(120)
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
        let top = Math.floor(Math.random() * window.innerHeight/2)
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




export function 开局选项_显示() {
    const 开局选项 = document.querySelector('.开局选项')
    setTimeout(() => {
        fadeElementIn(开局选项, 2000)
    }, 4000);
    开局选项.style.display = 'flex';
}


export function 开局选项_消失() {
    const 开局选项 = document.querySelector('.开局选项')
    开局选项.style.display = 'none';
}


function 默认名字() {
    if (name_code.value == '') {
        name_code.value = "忘记输入自己名字的冒险者"
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


export function 加载_显示(count, bgm, bgm2, func, funcnumber) {
    let volumecode = 0.6
    const 加载 = document.querySelector('.加载')
    加载.style.opacity = 1;
    加载.style.display = 'flex';
    const 加载文字 = document.querySelector('.加载文字')
    加载文字.textContent = `加载中`;
    let tim = getRandomInt(5 , 16)
    let tim2 = tim * 1000
    let timing = setInterval(() => {
        if (count == 0) {
            加载文字.textContent = `加载中`;
            count = 1
            if (volumecode > 0) {
                volumecode -= 0.1
            }
            bgm.volume = volumecode
            
        }
        else if (count == 1) {
            加载文字.textContent = `加载中.`;
            count = 2
            if (volumecode > 0) {
                volumecode -= 0.1
            }
            bgm.volume = volumecode
            
        }
        else if (count == 2) {
            加载文字.textContent = `加载中..`;
            count = 3
            if (volumecode > 0) {
                volumecode -= 0.1
            }
            bgm.volume = volumecode
            
        }
        else if (count == 3) {
            加载文字.textContent = `加载中...`;
            count = 0
            if (volumecode > 0) {
                volumecode -= 0.1
            }
            bgm.volume = volumecode
            
        }
    }, 500);

    if (volumecode == 0) {
        bgm.pause()
    }
    setTimeout(() => {
        count = 4
        加载_消失(bgm2, func, funcnumber)
        clearInterval(timing); // 清除定时器
        加载文字.textContent = '加载完成';
    }, tim2);
}

export function 加载_消失(bgm2, func, funcnumber) {

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
    }, 4500);
    
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



export function 战斗开始() {
    const 战斗 = document.querySelector('.战斗')
    战斗.style.display = 'flex';
    战斗开始_名字信息()
}

function 战斗开始_名字信息() {
    const me = document.querySelector('.me')
    me.innerHTML = name_code.value
}



export function 冒险中选择_显示(number) {
    const 冒险中选择 = document.querySelector('.冒险中选择0')
    冒险中选择.style.display = 'flex';
    const 冒险中选择_text = document.querySelector('.冒险中选择_text')
    setTimeout(() => {
        showText(texts(number),冒险中选择_text, number)
        
    }, 1000);
    
}




// 逐字显示文本
export function showText(text, 对话框, number) {
    let index = 0
    const intervalId = setInterval(() => {
        对话框.innerHTML +=  text[index];
        index++;
        if (index >= text.length) {
            clearInterval(intervalId);
            setTimeout(() => {
                文本回答(number)
            }, 300);
        }
    }, 100);

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
  

