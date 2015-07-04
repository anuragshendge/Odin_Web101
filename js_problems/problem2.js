var solution2 = function(){

var sum =0;
var n1 = 1;
var n2 = 2;
var input = document.getElementById("input2");
var answer = document.getElementById("l2");
var limit = input.value;

while( n2 < limit){

  if(n2 % 2 === 0){
    sum += n2;
  }
  var t1 = n2;
      n2 = n1 + n2;
      n1 = t1;
  }
  answer.innerHTML = sum;
};
