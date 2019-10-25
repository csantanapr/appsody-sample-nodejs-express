const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Cloud Paks demo 5!!!");
});

module.exports.app = app;
