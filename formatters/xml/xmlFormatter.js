const xmlFormatter = require('xml-formatter');

function formatXMLProductionGrade(xmlString) {
  const options = {
    indentation: '  ',  // Indentation using 2 spaces
    collapseContent: true,  // Remove extra whitespace
    lineSeparator: '\n'  // Use a new line as the line separator
  };

  return xmlFormatter(xmlString, options);
}

// Example usage:

const sampleXML = `<root><element attribute="value">Text</element><element attribute="value"><child>Child text</child></element></root>`;

const formattedXMLString = formatXMLProductionGrade(sampleXML);
console.log('Formatted XML:', formattedXMLString);
