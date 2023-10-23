function formatJSON(input, indentation = 2) {
  let jsonObj;

  // Check if the input is already an object
  if (typeof input === 'object') {
    jsonObj = input;
  } else {
    try {
      jsonObj = JSON.parse(input);
    } catch (e) {
      console.error('Invalid JSON:', e);
      return null;
    }
  }

  return JSON.stringify(jsonObj, null, indentation);
}

// Example usage:

const sampleJSON = `{"name": "John",      "age": 30,"city": "New York"
}`;

const formattedJSONString = formatJSON(sampleJSON, 4);
console.log('Formatted JSON:', formattedJSONString);
