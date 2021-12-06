import React from 'react';
import DealsFeature from '../components/DealsFeature';
import MainSection from '../components/MainSection';
import SingleDropdownComponent from '../components/SingleDropdownComponent';
import imgPlaceholder from '../images/looking_4_jobs.jpg'
import '../App.css';

function HomePage(props) {
  return (
    <div className="container-fluid">
      <Showcase />
      <TodaysDealSection />
    </div>
  );
}

export { HomePage, Footer, Menu, SubMenu};


function Menu() {
  return (
    <div className="container-fluid bg-secondary">

      <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
        <div className="container-md px-5">

          <a className="navbar-brand" href="/">EdIvUnList</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarSupportedContent">

            <form className="d-flex mx-auto ">
              <input className="col-lg-8 form-control me-2 d-none d-lg-block text-nowrap" type="search" placeholder="Search for everything here..." aria-label="Search" />
              <button className="col-lg-4 btn btn-outline-light d-none d-lg-block" type="submit">Search</button>
            </form>

            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-nowrap text-white" href="/create-listing">create a post</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-nowrap text-white" href="/login" >account</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  English
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Francais</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Spanish</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}


function SubMenu() {
  return (
    <div className="container-fluid sub-menu-bock  bg-dark" >
      <nav className="d-flex justify-content-center">
        <ul className="nav nav-pills" id="bvnodslcmal" >
          <SingleDropdownComponent title="For Sales" desc="" />
          <SingleDropdownComponent title="Trade in" desc="" />
          <SingleDropdownComponent title="Jobs" desc="" />
          <SingleDropdownComponent title="Housing" desc="" />
          <SingleDropdownComponent title="Forums" desc="" />
        </ul>
      </nav>
    </div>
  );
}

function Showcase() {
  return (
    <div className="container-md px-5">
      <div className="row d-flex justify-content-evenly py-4" >
        <MainSection img={imgPlaceholder} title="Jobs" desc="find any jobs that you want here" />
        <MainSection img={imgPlaceholder} title="Jobs" desc="find any jobs that you want here" />
        <MainSection img={imgPlaceholder} title="Jobs" desc="find any jobs that you want here" />
        <MainSection img={imgPlaceholder} title="Jobs" desc="find any jobs that you want here" />
      </div>
    </div>
  );
}


function TodaysDealSection() {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Today's Deals -All from safe sellers</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <DealsFeature title="Featured title" desc="Paragraph of text beneath the heading to explain the heading." />
        <DealsFeature title="Featured title" desc="Paragraph of text beneath the heading to explain the heading." />
        <DealsFeature title="Featured title" desc="Paragraph of text beneath the heading to explain the heading." />
        <DealsFeature title="Featured title" desc="Paragraph of text beneath the heading to explain the heading." />
        <DealsFeature title="Featured title" desc="Paragraph of text beneath the heading to explain the heading." />
        <DealsFeature title="Featured title" desc="Paragraph of text beneath the heading to explain the heading." />
        <DealsFeature title="Featured title" desc="Paragraph of text beneath the heading to explain the heading." />
        <DealsFeature title="Featured title" desc="Paragraph of text beneath the heading to explain the heading." />
      </div>
    </div>
  );
}


function Footer() {
  return (
    <div className="container-fluid  bg-dark" >
      <nav className="  py-0">
        <ul className="nav nav-pills d-flex justify-content-center">
          <li className="nav-item"><a href="/ReportUser" className="nav-link text-white" >Report User </a></li>
          <li className="nav-item"><a href="/Help" className="nav-link text-white" >Help </a></li>
          <li className="nav-item"><a href="/Safety" className="nav-link text-white">Safety</a></li>
          <li className="nav-item"><a href="/Privacy" className="nav-link text-white">Privacy</a></li>
          <li className="nav-item "><a href="/Feedback" className="nav-link text-white">Feedback</a></li>
          <li className="nav-item"><a href="/ToS" className="nav-link text-white">Terms</a></li>
          <li className="nav-item "><a href="/About" className="nav-link text-white">About</a></li>
          <li className="nav-item"><a href="/Abuse" className="nav-link text-white">Abuse</a></li>
          <li className="nav-item"><a href="/PersonalSafety" className ="nav-link text-white">Personal Safety Tips</a></li> 
          {/* <li className="nav-item"><a href="#" className="nav-link text-white">Privacy</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">FAQ</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">Safety</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">Privacy</a></li>
          <li className="nav-item "><a href="#" className="nav-link text-white">Feedback</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">Terms</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">Privacy</a></li>
          <li className="nav-item "><a href="#" className="nav-link text-white">About</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">FAQ</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">Abuse</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">Abuse</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">Legal Private Policies</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">System Staus</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white" >Help </a></li>
          <li className="nav-item"><a href="#" className ="nav-link text-white">Personal Safety Tips</a></li> */}
        </ul>
      </nav>
      <div className="container-fluid">
      <p class="text-muted text-center p-3 mb-3">&copy; Ed-Iv-Un - 2021</p> 
      </div>
    </div>
  );
}