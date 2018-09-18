const numbers = [{
    'letter': 'M',
    'value': 1000,
    'type': 'lit'
}, {
    'letter': 'D',
    'value': 500,
    'type': 'five'
}, {
    'letter': 'C',
    'value': 100,
    'type': 'lit'
}, {
    'letter': 'L',
    'value': 50,
    'type': 'five'
}, {
    'letter': 'X',
    'value': 10,
    'type': 'lit'
}, {
    'letter': 'V',
    'value': 5,
    'type': 'five'
}, {
    'letter': 'I',
    'value': 1,
    'type': 'lit'
}, ];

function literal(value, iter) {
    temp = value;
    //For thousand
    if (!numbers[iter - 1] && temp > 4) {
        return romanNumbers(temp) + "." + numbers[iter].letter;
    }
    if (numbers[iter - 2] && (temp === 9)) {
        return numbers[iter].letter + numbers[iter - 2].letter;
    }
    if (numbers[iter - 1] && (temp === 4)) {
        return numbers[iter].letter + numbers[iter - 1].letter;
    }
    if (numbers[iter - 1] && ((numbers[iter - 1].value) < temp)) {
        return numbers[iter - 1].letter + literal(temp - numbers[iter - 1].value, iter);
    }
    var tempret = ''
    for (i = 0; i < temp; i++) {
        tempret = tempret + numbers[iter].letter;
    }
    return tempret
}

function romanNumbers(value) {
    var result = ''
    var rest = value;
    for (var i = 0; i < numbers.length; i++) {
        var temp = Math.floor(rest / numbers[i].value);
        if (temp > 0 && numbers[i].type != "five") {
            result = result + literal(temp, i);
            rest = rest - (temp * numbers[i].value);
        }
    }
    if(rest!=0){
        throw 'something went wrong'
    }
    return result
}
console.log(romanNumbers(9))