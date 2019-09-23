const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Cloud Paks with knative !!!");
});

module.exports.app = app;
