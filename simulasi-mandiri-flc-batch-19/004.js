/**
Participants Summary
--------------------
Diberikan data dalam bentuk array multidimensi yang berisi
orang-orang yang akan ikut dalam Hackathon yang
diselenggarakan bulan depan.

Implementasikan function `participantsSummary` untuk
mengeluarkan laporan negara mana saja yang mengikuti,
ada berapa orang yang mewakili negara tersebut dan
nama peserta dari negara tersebut

Contoh ada di test cases
*/

function participantsSummary (data) {
  var objNegara = {};
  if (data.length === 0){
    return "No Participan";
  }
  for (var i = 0; i < data.length; i++){
      // console.log(data[i][1]);
      objNegara[data[i][1]] = '';
  }

  for (var key in objNegara){
    var objParticipan = {};
    var arrName = [];
    count = 0;
    for (var j = 0; j < data.length; j++){
      if (key === data[j][1]){
          arrName.push(data[j][0]);
          count++;
      }
    }
    objParticipan.total = count;
    objParticipan.name = arrName

    objNegara[key] = objParticipan;
  }

  return objNegara;
}

// Test cases
console.log(participantsSummary([
  ['Dimitri', 'Russia'],
  ['Heihachi', 'Japan'],
  ['Sergei', 'Russia'],
  ['Kazuya', 'Japan'],
  ['Hwoarang', 'South Korea'],
  ['Jin', 'Japan']
]));
/*
{
  Russia: {
    total: 2,
    names: [ 'Dimitri', 'Sergei' ]
  },
  Japan: {
    total: 3,
    names: [ 'Heihachi', 'Kazuya', 'Jin' ]
  },
  'South Korea': {
    total: 1,
    names: [ 'Hwoarang' ]
  }
}
*/

console.log(participantsSummary([
  ['Suzuka', 'Japan'],
  ['Steve', 'United Kingdom'],
  ['Paul', 'USA']
]));
/*
{
  Japan: {
    total: 1,
    names: [ 'Suzuka' ]
  },
  'United Kingdom': {
    total: 1,
    names: [ 'Steve' ]
  },
  USA: {
    total: 1,
    names: [ 'Paul' ]
  }
}
*/

console.log(participantsSummary([]));
// No participants
