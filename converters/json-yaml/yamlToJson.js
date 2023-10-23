const jsyaml = require('js-yaml');

function yamlToJson(yamlStr) {
  try {
    const jsonObj = jsyaml.load(yamlStr);
    return jsonObj;
  } catch (e) {
    console.error(e);
    return null;
  }
}

const sampleYaml = `
name: "John"
age: 30
city: "New York"
`;

const jsonOutput = yamlToJson(sampleYaml);
console.log("JSON Output:", jsonOutput);
