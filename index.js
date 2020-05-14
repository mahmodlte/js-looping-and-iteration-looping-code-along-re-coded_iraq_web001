function writeCards (name, present) {
let arr = [];
let msg ;

  for (let i = 0; i < name.length; i++){
msg = `Thank you, ${name[i]}, for the wonderful ${present} gift!`;

arr.push(msg);

  }

return arr;
}
writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

function countDown (count){

while (count > -1){

console.log(count);
count--;
}
    
}

countDown(10);