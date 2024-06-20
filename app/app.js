import {
    cat, start, start2, 属性刷新, 战斗选项框_显示, 加载_显示, 冒险选择_显示, 开局选项_消失, 冒险选择_消失, 开局选项_显示, 战斗开始
} from "./函数库.js";

const 版本 = "版本:0.00.34"
const 目前版本 = document.querySelector('.目前版本')
目前版本.innerHTML = 版本
console.log(版本)


cat()
start()
start2()
属性刷新()



const 开局选项_城镇 = document.querySelector('.开局选项_城镇')

开局选项_城镇.addEventListener('click',()=>{
    alert("城镇功能未开放!请期待后续版本更新!");
})


const 开局选项_背包 = document.querySelector('.开局选项_背包')

开局选项_背包.addEventListener('click',()=>{
    alert("背包功能未开放!请期待后续版本更新!")
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
        alert("请在中间的方块里输入难度等级!");
    }
    else if (!isNaN(abyssValue) && abyssValue >= 1 && abyssValue <= 30) {
        冒险选择_消失()
        加载_显示(1, 悬疑bgm, 悬疑bgm)
        战斗开始()
    }
    
})






