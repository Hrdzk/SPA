// boki trójkąta
const a = 3;
const b = 4;
const c = 5;
const h = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let triangle = (a,b,c,h) => {
    return Math.sqrt(a+b+c)*h
}

console.log( triangle(a,b,c,h) );