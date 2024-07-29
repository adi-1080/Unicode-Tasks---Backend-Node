console.log("Unicode Task 1");

var input = "hello world";
input = input.toLowerCase();

let count = new Array(26).fill(0);
let distinct_letters = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < 26; j++) {
        if (distinct_letters[j] === input[i]) {
            count[j]++;
        }
    }
}

for (let i = 0; i < count.length; i++) {
    if (count[i] === 0) {
        continue;
    }
    let letter = String.fromCharCode('a'.charCodeAt(0) + i);
    console.log(letter + " : " + count[i]);
}
