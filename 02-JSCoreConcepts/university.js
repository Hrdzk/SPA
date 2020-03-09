names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        let firstLetters = [];
        this.names.forEach(item => {
            if(item[0] == letter) {firstLetters.push(item)}
        });
        return firstLetters;
    }

    sort() {
        let sortedArray = this.names.sort((a,b) => {
                if(a < b) return -1;
                else if (a > b) return 1;
                return 0;
            });
        return sortedArray; 
    }

    get() {
        return this.names;
    }

    getFirst(arr, n) {
        return arr.filter((name, idx) => idx < n);
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.getFirst(names, 4));
console.log(students.get());



