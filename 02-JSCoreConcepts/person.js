class Person {
    constructor(name, surname){
        this._name = name;
        this._surname = surname;
    }

    getPersonalData() {
        return `${this._name} ${this._surname.toUpperCase()}`
    }

    getInitials() {
        return `${this._name[0]} ${this._surname[0]}`
    }
}

let MB = new Person('Maksymilian', 'Bobrowski');

console.log(MB.getPersonalData());
console.log(MB.getInitials());