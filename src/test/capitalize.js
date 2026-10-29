function capitalize(string) {
    if (!string || !isNaN(string)) return (string);
    const arrayFromString = string.split("");
    const firstLetter = arrayFromString.shift();
    
    const result = firstLetter.toUpperCase() + arrayFromString.join("");
    return result;
}

console.log(capitalize(NaN))

export  { capitalize };