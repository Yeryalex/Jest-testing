function isLetter(char) {
  return /^[a-zA-Z]$/.test(char);
}

function caesarCipher(message, shift) {
  if (shift > 26) {
    shift = shift - 26;
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const slicedPortion = alphabet.slice(0, shift);
  const cipheredMessage = [];

  const shiftedAlphabet = alphabet.slice(shift);
  shiftedAlphabet.push(...slicedPortion);

  message.split("").forEach((element) => {
    if (isLetter(element)) {
      const indexPos = alphabet.indexOf(element.toLowerCase());

      element === element.toUpperCase()
        ? cipheredMessage.push(shiftedAlphabet[indexPos].toUpperCase())
        : cipheredMessage.push(shiftedAlphabet[indexPos]);
    } else {
      cipheredMessage.push(element);
    }
  });

  return cipheredMessage.join("");
}

// console.log(caesarCipher("abc", 3));

export { caesarCipher };
