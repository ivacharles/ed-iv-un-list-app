import React from 'react';
import { 
  BrowserRouter as
  Router,
  Route,
  Switch, 
  Link,
  NavLink
} from 'react-router-dom';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import Account from './pages/Account';
// import SignUp from './pages/SignInSignUp';
import SingInSignUp from './pages/SignInSignUp';
import UserDashboard from './pages/UserDashboard';
import ListingForm from './components/ListingForm';
import ListingCard from './components/ListingCard';

// import Footer from '';

import {Footer, HomePage, Menu, SubMenu} from './pages/HomePage';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import PersonalSafetyTips from './pages/PersonalSafetyTips';

class App extends React.Component {
render() {
  return (
    <AuthProvider>
      <Router>
        <Menu />
        <SubMenu />
        <Switch>'
          <Route exact path="/" component={HomePage} />
          <Route path="/posts/new" component={PostFormPage} />
            <Route path="/posts/" component={ShowPostPage} />
            <Route path="/About" component={AboutUsPage} />
            <Route path="/PersonalSafety" component={PersonalSafetyTips} />
            <Route path="/account" component={Account} />
            <Route path="/login" component={ SingInSignUp } />
            <Route path="/dashboard" component={ UserDashboard }/>
            <Route path="/create-listing" component={ListingForm}/>
            <Route path="/posting-card" component={ListingCard} />
            {/* Format : 
              <Route path="/PlaceItLinksTo" component={PAGE / FUNCTION / CLASS} />
            */}
          </ Switch>
          <Footer />
        </Router>
      </AuthProvider>
    );
  }
}


export default App;
