const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Cloud Paks demo !!!");
});

module.exports.app = app;
