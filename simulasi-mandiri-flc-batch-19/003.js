/**
===============
NON PALINDROME
===============

Problem
--------
nonPalindrome adalah sebuah function yang akan menerima satu parameter bertipe string.
Function ini akan mengembalikan array satu dimensi yang berisikan kumpulan kata yang tidak palindrome.

Contoh 1:
input: 'Wow mereka janji bertemu di makam'
output: ['mereka', 'janji', 'bertemu', 'di']

Contoh 2:
input: 'Katak naik honda civic pada malam hari di mimpi Dimitri'
output: ['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']


RULES:
- Tidak boleh menggunakan .reverse(), .join()

**/

function nonPalindrome(sentence) {
  // your code here
  var arrNonPalindrome = [];
  var arrSentence = sentence.split(' ');
  for (var i = 0; i < arrSentence.length; i++){
    if (!(palindrome(arrSentence[i]))){
        arrNonPalindrome.push(arrSentence[i]);
    }
  }
  return arrNonPalindrome;
}

function palindrome(kata){
  var reverse = '';
  for (var i = kata.length-1; i >= 0; i--){
    reverse = reverse + kata[i]
  }

  return kata.toLowerCase() === reverse.toLowerCase();
  // kata = kata.toLowerCase();
  // if (kata.length === 1){
  //   return true;
  // }
  // if (kata[0] !== kata[kata.length - 1]){
  //   return false;
  // }

  // return palindrome(kata.slice(1,kata.length-1));
}

console.log(nonPalindrome('Wow mereka janji bertemu di makam'));
//['mereka', 'janji', 'bertemu', 'di']

console.log(nonPalindrome('Katak naik honda civic pada malam hari di mimpi Dimitri'));
//['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']

console.log(nonPalindrome('kasurrusak kalo dipisah menjadi kasur rusak'));
//['kalo', 'dipisah', 'menjadi', 'kasur', 'rusak']
