// 一个普通的类
class SelectLanguage {
    constructor(private languages: string[]) { }
    getLanguage(index: number) {
        // return this.languages[index];
        console.log(this.languages[index]);

    }
}
const languages = new SelectLanguage(['c', 'java', 'python', 'javascript']);
languages.getLanguage(3);


// 在类中使用泛型
class SelectLanguage2<T> {
    //使用泛型约束参数类型
    constructor(private languages: T[]) { }
    getLanguage(index: number): T { //使用泛型约束返回值类型
        console.log(this.languages[index]);
        return this.languages[index];
    }
}
const languages2 = new SelectLanguage2<string>(['c', 'java', 'python', 'javascript']);
languages2.getLanguage(2);

// 泛型继承接口
interface Language {
    name: string;
}
class SelectLanguage3<T extends Language> {
    constructor(private languages: T[]) { }
    getLanguage(index: number): string {
        return this.languages[index].name;
    }
}
const languages3 = new SelectLanguage3([
    { name: 'java' },
    { name: 'python' },
    { name: 'c' }
]);
console.log(languages3.getLanguage(2));

//泛型继承变量类型（泛型约束）
class Man<T extends number | string>{
    constructor(private name: T) { }
    sayHi() {
        console.log(`hello, my name is ${this.name}`);

    }
}
const jakeson = new Man<string>('jakeson');
jakeson.sayHi();
