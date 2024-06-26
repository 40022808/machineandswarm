import {
    cat, start, start2, 属性刷新, 战斗选项框_显示, 加载_显示, 冒险选择_显示, 开局选项_消失,冒险选择_消失, 开局选项_显示, 战斗开始,
    冒险中选择_显示, showText, texts, getRandomInt, start1, top_显示,夜色小镇_消失,弹窗_关闭_函数,弹窗
} from "./函数库.js";



const 版本 = "版本:0.02.11"
const 目前版本 = document.querySelector('.目前版本')
目前版本.innerHTML = 版本
console.log(版本)


cat()
start()
start1()
start2()
属性刷新()



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
        弹窗("请在中间的方块里输入难度等级!");
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
            彩蛋开局0 = "9999"
        }
        加载_显示(1,城镇,悬疑bgm, 冒险中选择_显示,彩蛋开局0)
        top_显示()
        
    }
    else {
        弹窗("请在中间的方块里正确地输入难度等级!");
    }
})






    









