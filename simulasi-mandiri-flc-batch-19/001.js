/**
Missing Numbers
-------------------
Implementasikan function `missingNumbers` untuk mencari
angka yang hilang dari array `numbers`.
Contoh:
  - Input: [9, 4, 2, 8]
    Output: [1, 3, 5, 6, 7]
  - Input: [8, 3, 2, 1, 7, 5, 6]
    Output: [4]
  - Input: [4, 2, 3, 1]
    Output: []

RULES:
--------
- WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
- Dilarang menggunakan built-in function:
  - .max()
  - .min()
  - .sort()
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )


PSEUDOCODE:
FUNCTION missingNumber with PARAMETER "numbers" of ARRAY{
  IF length "numbers" equals to 0 THEN
      return "numbers";
  END IF

  STORES "maxNumber" with zero value;
  STORES "minNumber" with zero value
  STORES "i" with zero value;

  WHILE i < length of "numbers"
        IF "numbers" of index "i" > maxNumber THEN
            maxNumber set to "numbers" of index "i"
        END-IF
        IF "minNumber" equals to 0 OR "minNumber > ""numbers" of index "i"
            minNumber = numbers[i];
        END IF
        i = i+1;
  END WHILE

  STORES "arrMissing" as ARRAY with empty value
  STORES "j" as "minNumber" + 1
  WHILE j < maxNumber {

    IF "j" not equals numbers of index "i" THEN
      push "j" into ARRAY of "arrMissing"
    END IF
    j = j +1
  }
  return "arrMissing"
}

*/

function missingNumbers (numbers) {
  // max number
  if (numbers.length === 0){
    return numbers;
  }
  var maxNumber = 0;
  var minNumber = 0;
  for (var i = 0; i < numbers.length; i++){
    if (numbers[i] > maxNumber){
      maxNumber = numbers[i];
    }
    if (minNumber ===0 || minNumber > numbers[i]){
      minNumber = numbers[i];
    }
  }
  var arrMissing = [];
  for (var j = minNumber+1; j < maxNumber; j++){
    var isMissing = true;
      for (var k = 0; k < numbers.length; k++){
        if (j === numbers[k]){
          isMissing = false;
          break;
        }
      }
      if (isMissing){
        arrMissing.push(j);
      }
  }
  return arrMissing;
}

console.log(missingNumbers([1, 5, 10, 7, 6])); // [2, 3, 4, 8, 9]
console.log(missingNumbers([10, 1])); // [2, 3, 4, 5, 6, 7, 8, 9]
console.log(missingNumbers([90, 92, 91])); // []
console.log(missingNumbers([60, 54, 50])); // [51, 52, 53, 55, 56, 57, 58, 59]
console.log(missingNumbers([])); // []
