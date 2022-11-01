let maxMonth = 0;
let minMonth = 0;
let incomeArr = [];

for (let i = 1; i <= 12; i++) {
    incomeArr.push(parseInt(prompt(`Введите прибыль за ${i}-ый месяц: `)));
}

let maxIncome = incomeArr[0],
    minIncome = incomeArr[0];

for (let j = 0; j < incomeArr.length; j++) {
    if (incomeArr[j] > maxIncome) { 
        maxIncome = incomeArr[j];
        maxMonth = j + 1; 
    }
    if (incomeArr[j] < minIncome) { 
        minIncome = incomeArr[j]; 
        minMonth = j + 1;
    }
}

alert('Месяц с максимальной прибылью ' + maxMonth);
alert('Месяц с минимальной прибылью ' + minMonth);
