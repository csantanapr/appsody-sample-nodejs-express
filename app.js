const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Cloud Paks talk !!!");
});

module.exports.app = app;
