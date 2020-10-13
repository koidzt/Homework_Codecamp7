function answer1() {
  let num = "";
  for (let i = 2; i <= 100; i++) {
    let a, b;
    let c = 0;
    for (let j = 2; j <= i; j++) {
      a = i / j;
      b = i % j;
      if (a >= 1 && b === 0) {
        c++;
      }
    }
    if (c === 1) {
      num += `${i}  `;
    }
  }
  console.log('1 : n = 100\n', num);
  alert(`1 : n = 100\n${num}`);
}

function answer2() {
  let n = prompt('enter number');
  let num = "";
  for (let i = 2; i <= n; i++) {
    let a, b;
    let c = 0;
    for (let j = 2; j <= i; j++) {
      a = i / j;
      b = i % j;
      if (a >= 1 && b === 0) {
        c++;
      }
    }
    if (c === 1) {
      num += `${i}  `;
    }
  }
  console.log('2 : n = ', n, '\n', num);
  alert(`2 : n = ${n}\n${num}`);
}

function answer3() {
  let n = prompt('enter number');
  let num = [];
  let ans = "";
  for (let i = 2; i <= n * 1000; i++) {
    let a, b;
    let c = 0;
    for (let j = 2; j <= i; j++) {
      a = i / j;
      b = i % j;
      if (a >= 1 && b === 0) {
        c++;
      }
    }
    if (c === 1) {
      num = [...num, i];
    }
  }
  for (let i = 0; i < n; i++) {
    ans += `${num[i]}  `;
  }
  console.log('3 : n = ', n, '\n', ans);
  alert(`3 : n = ${n}\n${ans}`);
}

function answer4() {
  let n = prompt('enter number');
  let num = [];
  let ans = 0;
  for (let i = 2; i <= n * 1000; i++) {
    let a, b;
    let c = 0;
    for (let j = 2; j <= i; j++) {
      a = i / j;
      b = i % j;
      if (a >= 1 && b === 0) {
        c++;
      }
    }
    if (c === 1) {
      num = [...num, i];
    }
  }
  for (let i = 0; i < n; i++) {
    ans += num[i];
  }
  console.log('4 : n = ', n, '\n', ans);
  alert(`4 : n = ${n}\n${ans}`);
}

function answer5() {
  let n = prompt('enter number');
  let sum = 0;
  let mess = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      sum += i;
      mess += `${i} + `;
    }
  }
  console.log('5 : n = ', n, '\n', mess);
  alert(`5 : n = ${n}\n${sum}`);
}

function answer6() {
  let n = prompt('enter number');
  let sum = 0;
  let mess = "";
  for (let i = 1; i <= n; i++) {
    let a, b;
    let c = 0;
    for (let j = 2; j <= i; j++) {
      a = i / j;
      b = i % j;
      if (a >= 1 && b === 0) {
        c++;
      }
    }
    if (c === 1) {
      sum += -i;
      mess += `-${i}`;
    }
    else {
      sum += i;
      mess += `+${i}`;
    }
  }
  console.log('6 : n = ', n, '\n', sum, '\n', mess);
  alert(`6 : n = ${n}\n${sum}`);
}

function answer7() {

}

function answer8() {

}

function answer9() {

}

function answer10() {

}

function answer11() {

}

function answer12() {

}

function answer13() {

}

function answer14() {

}

function answer15() {

}
