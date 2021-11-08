//函数中的泛型
//作用主要是约束参数的类型
function Join<T>(first: T, second: T) {
    return `${first}${second}`;
}
//在调用函数时指定泛型的类型，从而对参数的类型实现约束
//在这个例子中，要求参数都是字符串类型
Join<string>('hello', 'world');


//泛型中数组参数的使用
// 方式1：
function myFun<T>(param: T[]) {
    console.log(param);

}
myFun<string>(['hello', 'world']);
// 方式2：
function myFun2<T>(param: Array<T>) {
    console.log(param);
}
myFun2<number>([1, 2, 3]);


//多个泛型的定义及使用
function myFun3<T, P>(first: T, second: P) {
    console.log(first, second);

}
myFun3<string, number>('hello', 123);
