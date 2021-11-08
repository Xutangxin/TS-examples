//类的构造函数
// 父类
class People {
    constructor(public name: string) {
    }
}
// 子类
class Teacher extends People {
    constructor(public age: number) {
        super('john');
    }
}

const people = new People('jake');
console.log(people);//People { name: 'jake' }
//在实例化的时候只用传age实参了，因为name已经在super()里传进去了
const teacher = new Teacher(25);
console.log(teacher);//People { name: 'jake' }

