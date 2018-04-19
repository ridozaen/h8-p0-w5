/**

Virus Percentage
================

Implementasikan function virusPercentage untuk menghitung
persentase virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
- *
- #
- @
- $

# Contoh:
- `input` -> **##@
  output -> 40% *, 40% #, 20% @
- `input` -> **#*##
  output -> 50% *, 50% #

Contoh lain ada di test case

# Asumsi:
- `input` tidak akan pernah kosong
- `input` pasti berisi virus

# Aturan coding:
- DILARANG menggunakan regex

*/

function virusPercentage(input) {
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var count4 = 0;
  var result = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i] === '*') {
      count1++;
    } else if (input[i] === '#') {
      count2++;
    } else if (input[i] === '@') {
      count3++;
    } else {
      count4++;
    }
  }

  if (count1 > 0) {
    result.push((count1 / input.length) * 100 + "% *");
  }
  if (count2 > 0) {
    result.push((count2 / input.length) * 100 + "% #");
  }

  if (count3 > 0) {
    result.push((count3 / input.length) * 100 + "% @");
  }
  if (count4 > 0) {
    result.push((count4 / input.length) * 100 + "% $");
  }

  return result.sort(function (a, b) { return a < b }).join(', ');
}

console.log(virusPercentage('**#*##')); // 50% *, 50% #
console.log(virusPercentage('**######')); // 75% #, 25% *
console.log(virusPercentage('**##@')); // 40% *, 40% #, 20% @
console.log(virusPercentage('@')); // 100% @
console.log(virusPercentage('#$*@')); // 25% #, 25% $, 25% *, 25% @
