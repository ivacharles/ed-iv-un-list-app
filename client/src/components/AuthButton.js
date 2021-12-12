import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AuthButton = withRouter(({ history }) => {
  const auth = useContext(AuthContext);
  if(!auth.isAuthenticated) {
    return <Link className="nav-link text-nowrap text-white" to="/login">log in</Link>;
  }
  else{
    return (
      <Link className="nav-link text-nowrap text-white" to="/dashboard">Account</Link>
      );
  }
});

export default AuthButton;