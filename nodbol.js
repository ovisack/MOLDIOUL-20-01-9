const  biryanikhor=['joy','ovi', 'joy','avoy', 'ovi', 'joy','jos' ]


function noDuplicate(array){
const unique=[];
for(const item of array){
 if(unique.includes(item)=== false){
    unique.push(item);
 }



}



return unique;

}
const unik= noDuplicate(biryanikhor);
console.log(unik)
console.log(unik . length);