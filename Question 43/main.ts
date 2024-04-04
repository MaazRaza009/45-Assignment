let magicians_names: string[] = ["Ali", "Dawood", "Farid"];
function A_magicians(magicians_names: string[]) {
    magicians_names.forEach(magician_names => {
        console.log(magician_names);
    });
}
function make_the_great(magicians: string[]): string[] {
    let thegreatMagicians: string[] = [];
    magicians.forEach(magiciannames => {
        thegreatMagicians.push(`${magiciannames} the Great`);
    });
    return greatMagicians;
}

let greatMagicians = make_the_great(magicians_names.slice()); // Creates a new modified array
console.log("Original magicians:");
A_magicians(magicians_names); // Shows original names
console.log("Great magicians:");
A_magicians(greatMagicians); // Shows modified names
