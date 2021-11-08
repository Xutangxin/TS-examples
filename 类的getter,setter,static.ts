class xiaoJieJie {
    constructor(private _age: number) {
    }
    // 通过get定义的属性可以在类的外部被访问到
    get getAge() {
        return this._age - 10;
    }
    // 类的外部可以通过set定义的属性修改构造函数的私有变量
    set setAge(age: number) {
        this._age = age;
    }
}

const xiaojiejie = new xiaoJieJie(28);
console.log(xiaojiejie);//xiaoJieJie { _age: 28 }
//通过getAge访问构造函数的私有属性,getAge是一个属性，所以不加()
console.log(xiaojiejie.getAge);//18
// 因为setAge是属性，所以不是传参，而是赋值
xiaojiejie.setAge = 22;
console.log(xiaojiejie);//xiaoJieJie { _age: 22 }


class Girl {
    static sayLove() {
        console.log('I love you~');
    }
}
Girl.sayLove();