//1
function absoluteValue(num){
  if(isNaN(num) === false){
      if(num > 0){
          return num;
      }else{
          return num*-1;
      }
  }else{
      return null;
  }
}

console.log(absoluteValue(-3));

//bonus
function multiplesOfFourAndSix() {
    let multiples = [];
    for (let i = 1; i<=100; i++){
        if (i%4 === 0 && i%6 === 0){
            multiples.push(i);
        }
    }
    return multiples;
}

console.log(multiplesOfFourAndSix());
