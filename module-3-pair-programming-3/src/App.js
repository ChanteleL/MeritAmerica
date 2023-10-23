import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

import Main from "./components/MainComponent";
import Contact from "./components/Contactcomponent";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Contactcomponent" component={Contact} />
          </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

