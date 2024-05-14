const express = require('express');
const bodyParser = require('body-parser');

const os = require('os');

const app = express();

app.get('/', (req, res) => {
  return res
    .status(200)
    .json({
      status : true,
      mensagem: "OK"
    })

});

app.get('/redirect', (req, res) => {
  return res.redirect(307, 'https://google.com');
});

app.get('/liveness', (req, res) => {
  return res
    .status(200)
    .json({
      status : true,
      path:"",
      gid: "",
      uid: "",
    })
});

app.get('/readiness', (req, res) => {
  return res
    .status(200)
    .json({
      status : true,
      mensagem: "OK",
      os: os.platform(),
      freemen: os.freemem(),
      homedir: os.homedir()
    })
});


module.exports = app;
