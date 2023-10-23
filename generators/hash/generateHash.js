const crypto = require('crypto');

function generateHash(input, hashType) {
  const allowedHashTypes = ['md5', 'sha1', 'sha256', 'sha512'];

  if (!allowedHashTypes.includes(hashType.toLowerCase())) {
    throw new Error(`Hash type "${hashType}" is not supported.`);
  }

  const hash = crypto.createHash(hashType.toLowerCase());
  hash.update(input);
  return hash.digest('hex');
}

// Example usage:
const text = 'Hello, world!';
const hashType = 'sha256';
const hash = generateHash(text, hashType);
console.log(`${hashType} of "${text}": ${hash}`);
