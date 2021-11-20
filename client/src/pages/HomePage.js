import React from 'react';
import DealsFeature from '../components/DealsFeature';
import MainSection from '../components/MainSection';
import SingleDropdownComponent from '../components/SingleDropdownComponent';
import imgPlaceholder from '../images/looking_4_jobs.jpg'
import '../App.css';

function HomePage(props) {
  return (
    <div classNameName="container-fluid">
        <Menu />
        <SubMenu />
        <Showcase />
        <TodaysDealSection />
        <Footer />
    </div>
  );
}

export default HomePage;


function Menu(){
    return(
      <div className="container-fluid bg-secondary">

        <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
          <div className="container-md px-5">

            <a className="navbar-brand" href="#">EdIvUnList</a>

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
                  <a className="nav-link text-nowrap text-white" href="#">create a post</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-nowrap text-white" href="#" >account</a>
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


function SubMenu(){
    return(
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

function Showcase(){
    return(
      <div className="container-md px-5">
        <div className="row d-flex justify-content-evenly py-4" >
            <MainSection img={imgPlaceholder} title="Jobs" desc="find any jobs that you want here"/>
            <MainSection img={imgPlaceholder} title="Jobs" desc="find any jobs that you want here"/>
            <MainSection img={imgPlaceholder} title="Jobs" desc="find any jobs that you want here"/>
            <MainSection img={imgPlaceholder} title="Jobs" desc="find any jobs that you want here"/>
        </div>
      </div>
    );
}


function TodaysDealSection(){
    return (
        <div class="container px-4 py-5" id="icon-grid">
            <h2 class="pb-2 border-bottom">Today's Deals -All from safe sellers</h2>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                <DealsFeature title="Featured title" desc="Paragraph of text beneath the heading to explain the heading."/>
                <DealsFeature title="Featured title" desc="Paragraph of text beneath the heading to explain the heading."/>
                <DealsFeature title="Featured title" desc="Paragraph of text beneath the heading to explain the heading."/>
                <DealsFeature title="Featured title" desc="Paragraph of text beneath the heading to explain the heading."/>
                <DealsFeature title="Featured title" desc="Paragraph of text beneath the heading to explain the heading."/>
                <DealsFeature title="Featured title" desc="Paragraph of text beneath the heading to explain the heading."/>
                <DealsFeature title="Featured title" desc="Paragraph of text beneath the heading to explain the heading."/>
                <DealsFeature title="Featured title" desc="Paragraph of text beneath the heading to explain the heading."/>
            </div>
        </div>
    );
}


function Footer(){
    return(
        <div class="container-fluid  bg-dark" >
            <nav class="  py-0">
                <ul class="nav nav-pills d-flex justify-content-center">
                    <li class="nav-item"><a href="#" class="nav-link text-white" >Help </a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white">Safety</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white">Privacy</a></li>
                    <li class="nav-item "><a href="#" class="nav-link text-white">Feedback</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white">Terms</a></li>                 <li class="nav-item"><a href="#" class="nav-link text-white">Privacy</a></li>
                    <li class="nav-item "><a href="#" class="nav-link text-white">About</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white">FAQ</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white">Safety</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white">Privacy</a></li>
                    <li class="nav-item "><a href="#" class="nav-link text-white">Feedback</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white">Terms</a></li>                 <li class="nav-item"><a href="#" class="nav-link text-white">Privacy</a></li>
                    <li class="nav-item "><a href="#" class="nav-link text-white">About</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white">FAQ</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white">Abuse</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white">Abuse</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white">Legal Private Policies</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white">System Staus</a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white" >Help </a></li>
                    <li class="nav-item"><a href="#" class="nav-link text-white">Personal Safety Tips</a></li>
                </ul>
            </nav>
        </div>
    );
}