/** FEEDBACK: Great job! However, what was the purpose of putting i as a parameter if i is defined in the for loop?  */
const loop0UpTo10 = (i) => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
}
};
loop0UpTo10()

/*FEEDBACK: Same feedback here, why is i defined as a parameter?*/
const loop5to10 = (i) => {
  for (let i = 5; i < 11; i++) {
    console.log(i);
}
};
loop5to10()

const loopEvenNumbersUpTo10 = () => {
  for (let i = 0 ; i < 10 ; i += 2 ) {
      console.log(i)

  }
}
loopEvenNumbersUpTo10()


const countdown5to0 = () => {
  for (let i = 5; i >= 0; i--) {
    console.log(i);
}
};
countdown5to0()

const loopUpToNum = (num) => {
    for (let i = 0; i < num; i++) {
        console.log(i);
    }
}

loopUpToNum(22); 
;

const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++){
  // Check if i is divisible by both 3 and 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  }
  // Check if i is divisible by 3
  else if (i % 3 === 0) {
    console.log("fizz");
  }
  // Check if i is divisible by 5
  else if (i % 5 === 0) {
    console.log("buzz");
  }
  // If i is not divisible by either 3 or 5, print num
  else {
    console.log(i);
  }
}
 };
 

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
