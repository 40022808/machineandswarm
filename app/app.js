import {
    cat, start, start2, 属性刷新, 战斗选项框_显示, 加载_显示, 冒险选择_显示, 开局选项_消失,冒险选择_消失, 开局选项_显示, 战斗开始,
    冒险中选择_显示, showText, getRandomInt, start1, top_显示,夜色小镇_消失,弹窗_关闭_函数,弹窗, 战斗_攻击_显示,战斗_技能_显示,
    bottom_初始选项_消失,战斗区域_遮挡_消失,战斗区域_遮挡_显示,战斗_攻击_消失,战斗_技能_消失,bottom_信息_显示, docbgm,死亡结局触发,战斗_技能_库_显示,
    战斗_技能_库_上下选择_显示,战斗_技能_库_消失,战斗_技能_库_上下选择_消失,技能使用判断
} from "./函数库.js";



const 版本 = "版本:0.03.241"
const 目前版本 = document.querySelector('.目前版本')
目前版本.innerHTML = 版本
console.log(版本)

const 增加难度按钮 = document.querySelector('#增加难度按钮')
const 减少难度按钮 = document.querySelector('#减少难度按钮')
增加难度按钮.addEventListener('click',()=>{
    if (深渊难度.value == '') {
        深渊难度.value =  parseInt(1)
    }
    else if (深渊难度.value <10) {
        深渊难度.value = parseInt(深渊难度.value) + 1;
    }
    else {
        弹窗("已达到最高难度!")
    }
    
})
减少难度按钮.addEventListener('click',()=>{
    if (深渊难度.value == '') {
        深渊难度.value =  parseInt(1)
    }
    else if (深渊难度.value >1) {
        深渊难度.value = parseInt(深渊难度.value) - 1;
    }
    else {
        弹窗("已达到最低难度!")
    }
    
})



cat()
start()
start1()
start2()
属性刷新()
docbgm()


const 弹窗_关闭 = document.querySelector('.弹窗_关闭')
弹窗_关闭.addEventListener('click',()=>{
    弹窗_关闭_函数()
})


const 开局选项_商店 = document.querySelector('.开局选项_商店')

开局选项_商店.addEventListener('click',()=>{
    弹窗("商店功能未开放!请期待后续版本更新!")
})


const 开局选项_背包 = document.querySelector('.开局选项_背包')

开局选项_背包.addEventListener('click',()=>{
    弹窗("背包功能未开放!请期待后续版本更新!")
})

const 冒险选择_关闭_button = document.querySelector('.冒险选择_关闭_button')

冒险选择_关闭_button.addEventListener('click',()=>{
    冒险选择_消失()
    开局选项_显示(0)
})

const 开局选项_冒险 = document.querySelector('.开局选项_冒险')

开局选项_冒险.addEventListener('click',()=>{
    开局选项_消失()
    冒险选择_显示()
})


const 开始冒险 = document.querySelector('#开始冒险')
const 深渊难度 = document.querySelector('#深渊难度')

开始冒险.addEventListener('click',()=>{
    const abyssValue = parseInt(深渊难度.value); // 将深渊难度的值转换为整数
    if (深渊难度.value == "") {
        弹窗("请先设置难度等级!");
    }
    else if (!isNaN(abyssValue) && abyssValue >= 1 && abyssValue <= 10) {

        冒险选择_消失()
        夜色小镇_消失()
        let 彩蛋开局 = getRandomInt(1, 1000)
        let 彩蛋开局0 = 0
        if (!isNaN(彩蛋开局) && 彩蛋开局 >= 1 && 彩蛋开局 <= 999) {
            彩蛋开局0 = "1"
        }
        else {
            彩蛋开局0 = "0"
        }
        加载_显示(5,10,1,城镇,悬疑bgm, 冒险中选择_显示,彩蛋开局0)
        top_显示()
        
    }
    else {
        弹窗("请正确地设置难度等级!(最低1,最高10!)");
    }
})


const 战斗_选项按钮 = document.querySelector('#战斗_选项按钮')

战斗_选项按钮.addEventListener('click',()=>{
    战斗_攻击_显示()
    战斗_技能_显示()
    bottom_初始选项_消失()
    按钮2.play()
})

const 道具_选项按钮 = document.querySelector('#道具_选项按钮')

道具_选项按钮.addEventListener('click',()=>{
    弹窗("道具功能未开放!请期待后续版本更新!");
})

const 逃跑_选项按钮 = document.querySelector('#逃跑_选项按钮')

逃跑_选项按钮.addEventListener('click',()=>{
    弹窗("逃跑功能未开放!请期待后续版本更新!");
})

const 战斗_攻击_选项按钮 = document.querySelector('#战斗_攻击_选项按钮')

战斗_攻击_选项按钮.addEventListener('click', ()=>{
    战斗区域_遮挡_消失()
    战斗_技能_消失()
    战斗_攻击_消失()
    按钮2.play()
    bottom_信息_显示('选择一个敌人')
})

const 战斗_技能_选项按钮 = document.querySelector('#战斗_技能_选项按钮')

战斗_技能_选项按钮.addEventListener('click', ()=>{
    战斗_技能_消失()
    战斗_攻击_消失()
    战斗_技能_库_显示()
    战斗_技能_库_上下选择_显示()
    按钮2.play()
})

const 顺风斩 = document.querySelector('#顺风斩')

顺风斩.addEventListener('click',()=>{
    战斗_技能_库_消失()
    战斗_技能_库_上下选择_消失()
    技能使用判断('顺风斩')
})

////////////////////////////////////////////////////////////////////////////////////////////////
const 技能按钮 = document.querySelectorAll('.技能按钮');
let currentIndex = 0;
document.getElementById('战斗_技能_库_上一个_选项按钮').addEventListener('click', () => {
    技能按钮[currentIndex].classList.remove('显示');
    currentIndex = (currentIndex - 1 + 技能按钮.length) % 技能按钮.length;
    技能按钮[currentIndex].classList.add('显示');
    按钮2.play()
});

document.getElementById('战斗_技能_库_下一个_选项按钮').addEventListener('click', () => {
    技能按钮[currentIndex].classList.remove('显示');
    currentIndex = (currentIndex + 1) % 技能按钮.length;
    技能按钮[currentIndex].classList.add('显示');
    按钮2.play()
});
////////////////////////////////////////////////////////////////////////////////////////////////




