var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (number) {
    var suffix = "ab";
    if (number === 5) {
        suffix = "cd";
    }
    else if (number === 6) {
        suffix = "ef";
    }
    else if (number === 7) {
        suffix = "gh";
    }
    else if (number === 8) {
        suffix = "ij";
    }
    else if (number === 9) {
        suffix = "kl";
    }
    else if (number === 10) {
        suffix = "mn";
    }
    console.log("".concat(number).concat(suffix));
});
