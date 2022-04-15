import React, { Component } from "react"
import axios from "axios"
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        courseList: undefined
    }
  }

  componentWillMount = () => {
    axios.get("http://localhost:3000/users/")
      .then(({ data }) => {
          this.setState({courseList: data})
          console.log(data)
      })
      .catch(({ response }) => {

      })
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
            {this.state.courseList === undefined ? <h3>Loading</h3> : (
              <table>
              <tr>
                <th>Course</th>
                <th>Section</th>
                <th>Students</th>
              </tr>
              {this.state.courseList.data.map(cList => (
                <tr>
                  <td>{cList.course}</td>
                  <td>{cList.section}</td>
                  <td>{cList.students}</td>
                </tr>
              ))}
              </table>
            )}
        </header>
      </div>
    )
  }
}


export default App;
