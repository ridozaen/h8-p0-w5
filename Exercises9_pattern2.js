function piramidPattern(num){
    var strNum = "";
    for (var i = 0; i <= num; i++){
        for(var j = 0; j <= num; j++){
            strNum = strNum + 2;
        }
    }
    return strNum;
}
console.log (piramidPattern(3));
// console.log(pitamidPattern(3));