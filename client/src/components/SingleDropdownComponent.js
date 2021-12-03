import React from 'react';
import { Link } from 'react-router-dom';

function SingleDropdownComponent({title, desc}) {
  return (
      <li className="nav-item dropdown dropdown-menu-block pb-1">
          <a className="nav-link dropdown-toggle text-white" href="#" id="mega-menu" role="button" data-bs-toggle="dropdown" aria-expanded="false">{title} </a>
          <ul className="dropdown-menu dropdown-mega-menu-block bg-dark p-5" aria-labelledby="mega-menu">
            <div className="row" >
            <li className="col-lg-3 col-md-3">
                <h3 className="text-white">Title Menu One</h3>
                <ul>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>  
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                </ul>
            </li>
            <li className="col-lg-3 col-md-3">
                <h3 className="text-white">Title Menu Two</h3>
                <ul>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>  
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                </ul>
            </li>
            <li className="col-lg-3 col-md-3">
                <h3 className="text-white">Title Menu One</h3>
                <ul>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>  
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                </ul>
            </li>
            <li className="col-lg-3 col-md-3">
                <h3 className="text-white">Title Menu Two</h3>
                <ul>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>  
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                </ul>
            </li>
            </div>
          </ul>
      </li>
  );
}

export default SingleDropdownComponent;