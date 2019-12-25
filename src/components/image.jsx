import React from 'react';

const Image = (props) => {
    const {image}=props;
    return ( 
  <div> <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand">
        <img alt="Brand" src={image} height="300" width="2000"/>
      </a>
    </div>
  </div>
</nav></div> 
  );
}
 
export default Image;