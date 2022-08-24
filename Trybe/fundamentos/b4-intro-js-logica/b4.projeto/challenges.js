// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return (`${array[array.length - 1]}, ${array[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arr) {
  let highestNumber = Math.max(...arr);
  let counter = 0;
  for (let number of arr) {
    (number === highestNumber) ? (counter += 1) : 0;
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);

  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1Distance > cat2Distance) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(arr) {
  let result = [];
  for (let number of arr) {
    if (number % 3 === 0 && number % 5 === 0) {
      result.push('fizzBuzz');
    } else if (number % 3 === 0) {
      result.push('fizz');
    } else if (number % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let vowel of vowels) {
    let code = vowels.indexOf(vowel) + 1;
    str = str.replaceAll(vowel, code.toString());
  }
  return str;
}

function decode(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let vowel of vowels) {
    let code = vowels.indexOf(vowel) + 1;
    str = str.replaceAll(code.toString(), vowel);
  }
  return str;
}

// Desafio 10
function techList(arr, str) {
  let techListResult = [];
  if (arr.length === 0) return 'Vazio!'; 

  for (let techIndex in arr.sort()) {
    if(arr.length - 1 != techIndex) {
      techListResult.push(
        {
          tech: arr[techIndex],
          name: str
        },
      )
    } else {
      techListResult.push(
        {
          tech: arr[techIndex],
          name: str
        }
      )
    }
  }

  return techListResult
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
