const ukraine = { name: 'Ukraine', tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { name: 'Latvia', tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { name: 'Litva', tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const myCountry = ukraine;

// 1) Створіть функцію, яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн
function getMyTaxes(salary) {
    return this.tax * salary;
}
console.log(`The amount of salary tax in ${myCountry.name}:`, getMyTaxes.call(myCountry, 2000));

// 2) Створіть функцію, яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні
function getMiddleTaxes(country) {
    return +((this.tax * this.middleSalary).toFixed(2));
}
console.log(`The amount of middle salary tax in ${myCountry.name}:`, getMiddleTaxes.call(myCountry));

// 3) Створіть функцію, яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні
function getTotalTaxes(country) {
    return this.tax * this.middleSalary * this.vacancies;
}
console.log(`The total amount of middle salary tax in ${myCountry.name}:`, getTotalTaxes.call(myCountry));

// 4) Створіть функцію, яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number }
//    кожні 10 секунд
function getMySalary(country) {
    const minSalary = 1500;
    const maxSalary = 2500;
    setInterval(() => {
        const randomSalary = minSalary + Math.trunc(Math.random() * (maxSalary - minSalary + 1));
        const taxes = +((this.tax * randomSalary).toFixed(2));
        const profit = +((randomSalary - taxes).toFixed(2));
        mySalary = { salary: randomSalary, taxes: taxes, profit: profit };
        console.log(`My object with data for ${myCountry.name}:`, mySalary);
    }, 10000)
}
getMySalary.call(myCountry);