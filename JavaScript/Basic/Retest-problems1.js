function answer1() {
  let a = +prompt('enter num of a');
  let b = +prompt('enter num of b');
  let n = (a < b) ? a : b;
  let con = 1;
  for (let i = 1; i <= n; i++) {
    if (a % i == 0) {
      if (b % i == 0) {
        con = i;
      }
    }
  }
  let c = a / con;
  let d = b / con;
  alert(`a : ${a} \n b : ${b} \n a/b : ${c}/${d}`);
}

function answer2() {
  let sum = 0;
  for (let i = 160; i <= 2048; i++) {
    sum += i;
  }
  alert(`sum : ${sum}`);
}

function answer3() {
  let sum = 0;
  for (let i = 163; i <= 815; i += 4) {
    sum += i;
  }
  alert(`sum : ${sum}`);
}

function answer4() {
  let a, b, c, d, message = '';
  let n = +prompt('Please enter number for n', '');
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      a = 0;
      b = 0;
      c = 0;
    }
    else if (i === 2) {
      b = 1;
    }
    else {
      switch (i % 3) {
        case 0:
          c = b + a;
          break;
        case 1:
          a = c + b;
          break;
        default:
          b = a + c;
          break;
      }
    }

    if (a > b) {
      if (a > c) {
        d = a;
      }
      else {
        d = c;
      }
    }
    else {
      if (b > c) {
        d = b;
      }
      else {
        d = c;
      }
    }
    message = message + `${d}, `;
  }
  console.log(message);
  alert(d);
}

function answer5() {
  let sum = 0;
  for (let i = 1; i <= 18954; i++) {
    if (i % 2 === 1) {
      sum = sum + i;
    }
    else {
      sum = sum - i;
    }
  }
  alert(sum);
}

function answer6() {
  let sum = 0;
  for (let i = 1; i <= 87; i++) {
    sum = sum + (i * (i + 1));
  }
  alert(sum);
}

function answer7() {
  let sum = 0;
  for (let i = 1; i <= 87; i++) {
    sum = sum + (i * (i + 1) * (i + 2));
  }
  alert(sum);
}

function answer8() {
  let sum = 0;
  for (let i = 1; i <= 155; i = i + 2) {
    sum = sum + (i * (i + 2) * (i + 4));
  }
  alert(sum);
}

function answer9() {
  let sum = 0;
  for (let i = 1; i <= 155; i = i + 2) {
    sum = sum + (i * (i + 2) * (i + 4));
  }
  alert(sum);
}

function answer10() {
  let num = Infinity;
  let min = num;
  while (num !== `stop`) {
    num = prompt('enter number');
    if (min >= num) {
      min = num;
    }
  }
  alert(min);
}


function answer11() {
  let num = Infinity;
  let min1 = num;
  let min2 = num;
  let min3 = num;
  while (num !== `stop`) {
    num = prompt('enter number');
    if (min1 >= num) {
      min1 = num;
    }
    if (min2 > min1) {
      if (min2 >= num) {
        min2 = num;
      }
    }
    if (min3 > min2) {
      if (min3 >= num) {
        min3 = num;
      }
    }
  }
  alert(`${min1},${min2},${min3}`);
}

function answer12() {
  let n = prompt('enter number');
  let min = n;
  while (n !== null && n !== 'stop') {
    min = (n < min) ? n : min;
    n = prompt('enter number');
  }
  alert(`min : ${min}`);
}

function answer13() {
  let n = prompt('enter number');
  let min = n;
  let max = n;
  while (n !== null && n !== 'stop') {
    if (n < min) {
      min = n;
    } else if (n > max) {
      max = n;
    }
    n = prompt('enter number');
  }
  alert(`min : ${min}\nmax : ${max}`);
}

function answer14() {
  let n = prompt('enter number');
  let count = 0;
  let sum = 0;
  while (n !== null && n !== 'stop') {
    count++;
    sum += Number(n);
    n = prompt('enter number');
  }
  alert(`avg : ${sum / count}`);
}

function answer15() {

}
