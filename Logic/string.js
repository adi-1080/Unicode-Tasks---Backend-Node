console.log("Unicode Task 1");

// let input1 = prompt("Enter a text")
let input = "hello world"
input = input.toLowerCase()

let count = new Array(26).fill(0)
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < 26; j++) {
        let distinct_letters = "abcdefghijklmnopqrstuvwxyz"
        if(distinct_letters[j] === input[i]){
            count[j]++;
        }
    }
}
    ////let output = document.getElementById('op')
    //let start = input.charAt(0)
    let printed = new Array(26).fill(false)
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < count.length; j++) {
            if(printed[j] != true){
                if(input.charCodeAt(i) == 'a'.charCodeAt() + j){
                    // if(count[i] == 0){
                    //     continue
                    // }
                    let letter = String.fromCharCode('a'.charCodeAt()+j)
                    console.log(letter+" : "+count[j]);
                    printed[j] = true;
                } 
                //output.innerHTML += letter+" : "+count[i]+"<br><br>"
            }
            
        }
        
    }



// let output = document.getElementById('op');

// output.innerHTML = input.charAt(0)+" appeared "+count+" times";
// console.log(count);
// let out = document.getElementsByClassName('container');
// out[0].innerHTML = count;