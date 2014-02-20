/**
 * Created by 肉仔强 on 14-2-20.
 */

function changeStyle(num) {
    var arrs = document.getElementsByTagName('img');
    var v = num;
    for(var i = 0; i < arrs.length; i++) {
    if (v==1) {
    arrs[i].setAttribute('class', 'img-circle')
    } else if(v == 2) {
    arrs[i].setAttribute('class', 'img-rounded')
    } else if (v == 3) {
    arrs[i].setAttribute('class', 'img-thumbnail')
    }
}
}
