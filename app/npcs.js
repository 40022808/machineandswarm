


export function 敌人名字信息(number) {
    if (number == "0") {
        let name = "[黄金甲虫_幼年体]"
        return name
    }
}


export function 敌人属性信息(number) {
    if (number == "0") {
        var 敌人攻击力 = 2;
        var 敌人防御力 = 2;
        var 敌人体质 = 10;
        var 敌人精神 = 10;
        var 敌人等级 = 1;
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
