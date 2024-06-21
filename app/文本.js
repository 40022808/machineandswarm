



export function 文本1() {
    let text = 
    `
    你成功的进入了冒险副本，然后你看到了两扇门。
    `;
    return text
}

export function 彩蛋1() {
    let text = 
    `
    当你进入副本的时候，你突然感觉有什么东西盯着你。还没等你反应过来，你就失去了意识。
    当你醒来时却发现自己身处在一片漆黑的空间，并且浑身动弹不得。突然黑暗中睁开了无数双眼睛，祂们用着无论大小还是外观都如同星辰般的瞳孔盯着你!!!
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