function oddAverage(numbers){
    const odds=[];
  for( const number of numbers){
    if ( number % 2===0) {
      console.log(number);
      odds.push(number);   
    }

  } 
//console.log(odds)
let sum =0;
for(const number of odds){
    sum = sum + number;
}
const count= odds.length;

console.log(sum,odds);
}

const numbers =[42,73,58,65,81,45,36,56,25,];
const avg = oddAverage(numbers);
console.log('ood aavaret numaber', avg);