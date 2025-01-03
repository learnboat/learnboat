window.addEventListener("load", function() {
    /**
     * header 生成
     */
    // var tarbar = ``;
    // var header = document.querySelector("header");
    // header.innerHTML = tarbar;
    //
    // /**
    //  * footer生成
    //  */
    // var footer_context = `<div>sads</div>`;
    //
    // var footer = document.querySelector("footer");
    // footer.innerHTML = footer_context;

})


// document.writeln(" <script src=\'https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js\'></script>");
// document.writeln("    <script src=\'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js\'></script>");



function GetQueryString(key) {

    var reg = new RegExp("(^|&)"+key+"=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result?decodeURIComponent(result[2]):null;

}

function GetBaseUrl() {

    return "http://localhost:8084";
}

function getLocalStorage(key){
    return localStorage.getItem(key)
}

function setLocalStorage(key,value){
    return localStorage.setItem(key,value)
}

function checkPhone(phone){

    var myreg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
    if (!myreg.test(phone)) {
        return false;
    } else {
        return true;
    }
}

//
// 替换某子字符串之间
function replacepos(text, start, stop, replacetext) {
    mystr =
        text.substring(0, start) + replacetext + text.substring(stop + 1);
    return mystr;
}

//  产生n位随机数
function randomn(n) {
    let res = "";
    for (
        ;
        res.length < n;
        res += Math.random()
            .toString(36)
            .substr(2)
            .toUpperCase()
    ) { }
    return res.substr(0, n);
}

// 找到子字符串的位置s
function searchSubStr(str, subStr) {
    var positions = [];
    var pos = str.indexOf(subStr);
    while (pos > -1) {
        positions.push(pos);
        pos = str.indexOf(subStr, pos + 1);
    }
    return positions;
}




// json转为map

function jsonToMap(jsonStr) {

    return objToMap(jsonStr);

}

// map转化为对象

function MapToObj(strMap) {

    let obj = Object.create(null);

    for (let [k, v] of strMap) {

        obj[k] = v;

    }

    return obj;

}

// 对象转化为map

function objToMap(obj) {

    let strMap = new Map();

    for (let k of Object.keys(obj)) {

        strMap.set(k, obj[k]);

    }

    return strMap;

}

function showLoading(){
    document.getElementById("zzcLoadingModal").style.display = "block";

}

function closeLoading(){
    document.getElementById("zzcLoadingModal").style.display = "none";

}

// swal
// window.swal =swal;
//     function swal(e){
//         $("body").append('<div style="z-index:99999" id="msg"><div id="msg_top">信息<span class="msg_close">×</span></div><div id="msg_cont">'+e+'</div><div class="msg_close" id="msg_clear">确定</div></div>');
//         $(".msg_close").click(function (){
//             $("#msg").remove();
//         });
//     }


