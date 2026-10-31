function isLetter(char) {
  return /^[a-zA-Z]$/.test(char);
}

function caesarCipher(message, shift) {
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

  console.log(cipheredMessage.join(""));
}

caesarCipher("abcdefghijklmnopqrstuvwxyz", 3);

export { caesarCipher };
