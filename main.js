//为他们开始阶段设置状态
//初始化状态
let n ;
loadInitialState();
setInterval(() => {
   makeLeave(getImages(n)).one('transitionend', (e) => {
        makeEnter( $(e.currentTarget))
    }); //移除当前状态，并且在动画结束后将该状态设置为enter状态
    makeCurrent(getImages(n+1))
    n += 1;
}, 3000)

function x(n) {
    if (n > 4) {
        n = n % 4;
        if (0 === n) {
            n = 4;
        }
    }
    return n;
}
function loadInitialState() {
    n=1;
    $(`.images >img:nth-child(${n})`).addClass('current').siblings().addClass('enter')
}
function makeCurrent($node){
    return $node.addClass('current').removeClass('enter')
}
function makeLeave($node){
    return $node.addClass('leave').removeClass('current')
}
function makeEnter($node){
    return $node.addClass('enter').removeClass('leave')
}
function getImages(n) {
    return  $(`.images >img:nth-child(${x(n)})`);
}