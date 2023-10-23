function generateLoremIpsum(wordCount = 100, sentenceLength = 10, paragraphLength = 5, isRandom = true) {
  const words = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
    'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor',
    'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'
  ];

  let output = '';
  let sentence = '';
  let wordIndex = 0;

  for (let i = 1; i <= wordCount; i++) {
    let word = words[0];

    if (isRandom) {
      word = words[Math.floor(Math.random() * words.length)];
    }
    else {
      word = words[wordIndex]

      wordIndex++;

      if (wordIndex > words.length) {
        wordIndex = 0;  // Reset back to the beginning of the array
      }
    }

    sentence += (sentence ? ' ' : '') + word;

    if (i % sentenceLength === 0) {
      sentence += '.';
      output += (output ? ' ' : '') + sentence.charAt(0).toUpperCase() + sentence.slice(1);
      sentence = '';
    }

    if (i % (sentenceLength * paragraphLength) === 0) {
      output += '\n\n';
    }
  }

  return output;
}

// Example usage:
const loremIpsumText = generateLoremIpsum(400, 15, 5, false);
console.log(loremIpsumText);
