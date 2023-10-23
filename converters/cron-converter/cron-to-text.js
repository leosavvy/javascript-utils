function cronToHumanReadable(cron) {
  const fields = cron.split(' ');

  if (fields.length !== 5) {
    return 'Invalid cron expression. Expected 5 fields.';
  }

  const [minutes, hours, dayOfMonth, month, dayOfWeek] = fields;

  const names = {
    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };

  function parseField(field, type) {
    if (field === '*') {
      return 'every ' + type;
    }

    if (field.includes(',')) {
      const values = field.split(',');
      return 'on the ' + values.map(v => names[type] ? names[type][parseInt(v) - 1] : v).join(', ');
    }

    if (field.includes('-')) {
      const [start, end] = field.split('-');
      return `from ${names[type] ? names[type][parseInt(start) - 1] : start} to ${names[type] ? names[type][parseInt(end) - 1] : end}`;
    }

    if (field.includes('/')) {
      const [_, step] = field.split('/');
      return `every ${step} ${type}`;
    }

    // Special characters
    if (field.includes('L') && type === 'dayOfMonth') {
      return 'on the last day of the month';
    }

    if (field.includes('W') && type === 'dayOfMonth') {
      return 'on the nearest weekday to ' + field.replace('W', '');
    }

    if (field.includes('#') && type === 'dayOfWeek') {
      const [dow, nth] = field.split('#');
      return `on the ${nth} ${names[type][parseInt(dow) - 1]} of the month`;
    }

    return 'at ' + (names[type] ? names[type][parseInt(field) - 1] : field);
  }

  const minutesText = parseField(minutes, 'minutes');
  const hoursText = parseField(hours, 'hours');
  const dayOfMonthText = parseField(dayOfMonth, 'dayOfMonth');
  const monthText = parseField(month, 'month');
  const dayOfWeekText = parseField(dayOfWeek, 'dayOfWeek');

  return `Runs ${minutesText}, ${hoursText}, ${dayOfMonthText}, ${monthText}, ${dayOfWeekText}.`;
}

// Example
const cronExpressions = [
  '*/15 9-17 * 1-6 1-5',
  '* * L * *',
  '10 5 15W * *',
  '0 12 * * 2#4'
];

cronExpressions.forEach(expr => {
  const humanReadable = cronToHumanReadable(expr);
  console.log(`For "${expr}", human-readable: ${humanReadable}`);
});
