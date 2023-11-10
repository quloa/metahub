const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const HOST = '0.0.0.0';
const PORT = 3000;

const FLAG = process.env.FLAG || 'REDACTED';

app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.post('/', (req, res) => {
  console.log(req.body);

  if (req.body.flag == FLAG) {
    res.send("<script>alert('ITS YOUR SECRET NOW'); window.location.href = '/'; </script>");
    return;
  }
  
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(PORT, HOST, () => {
  console.log(`Listening on port http://${HOST}:${PORT}`);
});
