import React from 'react';
import { Link } from 'react-router-dom';

function SingleDropdownComponent({title, desc}) {
  return (
      <li className="nav-item dropdown dropdown-menu-block pb-1">
          <a className="nav-link dropdown-toggle text-white" href="#" id="mega-menu" role="button" data-bs-toggle="dropdown" aria-expanded="false">{title} </a>
          <ul className="dropdown-menu dropdown-mega-menu-block bg-dark p-5" aria-labelledby="mega-menu">
                <h3 className="text-white">Buy and Sell from our Categories</h3>
            <div className="row" >
            <li className="col-lg-3  col-md-3 col-sm-3 col-xs-6">
                <ul>
                    <li><hr className="dropdown-divider" /></li>
                 <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> appliances </u> </a> </li>
                 <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> arts+crafts </u> </a> </li>
                <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}>  atv/utv/sno </u> </a> </li>
                 <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> auto parts </u> </a> </li>  
                 <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> aviation </u> </a> </li>
                 <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> baby+kid </u> </a> </li>
                 <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> barter </u> </a> </li>
                 <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> beauty+hlth </u> </a> </li>
                 <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> bike parts </u> </a> </li>
                 <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> bikes </u> </a> </li>
                 <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> boat parts </u> </a> </li>
                </ul>
            </li>
            <li className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <ul>
                    <li><hr className="dropdown-divider" /></li>           
            <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> boats </u> </a> </li>  
            <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> books </u> </a> </li>
            <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> business </u> </a> </li>
            <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> cars+trucks </u> </a> </li>
            <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> cds/dvd/vhs </u> </a> </li>
            <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> cell phones </u> </a> </li>
             <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> clothes+acc </u> </a> </li>
            <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}>  collectibles </u> </a> </li>
             <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> computer parts </u> </a> </li>
             <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> computers </u> </a> </li>
             <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> electronics </u> </a> </li>
                </ul>
            </li>
            <li className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <ul>
                    <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> farm+garden </u> </a> </li>
                      <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> free </u> </a> </li>
                      <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> furniture </u> </a> </li>
                      <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> garage sale </u> </a> </li> 
                      <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> general </u> </a> </li>
                      <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> heavy equip </u> </a> </li>
                      <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> household </u> </a> </li>
                      <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> jewelry </u> </a> </li>
                      <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> materials </u> </a> </li>
                      <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> motorcycle parts </u> </a> </li>
                      <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> motorcycles </u> </a> </li>                      
                </ul>
            </li>
            <li className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                <ul>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> music instr </u> </a> </li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> photo+video </u> </a> </li>
     <              li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}>  rvs+camp </u> </a> </li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> sporting </u> </a> </li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> tickets </u> </a> </li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> tools </u> </a> </li>                  
                     <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> toys+games </u> </a> </li>
                     <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> trailers </u> </a> </li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}>  video gaming </u> </a> </li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}>  wanted </u> </a> </li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}>  wheels+tires </u> </a> </li>
                </ul>
            </li>
            </div>
          </ul>
      </li>
  );
}

export default SingleDropdownComponent;



               
               
               
            //    
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> accounting+finance </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> admin / office </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> arch / engineering </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> art / media / design </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> biotech / science </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> business / mgmt </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> customer service </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> education </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> etc / misc </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> food / bev / hosp </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> general labor </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> government </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> human resources </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> legal / paralegal </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> manufacturing </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> marketing / pr / ad </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> medical / health </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> nonprofit sector </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> real estate </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> retail / wholesale </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> sales / biz dev </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> salon / spa / fitness </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> security </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> skilled trade / craft </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> software / qa / dba </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> systems / network </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> technical support </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> transport </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> tv / film / video </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> web / info design </u></a></li> */}
{/* <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}> writing / editing */}
               {/*  */}
               {/*  */}
               {/*  */}
             
             
             
             
             
             
             
             
              
              
              
              
              
              
              
              
              
              
          
          
          
          
          
          
          
          
          
          
          
          





