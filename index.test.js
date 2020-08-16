const pass = require('./pass');
const process = require('process');
const cp = require('child_process');
const path = require('path');

test('throws not a number', async () => {
  await expect(() => {pass.willPass('foo')}).toThrow("perc is not a number");
});

test('must pass must fail', async () => {
  for (let i=0; i<=100; i++) {
    await expect(pass.willPass(100)).toBe(true)
    await expect(pass.willPass(0)).toBe(false)
  }
});

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_PERCENTAGE'] = 100;
  const ip = path.join(__dirname, 'index.js');
  console.log(cp.execSync(`node ${ip}`, {env: process.env}).toString());
})
