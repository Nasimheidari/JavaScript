let a = 5
let factorial = 1
let sum = 0



for(let j = a ; j > 0 ; j--){
    for(let i = j ; i > 0 ; i-- ){
        factorial = factorial * i
        console.log (i , factorial);
    }
    sum = sum + factorial;
    console.log(sum)
    factorial = 1;
}
console.log(sum);