import React from 'react';
import { Link } from 'react-router-dom';

function MainSection({img, title, desc}) {
  return (
    <div className="col-5  col-md-3 col-lg-3">
      <div class="card" >
            <img src={img} class="card-img-top" alt="Jobs"/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                {/* <p class="card-text">{desc}</p> */}
            </div>
        </div>
    </div>
  );
}

export default MainSection;