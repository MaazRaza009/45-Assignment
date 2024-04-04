var magicians = ["Ali", "Dawood", "Farid"];
function the_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
the_magicians(magicians); // Shows original names
console.log("Great magicians:");
the_magicians(greatMagicians); // Shows modified names
