/*
2
22
242
2662
281282
*/

function pattern2(high){
    var triangle = [];
    for (var i =0; i < high; i++){
        triangle[i] = new Array(i+1);
        for (var j=0; j < i+1; j++){
            if (j === 0 || j === i){
                triangle[i][j] = 2;
            }else{
                triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
            }
        }
        console.log(triangle[i].join(' '));
    }
}

pattern2(8);