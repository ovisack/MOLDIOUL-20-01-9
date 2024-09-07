const  biryanikhor=['22','33','44', '22', '33','11','779']


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