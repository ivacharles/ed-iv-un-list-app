<<<<<<< HEAD


import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
=======
import React from 'react';
import { 
  BrowserRouter as
  Router,
  Route,
  Switch, 
>>>>>>> 8771af42d3193f9180fc3b8096dde86e5dabd066
  Link,
  NavLink
} from 'react-router-dom';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
<<<<<<< HEAD

import HomePage from './pages/HomePage';
import './App.css';
=======
import Account from './pages/Account';
// import Footer from '';

import {Footer, HomePage, Menu, SubMenu} from './pages/HomePage';
import './App.css';
import PersonalSafetyTips from './pages/PersonalSafetyTips';
>>>>>>> 8771af42d3193f9180fc3b8096dde86e5dabd066

class App extends React.Component {
  render() {
    return (
        <Router>
<<<<<<< HEAD
              <Switch>
                <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" component={HomePage} />
              </Switch>
=======
          <Menu />
          <SubMenu />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/posts/new">
              <PostFormPage />
            </Route>
            <Route path="/posts/">
              <ShowPostPage />
            </Route>
            <Route path="/About">
              <AboutUsPage />
            </Route>
            <Route path="/PersonalSafety">
              <PersonalSafetyTips />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            {/* Format : 
              <Route path="/PlaceItLinksTo">
                <React Function />
              </Route>
            */}
          </ Switch>
          <Footer />
>>>>>>> 8771af42d3193f9180fc3b8096dde86e5dabd066
        </Router>
    );
  }
}


export default App;
