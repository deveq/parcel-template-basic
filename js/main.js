// console.log('hello parcel!!')

// async function test() {
//     const promise = Promise.resolve(123);

//     console.log(await promise);
// }

// test()

class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        console.log('hello', newValue);

        this._name = newValue.toUpperCase();
    }


}

const p = new Person('Jake', 32);
console.log(p.name);
p.name = 'tom';
console.log(p.name);