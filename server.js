
const bGround = require('fcc-express-bground');
const myApp = require('./myApp');
const express = require('express');
const app = express();


const port = process.env.PORT || 3000;
bGround.setupBackgroundApp(app, myApp, __dirname).listen(port, () => {
  bGround.log(`Node is listening on port ${port}...`);
});
