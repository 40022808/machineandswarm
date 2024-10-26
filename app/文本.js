import{
    boss生成倒计时_变量,
    medate,rewardData,状态刷新
}from "./函数库.js";



function 奖励重置() {
    rewardData.exp = 0
    rewardData.coin = 0
}


export function 文本0() {
    let text = 
    `
    当你进入副本的时候，你突然感觉有什么东西盯着你。还没等你反应过来，你就失去了意识。
    当你醒来时却发现自己身处在一片漆黑的空间，并且浑身动弹不得。突然黑暗中睁开了无数双眼睛，祂们用着无论大小还是外观都如同星辰般的瞳孔盯着你!!!
    `;
    return text
}

export function 文本0_回答() {
    const 冒险中选择_选择 = document.querySelector('.冒险中选择_选择')
    冒险中选择_选择.innerHTML = 
    `
    <button class="冒险中选择_选择_回答" id="文本0_回答_1">......</button>
    `
}



export function 文本0_后续1() {
    let text = 
    `
    你看着这些目光感觉到自己的意识逐渐破碎，就在你快承受不住的时候，你发现回来了。
    `;
    return text
}


export function 文本0_后续1_回答() {
    const 冒险中选择_选择 = document.querySelector('.冒险中选择_选择')
    冒险中选择_选择.innerHTML = 
    `
    <button class="冒险中选择_选择_回答" id="文本0_后续1_回答_1">进入副本</button>
    `
}



export function 文本1() {
    let text = 
    `
    你成功的进入了冒险副本，然后你看到了两扇门。
    `;
    return text
}



export function 文本1_回答() {
    const 冒险中选择_选择 = document.querySelector('.冒险中选择_选择')
    冒险中选择_选择.innerHTML = 
    `
    <button class="冒险中选择_选择_回答" id="文本1_回答_1">进入右边的门</button>
    <button class="冒险中选择_选择_回答" id="文本1_回答_2">进入左边的门</button>
    
    `
}




export function 文本2() {
    let text = 
    `
    你打开了门，看到了一个昏暗的走廊。你发现黑暗中还有些身影一动不动，你的旁边有一个疑似照明设备的开关...
    `;
    return text
}


export function 文本2_回答() {
    const 冒险中选择_选择 = document.querySelector('.冒险中选择_选择')
    冒险中选择_选择.innerHTML = 
    `
    <button class="冒险中选择_选择_回答" id="文本2_回答_1">打开开关，查看那些身影</button>
    <button class="冒险中选择_选择_回答" id="文本2_回答_2">直接在黑暗中前进</button>
    
    `
}


export function 文本2_后续1() {
    let text = 
    `
    你打开了照明设备，发现那些身影是危险的敌人!
    `;
    return text
}


export function 文本2_后续1_回答() {
    const 冒险中选择_选择 = document.querySelector('.冒险中选择_选择')
    冒险中选择_选择.innerHTML = 
    `
    <button class="冒险中选择_选择_回答" id="文本2_后续1_回答_1">准备战斗!</button>
    
    `
}

export function 文本2_后续1_奖励(rewar) {
    奖励重置()
    rewardData.exp = Math.round(10 * (1 + (boss生成倒计时_变量 / 10)))
    rewardData.coin = Math.round(6 * (1 + (boss生成倒计时_变量 / 10)))
}



export function 文本2_后续2() {
    let text = 
    `
    你强忍着心中的恐惧向前走，结果那些身影向你发动了攻击!(-50%的血量)
    `;
    return text
}

export function 文本2_后续2_回答() {
    const 冒险中选择_选择 = document.querySelector('.冒险中选择_选择')
    冒险中选择_选择.innerHTML = 
    `
    <button class="冒险中选择_选择_回答" id="文本2_后续2_回答_1">准备战斗!</button>
    
    `
}


export function 文本2_后续2_效果() {
    medate.me生命 = Math.round(medate.me生命 / 2);
    状态刷新()
}

export function 文本2_后续2_奖励(rewar) {
    奖励重置()
    rewardData.exp = Math.round(10 * (1 + (boss生成倒计时_变量 / 10)))
    rewardData.coin = Math.round(6 * (1 + (boss生成倒计时_变量 / 10)))
}


export function 文本2_后续3() {
    let text = 
    `
    你强忍着心中的恐惧向前走，你发现那些身影只是雕像
    `;
    return text
}

export function 文本2_后续3_回答() {
    const 冒险中选择_选择 = document.querySelector('.冒险中选择_选择')
    冒险中选择_选择.innerHTML = 
    `
    <button class="冒险中选择_选择_回答" id="文本2_后续3_回答_1">继续前进</button>
    
    `
}

export function 文本3() {
    let text = 
    `
    在你的面前出现了两扇门，你发现只要打败门里的敌人就可以拿到奖励。不过只能选择其中之一。
    `;
    return text
}

export function 文本3_回答() {
    const 冒险中选择_选择 = document.querySelector('.冒险中选择_选择')
    冒险中选择_选择.innerHTML = 
    `
    <button class="冒险中选择_选择_回答" id="文本3_回答_1">选择智慧之门，获得经验值</button>
    <button class="冒险中选择_选择_回答" id="文本3_回答_2">选择财富之门，获得星空币</button>
    
    `
}

export function 文本3_奖励(rewar) {
    奖励重置()
    if (rewar == 1) {
        rewardData.exp = Math.round(30 * (1 + (boss生成倒计时_变量 / 10)))

    }
    else if (rewar == 2) {
        rewardData.coin = Math.round(18 * (1 + (boss生成倒计时_变量 / 10)))
    }
}