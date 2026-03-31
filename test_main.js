const e = require('electron');
console.log('electron type:', typeof e);
if (typeof e === 'object') {
  console.log('app type:', typeof e.app);
  console.log('keys:', Object.keys(e).slice(0,8).join(', '));
} else {
  console.log('electron value:', String(e).substring(0,80));
}
process.exit(0);
