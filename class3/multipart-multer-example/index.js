const express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

const app = express();
const port = 3000;

app.post('/example', upload.array('myFiles'), (req, res) => {
  console.log(req.files);

  res.send("OK");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));