const express = require('express')
const app = express()
const port = 3000


// utils
const fs = require('fs').promises;

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

async function writeFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data);
    obj = JSON.parse(data);
    console.log(obj)
    obj["test1"] = "test"
    json = JSON.stringify(obj);
    console.log(json)
    await fs.writeFile(filePath, json);
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

async function addCourse(filePath, courseName) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data);
    obj = JSON.parse(data);
    console.log(obj)
    obj.courses.push(courseName)
    json = JSON.stringify(obj);
    await fs.writeFile(filePath, json);
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}



app.get('/read', (req, res) => {
  readFile("studentDetails.json")
  res.send('Hello World!')
})

app.get('/write_file', (req, res) => {
  writeFile("studentDetails.json")
  res.send('Hello World!')
})

app.get('/add_course', (req, res) => {
  const fileName = "studentDetails.json"
  let course = req.query.course
  addCourse(fileName, course)
  res.send("Added")
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
