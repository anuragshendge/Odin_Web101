var solution1 = function () {
    var sum = 0;
    var input = document.getElementById("input1");
    var answer = document.getElementById("l1");
    var n = input.value;
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || (i % 3 === 0 && i % 5 === 0)) {
            sum += i;
        }
    }
    answer.innerHTML = sum;
};
