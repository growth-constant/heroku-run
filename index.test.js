const process = require('process');
const cp = require('child_process');
const path = require('path');

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_HEROKU_API_KEY'] = '';
  process.env['INPUT_HEROKU_EMAIL'] = '';
  process.env['INPUT_HEROKU_APP_NAME'] = '';
  process.env['INPUT_COMMAND'] = "rake db:migrate:with_data";
  const ip = path.join(__dirname, 'index.js');
  const result = cp.execSync(`node ${ip}`, {env: process.env}).toString();
  console.log(result);
})