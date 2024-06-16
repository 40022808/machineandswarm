

export function cat() {
    console.log(`
------------------------------------------------------------

⣿⣿⣿⠟⠛⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢋⣩⣉⢻⣿⣿⣿              
⣿⣿⣿⠀⣿⣶⣕⣈⠹⠿⠿⠿⠿⠟⠛⣛⢋⣰⠣⣿⣿⠀⣿⣿⣿              
⣿⣿⣿⡀⣿⣿⣿⣧⢻⣿⣶⣷⣿⣿⣿⣿⣿⣿⠿⠶⡝⠀⣿⣿⣿              
⣿⣿⣿⣷⠘⣿⣿⣿⢏⣿⣿⣋⣀⣈⣻⣿⣿⣷⣤⣤⣿⡐⢿⣿⣿               
⣿⣿⣿⣿⣆⢩⣝⣫⣾⣿⣿⣿⣿⡟⠿⠿⠦⠀⠸⠿⣻⣿⡄⢻⣿
⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣾⣿⣿⣿⣿⠇⣼⣿       恭喜你发现了
⣿⣿⣿⣿⣿⣿⡄⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣰⣿⣿       彩蛋猫，只要  
⣿⣿⣿⣿⣿⣿⠇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⣿⣿⣿       带它找到主人
⣿⣿⣿⣿⣿⠏⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿       你就可以获得
⣿⣿⣿⣿⠟⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿       神秘奖励!
⣿⣿⣿⠋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⣿⣿⣿
⣿⣿⠋⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿

------------------------------------------------------------
`)

}

var name_code = document.querySelector('#name_code')
var me攻击力 = 10
var me防御力 = 5
var me体质 = 10
var me精神 = 10
var me等级 = 1
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
    攻击力.innerHTML += me攻击力
    防御力.innerHTML += me防御力
    体质.innerHTML += me体质
    精神.innerHTML += me精神
    等级.innerHTML += me等级
}



export function start() {
    const startbutton = document.querySelector('.startbutton')
    const start = document.querySelector('.start')
    const start2 = document.querySelector('.start2')
    startbutton.addEventListener('click',()=>{
        start.style.display = 'none';
        start2.style.display = 'block';
    })
}


export function start2() {
    const startbutton = document.querySelector('.确定')
    const start2 = document.querySelector('.start2')
    const 游戏 = document.querySelector('.游戏')
    startbutton.addEventListener('click',()=>{
        默认名字()
        个人信息_名字()
        start2.style.display = 'none';
        游戏.style.display = 'block';
    })
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