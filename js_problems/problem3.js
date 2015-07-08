var solution3 = function(){

	var input = document.getElementById("input3");
	var answer = document.getElementById("l3");
	var input_value = input.value;

	for(var i=2; i<input_value ; i++){

		if(input_value%i ===0){

			input_value /= i;
		}
	}
	answer.innerHTML = input_value;
};