// function Fun(): void {
//     console.log('hello world');
// }
// Fun();


function getTotal({ one, two }: { one: number, two: number }): number {
    return one + two;
}
const result = getTotal({ one: 2, two: 3 });
console.log(result);
