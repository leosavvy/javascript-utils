function decodeJWT(jwt) {
  try {
    const [headerEncoded, payloadEncoded] = jwt.split('.');
    if (!headerEncoded || !payloadEncoded) {
      throw new Error('Invalid token');
    }

    const headerStr = atob(headerEncoded.replace(/-/g, '+').replace(/_/g, '/'));
    const payloadStr = atob(payloadEncoded.replace(/-/g, '+').replace(/_/g, '/'));

    const header = JSON.parse(headerStr);
    const payload = JSON.parse(payloadStr);

    return { header, payload };
  } catch (e) {
    console.error('Failed to decode JWT:', e);
    return null;
  }
}

// Example usage:
const sampleJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.S5CmpNYXTP_m9KqfcZG6jHK_FEWH3A9Pp3G0VzW3NyA';
const decoded = decodeJWT(sampleJWT);
console.log('Decoded JWT:', decoded);
