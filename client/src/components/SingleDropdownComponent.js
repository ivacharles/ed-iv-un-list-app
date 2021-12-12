import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../local-data/DataCategory.json'

function SingleDropdownComponent({title, desc}) {      
    let currentData = null;
    if(desc < 1){
        currentData = Object.values(Categories)[0].jobs;
        let limit = Math.floor(currentData.length /6); 
    }
  return (
      <li className="nav-item dropdown dropdown-menu-block pb-1 ">
          <a className="nav-link dropdown-toggle text-white" href="#" id="mega-menu" role="button" data-bs-toggle="dropdown" aria-expanded="false">{title} </a>
          <ul className="dropdown-menu dropdown-mega-menu-block bg-dark p-5" aria-labelledby="mega-menu">
            <div className="row mb-3" style={{height:"200px", textDecoration:"none"}}>
                <h3 className="text-white">{title}</h3>
                    {/* {Array.from(Array(limit), (e,i1) => { */}
                        {/* return <div className="col-lg-2 col-md-3 border m-3"> */}
                            <ul>
                                {currentData.forEach((category, index) => {
                                        console.log(category);
                                    // if(i2 < limit){
                                        <h1>{category}</h1>
                                    //  <li><a className="dropdown-item text-white bg-transparent " href="#"><u style={{textDecoration:"none"}}>{category}</u></a></li>; 
                                    // }
                                })}  
                            </ul>                   
                        {/* </div> */}
                    {/* })} */}
            </div>
          </ul>
      </li>
  );
}

export default SingleDropdownComponent;
  