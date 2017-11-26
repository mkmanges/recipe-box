require('dotenv').config({ path: 'variables.env' });

const app = require('./app');

// node.js server
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
