import React from 'react';
import { Link } from 'react-router-dom';

function DealsFeature({title, desc}) {
  return (
      <div class="col d-flex align-items-start">
          <i class="fas fa-car fa-2x"></i>
          <div>
              <h4 class="fw-bold mb-0">{title}</h4>
              <p>{desc}</p>
          </div>
      </div>
  );
}

export default DealsFeature;