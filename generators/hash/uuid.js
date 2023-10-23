const { v1: uuidv1, v4: uuidv4 } = require('uuid');

function generateUUIDv1() {
  return uuidv1();
}

function generateUUIDv4() {
  return uuidv4();
}

// Example usage:

const idV1 = generateUUIDv1();
console.log(`Generated UUID v1: ${idV1}`);

const idV4 = generateUUIDv4();
console.log(`Generated UUID v4: ${idV4}`);
