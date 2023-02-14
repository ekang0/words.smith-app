import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from "./Header";
import NavBar from "./NavBar";
import Instructions from "./Instructions";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <br></br>
        <Switch>
          <Route path="/wordssmith/instructions">
            <Instructions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
