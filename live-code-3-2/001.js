/**

Drone Position
==============

Implementasikan function dronePosition untuk mencari koordinat drone yang
ada di dalam `grid`. Drone akan direpresentasikan sebagai karakter '*'.

Format koordinat: <baris>, <kolom>

# Asumsi:
- Drone ('*') selalu berjumlah 1 atau 0, tidak mungkin ada drone lain

Contoh input ada di test case.

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode

*/

/* Pseudo code
FUNCTION DRONE POSITION with INPUT Array multidimensi of Drone
  STORE "counter" with value 0
  WHILE "counter" < length of "grid"
      STORE "counter1" with value 0
      WHILE "counter1" < length of "grid" index of "counter"
          STORE "counter2" with value 0
          WHILE "counter2" length of "grid" index "counter" and index "counter1"
              IF "grid" index [counter] [counter1] [counter2] THEN
                  return [counter] , [Counter2]
              END IF
          END WHILE
      END WHILE
      return "No drone"
  END WHILE

END FUNCTION
*/

function dronePosition(grid) {
  // Code here
  // var position = '';
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      for (var k = 0; k < grid[i][j].length; k++) {
        if (grid[i][j][k] === "*") {
          return i + ", " + k;
        }
      }
    }
  }
  return "No drone";
}

console.log(dronePosition([
  ['###'],
  ['###'],
  ['##*']
])); // 2, 2

console.log(dronePosition([
  ['###'],
  ['#*#'],
  ['###']
])); // 1, 1

console.log(dronePosition([
  ['##*'],
  ['###'],
  ['###']
])); // 0, 2

console.log(dronePosition([
  ['###'],
  ['###'],
  ['###']
])); // No drone
