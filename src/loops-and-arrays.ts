console.log('Array with three integers:');
const array: number[] = [12, 23, 23];
console.log('Array:', array);
console.log('Array length is:', array.length);
console.log(' ');

console.log('Array with two rows and push:');
const shoppingList: string[] = ['Milk', 'Bread'];
shoppingList.push('Cheese');
console.log('Shopping list:', shoppingList);
console.log('Shopping lists length is:', shoppingList.length);
console.log(' ');

console.log('Array with three rows and pop:');
const shoppingListSecond: string[] = ['Milk', 'Bread', 'Eggs'];
shoppingListSecond.pop();
console.log('Shopping list:', shoppingListSecond);
console.log('Shopping lists length is:', shoppingListSecond.length);
console.log(' ');

const emptyArray: number[] = [];
console.log('Empty array:', emptyArray);
emptyArray.push(12);
console.log('Array length after one push is:', emptyArray.length);
emptyArray.push(43);
console.log('Array length after second push is:', emptyArray.length);
console.log(' ');

console.log('Loops');
const arrayNumbers: number[] = [34, 54, 3, 8, 89];
for (let i = 0; i < arrayNumbers.length; i++) {
    console.log('id: ', i, ' data in array:', arrayNumbers[i]);
}
console.log(' ');

const arraySumNumbers: number[] = [34, 54, 3, 8, 89];
let sum =0;
for (let i = 0; i < arraySumNumbers.length; i++) {
    sum += arraySumNumbers[i];
}
console.log('Sum of all numbers:', sum);
console.log(' ');

console.log('New array:');
const firstArray: number[] = [1, 2, 3];
console.log (firstArray);
let secondArray: number[] = [1, 1, 1];
for (let i = 0; i < firstArray.length; i++) {
    secondArray[i] = firstArray[i]*2;
}
console.log('Array after multiplication by 2:', secondArray);
console.log(' ');

console.log('New array');
const arrayRevers: number[] = [34, 54, 3];
console.log(arrayRevers);
console.log('Array elements in reverse order:');
for (let i = arrayRevers.length-1; i >= 0; i--) {
    console.log('id: ', i, ' data in array:', arrayRevers[i]);
}
console.log(' ');

console.log('Array max number:');
const arrayMaxNumber: number[] = [1, 2, 3, 6, 1];
console.log (arrayMaxNumber);
let maxNumber = arrayMaxNumber[0];
for (let i = 0; i < arrayMaxNumber.length; i++) {
    if (arrayMaxNumber[i] > maxNumber) {
        maxNumber = arrayMaxNumber[i];
    }
}
console.log('Max number is:', maxNumber);
console.log(' ');

console.log('Array min number:');
const arrayMinNumber: number[] = [66, 2, -8, 6, 1];
console.log (arrayMinNumber);
let minNumber = arrayMinNumber[0];
for (let i = 0; i < arrayMinNumber.length; i++) {
    if (arrayMinNumber[i] < minNumber) {
        minNumber = arrayMinNumber[i];
    }
}
console.log('Min number is:', minNumber);
console.log(' ');


console.log('Number of even numbers');
const arrayEvenNumber: number[] = [65, 2, 8, 6, 1];
console.log (arrayEvenNumber);
let evenNumber = 0;
for (let i = 0; i < arrayEvenNumber.length; i++) {
    if (arrayEvenNumber[i]%2===0) {
        evenNumber ++;
    }
}
console.log('Number of even numbers is:', evenNumber);
console.log(' ');

console.log('Mix array');
const mixArray: number[] = [-65, 2, -8, 6, 1];
console.log (mixArray);
let positiveArray: number[] = [];
for (let i = 0; i < mixArray.length; i++) {
    if (mixArray[i]>0) {
        positiveArray.push(mixArray[i]);
    }
}
console.log('Positive array is:', positiveArray);
console.log(' ');