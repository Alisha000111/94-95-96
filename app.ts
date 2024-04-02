// 94...................
const words: string[] = ["Hello", "World", "TypeScript", "JavaScript"];
const lengths: number[] = words.map(word => word.length);
console.log(lengths);
// 95...................
function filterGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter(number => number > 10);
}
const numbers: number[] = [30, 35, 40, 45, 50];
console.log(filterGreaterThanTen(numbers)); 
// 96.....................
function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers)); 





