// 定义两个接口
interface Teacher {
    isMale: boolean;
    say: () => {
    }
}
interface Doctor {
    isMale: boolean;
    // say: () => {

    // };
    skill: () => {

    }
}
// 类型保护-类型断言
function judgeWho(person: Teacher | Doctor) {
    if (person.isMale) {
        (person as Teacher).say();
    } else {
        (person as Doctor).skill();
    }
}
//类型保护-in语法
function judgeWhoTwo(person: Teacher | Doctor) {
    if ('say' in person) {
        person.say();
    } else {
        person.skill();
    }
}
// 类型保护-typeof
function add(num1: string | number, num2: string | number) {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return `${num1}${num2}`;
    } else {
        return num1 + num2;
    }
}
console.log(add('hello', 'world'));
console.log(1, 2);

// 类型保护-instanceof
class NumberObj {
    count: number;
    constructor(count: number) {
        this.count = count;
    }
}

function addTwo(first: NumberObj | object, second: NumberObj | object) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}
const first = new NumberObj(1);
const second = new NumberObj(3);
console.log('the result is ' + addTwo(first, second));




// const person = {
//     isMale: false,
//     say: () => {
//         console.log('I am a person');
//     },
//     // skill: () => {
//     //     console.log('I have skills');

//     // }
// }