import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/page/HomePage";
import ProjectPage from "./components/page/ProjectPage";
import ContactPage from "./components/page/ContactPage";
import PageNotFound from "./components/page/PageNotFound";

class App extends React.Component {

  render() {
    return (
      
      <Router>
        <Header/>
        <Navbar/>
        
        

        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={HomePage} />
        <Route exact path="/project" component={ProjectPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route path="*" component={PageNotFound}/>
        </Switch>
        <Footer/>
      </Router>

    );
  }
}

export default App;
