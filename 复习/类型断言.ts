interface Fish {
    name: string;
    swim: () => void;
}

interface Cat {
    name: string;
    run: () => void;
}

function isFish(animal: Fish | Cat) {
    if (typeof (animal as Fish).swim === 'function') {
        (animal as Fish).swim();
        return true;
    }
    return false;
}


let fish: Fish = {
    name: 'fish',
    swim: () => {
        console.log('I can swim');

    }
}

let cat: Cat = {
    name: 'cat',
    run: () => {
        console.log('I am running');

    }
}

// console.log(isFish(fish));
// console.log(isFish(cat));



//类型别名
type Name = string;
type myArr = string[];

let str1: Name = 'hello world';
console.log(str1);

let arr: myArr = ['hello', 'world'];
console.log(arr);

