//input is 10 3 5 15 9


let givenTimesString = process.argv.slice(2);
// provides array of arguments given at command line -> ['10', '3', '5', '15', '9']

//Turn the array of strings into an array of numbers -> [10, 3, 5, 15, 9]
let givenTimesNum = givenTimesString.map(Number);

// need a way to store time that changes based on the value of the index


for (let i = 0; i < givenTimesNum.length; i++) {
  let time = (givenTimesNum[i] * 1000);
  if (givenTimesNum.length === 0){
    return;
  }
  if (Math.sign(givenTimesNum[i]) !== 1 ){
    continue;
  }
  if (givenTimesNum[i] === NaN){
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time);
}
