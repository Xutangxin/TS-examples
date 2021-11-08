const str: string = 'hello world';

let newStr = 'hello world';

let jackson = {
    name: 'jake',
    age: 22
}

console.log(jackson);


interface GoodMan {
    name: string;
    age: number;
    sex: string;
    hobby: string;
    speak: () => void;
}

let goodman: GoodMan = {
    name: 'jake',
    age: 22,
    hobby: 'reading books',
    sex: 'male',
    speak: function () {
        console.log('hello, my name is ' + this.name);
    }
}

console.log(goodman);
goodman.speak();