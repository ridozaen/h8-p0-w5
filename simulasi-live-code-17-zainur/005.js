/*

=======================
Initial Object Grouping
=======================

[INSTRUCTION]

Disediakan sebuah function initialObjectGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialObjectGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
sebuah object.


[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke object berdasarkan huruf Awal nama

{
  B: ['Budi', 'Badu'],
  J: ['Joni', 'Jono']
}

[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex

*/

function initialObjectGrouping(studentsArr) {
  var prefix = {};
  for (var i = 0; i < studentsArr.length; i++) {
    prefix[studentsArr[i].charAt(0)] = '';
  }
  for (var key in prefix) {
    var arrRest = [];
    for (var i = 0; i < studentsArr.length; i++) {
      if (key === studentsArr[i].charAt(0)) {
        arrRest.push(studentsArr[i]);
      }
    }
    prefix[key] = arrRest;
  }
  return prefix;
}

console.log(initialObjectGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/

console.log(initialObjectGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/

console.log(initialObjectGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
}
*/
