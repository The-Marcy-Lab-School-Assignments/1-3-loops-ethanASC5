 const loop0UpTo10 = (i) => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
}
};
loop0UpTo10()

const loop5to10 = (i) => {
  for (let i = 5; i < 10; i++) {
    console.log(i);
}
};
loop5to10()

// you do NOT need an if check
const loopEvenNumbersUpTo10 = (num) => {
  for (let i = 0 ; i <= num ; i += 2 ) 
  console.log(i)
}
loopEvenNumbersUpTo10(10)



const countdown5to0 = () => {
  for (let i = 5; i > 0; i--) {
    console.log(i);
}
};
countdown5to0()

const loopUpToNum = (num) => {
    for (let i = 0; i < num; i++) {
        console.log(i);
    }
}

loopUpToNum(10); 
;

const fizzbuzz = () => {
};

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
