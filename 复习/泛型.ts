function add<T>(a: T, b: T) {
    console.log(`${a}${b}`);

}
// add<number>(2, 3);
// add<string>('hello', 'world');


function test<F, S>(a: F, b: S) {
    console.log(a);
    console.log(b);

}
// test<number, string>(2, '3');


//数组参数使用泛型
function testArr<T>(a: T[]) {
    console.log(a);

}
// testArr<number>([2, 3, 4]);


//类中使用泛型
class selectLanguage<T> {
    constructor(public languages: T[]) {
        this.languages = languages;
    }

    getLanguage(index: number) {
        console.log(this.languages[index]);
    }

}
let lang = new selectLanguage(['c', 'java', 'python', 'javascript']);
// console.log(lang);
lang.getLanguage(3);


//继承中的泛型
//接口
interface Language {
    name: string;
}

class selectLang<T extends Language> {
    constructor(public languages: T[]) {

    }
    getLang(index: number) {
        console.log(this.languages[index].name);

    }

}
let lang2 = new selectLang([{ name: 'jave' }, { name: 'javascript' }]);
console.log(lang2);
lang2.getLang(1);


class Test<T extends number | string>{
    constructor(public items: T[]) { }
    getItem(index: number) {
        console.log(this.items[index]);

    }

}

let tester = new Test(['hello', 2, 'world', 4]);
tester.getItem(2);