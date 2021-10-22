import './App.css';
import { StateMethod, StateClass } from "../state-management/state"
import WeatherForecast from "../api/WeatherForecast"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">State Management</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/api">API</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/api">
              <WeatherForecast />
            </Route>
            <Route path="/">
              <div>
                <StateMethod />
                <StateClass />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
