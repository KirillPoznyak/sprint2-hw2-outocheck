/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 70; // тестовое значение, можно изменять
console.log('Балл студента: ', score);
let grade;
// your code
if (score >= 0 && score <= 49) {
    grade = 'F';
    console.log('Оценка студента: ', grade);
} else if (score >= 50 && score <= 69) {
    grade = 'D';
    console.log('Оценка студента: ', grade);
} else if (score >= 70 && score <= 79) {
    grade = 'C';
    console.log('Оценка студента: ', grade);
} else if (score >= 80 && score <= 89) {
    grade = 'B';
    console.log('Оценка студента: ', grade);
} else if (score >= 90 && score <= 100){
    grade = 'A';
    console.log('Оценка студента: ', grade);
} else {
    console.log('Введите корректный балл студента:');
}