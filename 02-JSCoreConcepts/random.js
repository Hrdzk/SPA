const arrOfNums = [];

const generateNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1) + min);
}

const fillArray = (arr) => {
    for(let i = 0; i < 10; i++ ){
        arr.push(generateNumber(5,20));
    }
    return "Dodano liczby do tablicy";
}

fillArray(arrOfNums);
console.log(arrOfNums);