const sqlFormatter = require('sql-formatter');

function formatSQLProductionGrade(sql) {
  return sqlFormatter.format(sql);
}

// Example usage:
const sampleSQL = `
SELECT id, name, age FROM users WHERE age >= 21 ORDER BY name, age;
INSERT INTO users(id, name, age) VALUES (1, 'John Doe', 30);
`;

const formattedSQLString = formatSQLProductionGrade(sampleSQL);
console.log('Formatted SQL:', formattedSQLString);
