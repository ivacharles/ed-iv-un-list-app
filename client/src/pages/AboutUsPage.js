import React from 'react';
import TeamSection from '../components/TeamSection';
import edwin from '../images/teamates/Edwin.png';
import iva from '../images/teamates/iva.png';
import unaiza from '../images/teamates/Unaiza.png';

function AboutUsPage(props) {
  return (
    <div className="container text-center mb-5">
      <div className="row p-5 W-75">
        <h2>About us</h2>
        <div className="container-sm" >
          <h3 className="p-3"> 
          CraigsList is one of the most used website to trade in things but it is difficult for the user to interact with and there are alot security issues that comes with it.</h3>
          <h4 className="p-3"> 
          Our mission is to design the website better, more accessible and safe to use.
          We want it easier and safer to use. We want to give users a good experience interacting with the website.
          </h4>
          <h4 className="p-3"> 
          This webapp is a better and safer version of Craigslist. It is more accessible  and has a better website design than Craigslist.
          </h4>
          <h4 className="p-3"> 
            Anyone older than 18 can use the webapp. People who want a safe way to purchase items. Users are screened and verified using ID and Photo verification.
          </h4>
        </div>    
      </div>
      <hr/>
      <hr/>
      <div className="row">
      <h2>Our Team</h2>
      <hr/>
      <hr/>
      <div className="row mx-auto  w-75 mb-5">
        <div className="col-lg-4 "><TeamSection photo={edwin} name="Edwin Samaniego" title="Backend Developer" statements="Passionate coder, responsible person, best colleague ever. That pretty much sums it up, though at least the last one my former colleagues have to confirm. I try to do a good job in all roles I have in life, and I enjoy the process immensely" profiles= "https://www.linkedin.com/in/edwinsamaniego/" /> </div>
        <div className="col-lg-4 "><TeamSection photo={iva} name="Iva Lesperance Charles" title="Frontend Developer" statements="Passionate coder, responsible person, best colleague ever. That pretty much sums it up, though at least the last one my former colleagues have to confirm. I try to do a good job in all roles I have in life, and I enjoy the process immensely" profiles= "https://www.linkedin.com/in/ivalesperancecharles/" /> </div>
        <div className="col-lg-4 "><TeamSection photo={unaiza} name="Unaiza Nizami" title="Database Administrator" statements="Passionate coder, responsible person, best colleague ever. That pretty much sums it up, though at least the last one my former colleagues have to confirm. I try to do a good job in all roles I have in life, and I enjoy the process immensely" profiles="https://www.linkedin.com/in/unaiza-nizami/" /> </div>
      </div>
      </div>
    </div>
  );
}

export default AboutUsPage;