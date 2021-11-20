import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';

import HomePage from './pages/HomePage';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <Router>
              <Switch>
                <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" component={HomePage} />
              </Switch>
        </Router>
    );
  }
}


export default App;
