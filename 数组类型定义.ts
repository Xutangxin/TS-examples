// const arr = [1, 2, 3];
// const arr1: string[] = ['jeke', 'fuck',null];//报错
// const arr1: number[] = [1, 2, 'je'];//报错
// const arr2: (string | number)[] = ['hello', 'world', 12];
// console.log(arr2);


// 数组中对象类型的定义
const girl: { name: string, age: number }[] = [
    {
        name: 'mary',
        age: 18
    },
    {
        name: 'lucy',
        age: 18
    }
];

// 类型别名
type female = { name: string, age: number };
const females: female[] = [
    {
        name: 'mary',
        age: 18
    },
    {
        name: 'avril',
        age: 18,
    }
]

console.log(females);


// 使用类定义数组对象属性
// class Madam {
//     constructor(name: string, age: number) {
//         name: String;
//         age: Number;
//     }
// }

const xiaoJieJies: { name: string, age: number }[] = [
    { name: "刘英", age: 18 },
    { name: "谢大脚", age: 28 },
];
console.log(xiaoJieJies);

