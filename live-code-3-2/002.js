/**

How Many Games?
==============

Awtian merupakan pemain Dota yang memiliki waktu terbatas.
Namun Awtian memiliki kemampuan untuk membuat strategi yang menentukan panjang waktu game yang dia mainkan.
Karena Awtian kreatif, dia tidak mau mengulangi penggunaan strategi yang sama dalam setiap permainannya!

Implementasikan function di bawah untuk menentukan jumlah maksimal game yang dapat dimainkan oleh Awtian

function howManyGame(minutes, gamesLength)
  Parameter pertama adalah jam yang dimiliki oleh Awtian, sedangkan parameter kedua adalah waktu yang di habiskan
  untuk mengeksekusi strategi-strategi yang dimiliki Awtian


# Contoh:
Minutes: 200
Daftar strategi Awtian: [200, 50, 10, 60, 40]

Maka function akan mengembalikan 4 karena Awtian bisa menggunakan 4 strategi yang berbeda: 50, 10, 60, dan 40

# Asumsi:
- `minutes` adalah batasan waktu maksimal Awtian bermain sehingga tidak mungkin minus (>= 0)

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode

*/

/* pseudo code
FUNCTION howManyGame with Parameter "minutes" and ARRAY of "gamesLength"
    STORE "countGame" with zero value;
    STORE "gameMinutes" with zero value;
    STORE "counter" with zero value;
    SORT ASCENDING Array of "gamesLength";
    WHILE "counter" < length of ARRAY "gamesLength" 
          IF "minutes" > "gameMinutes" THEN
              COMPUTE "gameMinutes" AS "gameMinutes" + gamesLength of index "counter"
              ADD "countGame" by 1
          END IF
    END WHILE
END FUNCTION
*/

function howManyGame(minutes, gamesLength){
  var countGame =0
  var gameMinutes = 0;
  gamesLength.sort(function(a,b){return a>b});
  for (var i = 0; i < gamesLength.length; i++){
      if (minutes > gameMinutes){
          gameMinutes = gameMinutes + gamesLength[i];
          countGame++
      }
  }
  return countGame;
}

console.log(howManyGame(300, [150, 120, 50, 30, 100])); // 4
console.log(howManyGame(1000, [200, 200, 300, 100, 200, 1000])); // 5
console.log(howManyGame(400, [75, 100, 20, 30])); // 4
console.log(howManyGame(500, [250, 250, 100, 150])); // 3
console.log(howManyGame(0, [10, 300])); // 0
