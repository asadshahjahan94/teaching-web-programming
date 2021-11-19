var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//Here we are configuring express to use body-parser as middle-ware.

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
