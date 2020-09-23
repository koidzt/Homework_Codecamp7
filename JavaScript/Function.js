function answer1() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = 0; i < n; i++) message += '*';
    alert(message);
}

function answer2() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = 0; i < n; i++) {
        message += '\n';
        for (let j = 0; j < n; j++) message += '*';
    }
    alert(message);
}

function answer3() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = 0; i < n; i++) {
        message += '\n';
        for (let j = 1; j <= n; j++) {
            message += j;
        }
    }
    alert(message);
}

function answer4() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            message += `${i}`;
        }
        message += '\n';
    }
    alert(message);
}

function answer5() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= n; j++) {
            message += `${i}`;
        }
        message += '\n';
    }
    alert(message);
}

function answer6() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    let c = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            message += `${c}`;
            c++;
        }
        message += '\n';
    }
    alert(message);
}

function answer7() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    let c = n * n;
    for (let i = n; i >= 1; i--) {
        for (let j = n; j >= 1; j--) {
            message += `${c}`;
            c--;
        }
        message += '\n';
    }
    alert(message);
}

function answer8() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = 0; i < n; i++) {
        message += `${i * 2}` + `\n`;
    }
    alert(message);
}

function answer9() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = 1; i <= n; i++) {
        message += `${i * 2}` + `\n`;
    }
    alert(message);
}

function answer10() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            message += `${i * j}`;
        }
        message += `\n`;
    }
    alert(message);
}

function answer11() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === j) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        message += `\n`;
    }
    alert(message);
}

function answer12() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= n; j++) {
            if (i === j) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        message += `\n`;
    }
    alert(message);
}

function answer13() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j > i) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        message += `\n`;
    }
    alert(message);
}

function answer14() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= n; j++) {
            if (j > i) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        message += `\n`;
    }
    alert(message);
}

function answer15() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    let i;
    for (i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j > i) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        message += `\n`;
    }
    for (i = i - 2; i >= 1; i--) {
        for (let j = 1; j <= n; j++) {
            if (j > i) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        message += `\n`;
    }
    alert(message);
}

function answer16() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    let i;
    for (i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j > i) {
                message += `-`;
            } else {
                message += `${i}`;
            }
        }
        message += `\n`;
    }
    for (i = i - 2; i >= 1; i--) {
        for (let j = 1; j <= n; j++) {
            if (j > i) {
                message += `-`;
            } else {
                message += `${i}`;
            }
        }
        message += `\n`;
    }
    alert(message);
}

function answer17() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j + i <= n) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        message += `\n`;
    }
    alert(message);
}

function answer18() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j < i) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        message += `\n`;
    }
    alert(message);
}

function answer19() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j + i <= n) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        message += `\n`;
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j < i) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        message += `\n`;
    }
    alert(message);
}

function answer20() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    let c = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j + i <= n) {
                message += `-`;
            } else {
                message += `${c}`;
                c++;
            }
        }
        message += `\n`;
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j < i) {
                message += `-`;
            } else {
                message += `${c}`;
                c++;
            }
        }
        message += `\n`;
    }
    alert(message);
}

function answer21() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j + i <= n) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        for (let j = 2; j <= n; j++) {
            if (j > i) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        message += `\n`;
    }
    alert(message);
}

function answer22() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < n; j++) {
            if (j < i) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        for (let j = n; j >= 1; j--) {
            if (j < i) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        message += `\n`;
    }
    alert(message);
}

function answer23() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j + i <= n) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        for (let j = 2; j <= n; j++) {
            if (j > i) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        message += `\n`;
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < n; j++) {
            if (j < i) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        for (let j = n; j >= 1; j--) {
            if (j < i) {
                message += `-`;
            } else {
                message += `*`;
            }
        }
        message += `\n`;
    }
    alert(message);
}

function answer24() {
    let message = '';
    let n = +prompt('Please enter number for n', '');
    let c = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j + i <= n) {
                message += `-`;
            }
            else {
                message += `${c}`;
                c++;
            }
        }
        for (let j = 2; j <= n; j++) {
            if (j > i) {
                message += `-`;
            } else {
                message += `${c}`;
                c++;
            }
        }
        message += `\n`;
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < n; j++) {
            if (j < i) {
                message += `-`;
            } else {
                message += `${c}`;
                c++;
            }
        }
        for (let j = n; j >= 1; j--) {
            if (j < i) {
                message += `-`;
            } else {
                message += `${c}`;
                c++;
            }
        }
        message += `\n`;
    }
    alert(message);
}