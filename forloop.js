let number = 10;
let string = 0;

for(let i = 0; i<=number; i++){
    for(let j=0; j<=i; j++){
        string += "*"
    }
    string += "/n "
}
console.log(string)