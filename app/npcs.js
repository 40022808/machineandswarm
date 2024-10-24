import {
    boss生成倒计时_变量,
    getRandomInt
} from "./函数库.js";

function 难度设置() {
    const 深渊难度 = document.querySelector('#深渊难度')
    let 难度 = Math.round(Math.exp(深渊难度.value / 3));
    return 难度
}

export function 敌人名字信息(number) {
    if (number == "0") {
        let name = "[黄金甲虫_幼年体]"
        return name
    }
}


export function 敌人属性信息(number) {
    let 难度 = 难度设置()
    if (number == "0") {
        var 敌人攻击力 = (getRandomInt(1 + 难度,3 + 难度) + boss生成倒计时_变量) * 难度;
        var 敌人防御力 = (getRandomInt(1 + 难度,2 + 难度) + boss生成倒计时_变量) * 难度;
        var 敌人体质 = (getRandomInt(2 + 难度,4 + 难度) + boss生成倒计时_变量) * 难度;
        var 敌人精神 = (getRandomInt(2 + 难度,4 + 难度) + boss生成倒计时_变量) * 难度;
        var 敌人等级 = boss生成倒计时_变量;
        var 敌人生命 = 敌人体质 * 10;
        var 敌人魔力 = 敌人精神 * 10;

        return {
            攻击力: 敌人攻击力,
            防御力: 敌人防御力,
            体质: 敌人体质,
            精神: 敌人精神,
            等级: 敌人等级,
            生命: 敌人生命,
            魔力: 敌人魔力
        };
    }
    return null;
}
