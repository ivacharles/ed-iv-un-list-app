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
            <Route path="/login" component={ SingInSignUp } />
            <Route path="/dashboard" component={ UserDashboard }/>
            <Route path="/dashboard">
              <UserDashboard />
            </Route>
            <Route path="/create-listing">
              <ListingForm />
            </Route>
            <Route path="/posting-card">
              <ListingCard />
            </Route>
            {/* Format : 
              <Route path="/PlaceItLinksTo">
                <React Function />
              </Route>
            */}
          </ Switch>
          <Footer />
        </Router>
      </AuthProvider>
    );
  }
}


export default App;
