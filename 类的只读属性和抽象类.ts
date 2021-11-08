class Guy {
    // 定义一个只读属性
    public readonly _name: string;
    constructor(name: string) {//在构造函数中使用只读属性
        this._name = name;
    }
}

const guy = new Guy('mike');
// guy._name = 'jake';//报错，因为_name是一个只读属性，值不可修改


// 抽象类
abstract class Gal {
    abstract speak(): void;
}

class GoodGirl extends Gal {
    speak() {
        console.log('I am a good girl');
    }
}

class BadGirl extends Gal {
    speak() {
        console.log('I am a bad girl');

    }
}

const goodgirl = new GoodGirl();
const badgirl = new BadGirl()
console.log(goodgirl);
goodgirl.speak();
badgirl.speak();

