/**
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `viruses` yang dicari.

Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  viruses: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4 viruses detected

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  viruses: 'h|r' ==> berarti mencari h dan r

outuput: 3 viruses detected


RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX


PSEUDOCODE:

FUNCTION "virusCheck" with PARAMETER "str" and "viruses" as STRING
    IF "viruses" is EMPTY THEN
        return "No Virus detected"
    END IF
    STORE "arrViruses" AS ARRAY OF split "viruses" with separator "|"
    STORE "i" with value zero
    STORE "count" with value zero
    WHILE "i" < length of "str"
      STORE "j" with value zero
      WHILE "j" < length of viruses
        IF "str" index of "i" equals to "arrViruses" index of "j" THEN
            count = count + 1
        END IF
        j = j+1;
      END WHILE 
      i = i +1;
    END WHILE

    IF "count" equal to zero THEN
      return "No virus"
    END IF

    return "count"
END FUNCTION

*/

function virusCheck (str, viruses) {
  if (!viruses){
    return "No virus detected";
  }
  var arrViruses = viruses.split("|");
  var count = 0;
  for (var i = 0; i < str.length; i++){
    for (var j = 0; j < arrViruses.length; j++){
      if (str[i].toUpperCase() === arrViruses[j].toUpperCase()){
        count = count+1;
      }
    }
  }
  if (count === 0){
    return "No virus detected"
  }
  return count;
}

console.log(virusCheck('qlD4MZax0raQqew', 'x|0|q')); // 4 viruses detected
console.log(virusCheck('HH0NBP1zRa', 'h|r')); // 3 viruses detected
console.log(virusCheck('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6 viruses detected
console.log(virusCheck('mjBgPlzks', 'm')); // 1 virus detected
console.log(virusCheck('AIn4Ks05bBaa', 'x')); // No virus detected
console.log(virusCheck('RsMFjBUjvIaP')); // No virus detected
console.log(virusCheck('')); // No virus detected
