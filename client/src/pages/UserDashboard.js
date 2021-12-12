import React, { useContext } from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {GrNotes,} from 'react-icons/gr';
import {VscAccount, VscSettingsGear} from 'react-icons/vsc';
import { AuthContext } from '../context/AuthContext';
import { withRouter, Link } from 'react-router-dom';

const LogOutButton = withRouter(({ history }) => {
const auth = useContext(AuthContext);
  const logout = () => { auth.signout().then(() => history.push('/')); }
  return (
      // without the TO in the link it caused a crash
      <Link className="nav-link active text-dark" onClick={logout} to={'/'}>Log Out</Link>
  );
});

function UserDashboard(props) {
    const auth = useContext(AuthContext);
    return (
        <div className="container-fluid">
        <div className="row">
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                <li className="nav-item ">
                    <a className="nav-link active text-dark" aria-current="page" href="/">
                    <span data-feather="home "> </span>
                    <AiOutlineHome size="40"/>
                    </a>
                </li>
                <li className="nav-item">
                    {/* <Link className="nav-link" to={'#'} /> */}
                    <Link
                    className='nav-link'
                    to={'#'}
                    >
                    <span data-feather="file"></span>
                    <GrNotes /> Postings
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    className='nav-link'
                    to={'#'}
                    >
                    <span data-feather="shopping-cart"></span>
                    Products
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to={'#'} >
                    <span data-feather="users"></span>
                    Customers
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to={'#'} >
                    <span data-feather="bar-chart-2"></span>
                    Reports
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to={'#'} >
                    <span data-feather="layers"></span>
                    Integrations
                    </Link>
                </li>
                </ul>
                <Link className='nav-link' to={'#'} >
                    <span>
                        <VscAccount />
                        Account
                    </span>
                </Link>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                
                <a className="link-secondary" href="#" aria-label="Add a new report">
                    <span data-feather="plus-circle"></span>
                </a>
                </h6>
                <ul className="nav flex-column mb-2">
              {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Current month
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Last quarter
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Social engagement
                  </a>
              </li> */}
                <li className="nav-item">
                <Link className='nav-link text-dark' to={'#'} >
                    <span data-feather="file-text"></span>
                    <VscSettingsGear /> Settings
                </Link>
                </li>
                <li>
                    <LogOutButton />
                </li>
                </ul>
            </div>
            </nav>
  
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Welcome {auth.user.first_name}</h1> 
              <div className="btn-toolbar mb-2 mb-md-0">
              {/* <div className="btn-group me-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar"></span>
                  This week
              </button> */}
              </div>
          </div>
  
          <div className="container-md border border-warning ">
            <h2>Posting</h2>

          </div>
  
          </main>
      </div>
      </div>
    );
}

export default UserDashboard;


// title ...
// post-img client\src\images\post-images\Screenshot (1).png