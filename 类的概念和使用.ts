// 定义一个类
class Animal {
    content = 'I am an animal';
    bark() {
        console.log('I am barking now');
    }
    selfIntro() {
        return this.content;
    }
}

// 定义一个子类
class Dog extends Animal {
    // 自定义方法
    bite() {
        console.log('I can bite people');
    }
    // 重写父类方法
    bark() {
        console.log('汪汪汪');
    }
    // super关键字，调用父类方法
    sayHello() {
        return 'hello ' + super.selfIntro();
    }
}

const animal = new Animal();
const dog = new Dog();
console.log(animal.selfIntro());
console.log(dog.selfIntro());
dog.bite();
dog.bark();
console.log(dog.sayHello());
console.log(animal.selfIntro());




