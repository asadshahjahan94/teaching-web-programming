import './App.css';
import React, { Component } from 'react'
import Bind from "./Bind"
import { Effect } from "./Effect"
import NameForm from "./NameForm"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: "App"
    }
  }

  setTitle = (title) => {
    this.setState({title: title})  
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.title}</h1>
          <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Bind</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/use-effect">useEffect</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/form-submission">NameForm</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Switch>
              <Route path="/use-effect">
                <Effect setTitle={this.setTitle}/>
              </Route>
              <Route path="/form-submission">
                <NameForm />
              </Route>
              <Route path="/">
                <div>
                  <Bind setTitle={this.setTitle}/>
                </div>
              </Route>
            </Switch>
          </Router>
        </header>
      </div>
    )
  }
}

export default App
