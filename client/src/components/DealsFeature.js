import React from 'react';
import { Link } from 'react-router-dom';

function DealsFeature({img, title, desc}) {
  return (
    <div class="card mb-1" >
    <div class="row g-0">
      <div class="col-md-4 mt-4 mx-0 p-0">
        <img src={img} class="img-fluid"/>
      </div>
      <div class="col-md-8  mx-0 p-0">
        <div class="card-body ">
          <h5 class="card-title">{title}</h5>
          <p class="card-text"><small class="text-muted">{desc}</small></p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default DealsFeature;