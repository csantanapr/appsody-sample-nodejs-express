const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Cloud Paks demo 4!!!");
});

module.exports.app = app;
