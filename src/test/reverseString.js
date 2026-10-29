function reverseString(string) {

    if (!string || !isNaN(string)) return (string);
    return (string.split("").reverse()).join("");
}

// console.log(reverseString("Hello"));

export {reverseString}