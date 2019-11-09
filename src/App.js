import React from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import HomePage from './containers/Home';
import AboutPage from './containers/About';
import WorkPage from './containers/Works';
import SkillsPage from './containers/Skills';
import TestimonialPage from './containers/Testimonial';
import ContactPage from './containers/Contact';
import PageNotFound from './containers/PageNotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/works' component={WorkPage} />
      <Route exact path='/skills' component={SkillsPage} />
      <Route exact path='/testimonial' component={TestimonialPage} />
      <Route exact path='/contact' component={ContactPage} />
      <Route component={PageNotFound} />
      </Switch>
    </div></BrowserRouter> 
  );
}

export default App;
