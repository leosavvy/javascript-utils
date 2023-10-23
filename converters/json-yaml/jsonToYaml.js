const jsyaml = require('js-yaml');

function jsonToYaml(jsonObj) {
  try {
    const yamlStr = jsyaml.dump(jsonObj);
    return yamlStr;
  } catch (e) {
    console.error(e);
    return null;
  }
}

// Example 
const sampleJson = {
  name: "John",
  age: 30,
  city: "New York"
};

const yamlOutput = jsonToYaml(sampleJson);
console.log("YAML Output:", yamlOutput);