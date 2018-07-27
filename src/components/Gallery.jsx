import React from 'react';

const gallery = (props) => (
  <div className="gallery-container">
    <div>
      {props.pictures.map((pic, index) => (
        <div key={index}>
          <div className='gallery-card'>
            <img src={pic.url} alt={pic.caption} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default gallery;