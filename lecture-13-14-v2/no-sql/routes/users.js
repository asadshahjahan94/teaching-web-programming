var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    data: [
      {"course": "Web Programming", "section": "B", "students": 55},
      {"course": "Web Programming", "section": "A", "students": 50},
      {"course": "Web Programming", "section": "C", "students": 45},
    ]
  }));
  // res.send('Hello World!')
})

router.post('/', function (req, res) {
  console.log(req.body);
  res.send('Got a POST request')
})

router.put('/', function (req, res) {
  res.send('Got a PUT request at /user', req)
})

router.delete('/', function (req, res) {
  res.send('Got a DELETE request at /user')
})

module.exports = router;
