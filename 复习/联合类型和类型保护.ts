interface Singer {
    name: string;
    sing: () => void;
}

interface Actor {
    name: string;
    acting: () => void;
}

function judgeWho(person: Singer | Actor) {
    if ('sing' in person) {
        person.sing();
    } else {
        person.acting();
    }

}

// judgeWho({ name: 'jay', acting: () => { console.log('I am acting'); } });



class NewTest {
    constructor(public count: number) {

    }
}

function addTest(first: NewTest | object, second: NewTest | object) {
    if (first instanceof NewTest && second instanceof NewTest) {
        return first.count + second.count;
    }
}
let a = new NewTest(2), b = new NewTest(3);
console.log(addTest(a, b));
