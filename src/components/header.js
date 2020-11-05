import React from "react";
import "../styles.css";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import LinkedList from './work'

//import {Main} from "./presentation";

import About from "./about";
//import {WorkPage} from "./work-view"

//import { ThemeButton } from "./components/buttons";

//const Home = () => <Main />;
const Home = () => <h1>home</h1>
//const About = () => <h1>about</h1>
const Work = () => {
  let {url, path} = useRouteMatch()
  return(
<h1>work</h1>
  )}


const DesignButton = ({ children, ...props }) => (
  <Link to={props.to} className="designButton">
    {children}
  </Link>
);
// <ThemeButton />
// route


const Head = () => {

  return (
    <Router>
      <div className="App">
        <span>
         
          <DesignButton to="/">Home</DesignButton>
          <DesignButton to="/about">About</DesignButton>
          <DesignButton to="/work">Work</DesignButton>
        </span>
    

        <Switch>
          <Route exact path="/">
            <div className='App'>
            <Home />  
            </div>
            
          </Route>

          <Route path="/about">
            <div className='aboutstyle'>
            <About />
            </div>
            
          </Route>

          <Route path="/work">
           <LinkedList />
          </Route>

        

        </Switch>
      </div>
    </Router>

  );
};

export default Head;

// <WorkPage />