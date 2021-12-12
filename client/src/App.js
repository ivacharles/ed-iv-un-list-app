import React from 'react';
import { 
  BrowserRouter as
  Router,
  Route,
  Switch
} from 'react-router-dom';
import {Footer, HomePage, Menu, SubMenu} from './pages/HomePage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import SingInSignUp from './pages/SignInSignUp';
import UserDashboard from './pages/UserDashboard';
import ListingForm from './components/ListingForm';
import ListingCard from './components/ListingCard';
import { AuthProvider } from './context/AuthContext';
import PersonalSafetyTips from './pages/PersonalSafetyTips';
import './App.css';

class App extends React.Component {
render() {
  return (
    <AuthProvider>
      <Router>
        <Menu />
        <SubMenu />
        <Switch>
          {/* Any additional pages should follow this format */}
          {/* <Route path="/PlaceItLinksTo" component={PAGE / FUNCTION / CLASS} /> */}
          <Route exact path="/" component={HomePage} />
          <Route path="/posts/" component={ShowPostPage} />
          <Route path="/posts/new" component={PostFormPage} />
          <Route path="/About" component={AboutUsPage} />
          <Route path="/PersonalSafety" component={PersonalSafetyTips} />
          <Route path="/login" component={ SingInSignUp } />
          <Route path="/dashboard" component={ UserDashboard }/>
          <Route path="/create-listing" component={ListingForm}/>
          <Route path="/posting-card" component={ListingCard} />
          </ Switch>
          <Footer />
        </Router>
      </AuthProvider>
    );
  }
}


export default App;
