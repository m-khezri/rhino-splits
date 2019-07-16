import React from 'react';
import './HomePage.scss';
import bgForWeb from '../../images/bgForWeb.svg';

class HomePage extends React.Component {
  render() {
    return (
      <div className="main-holder">
        <h1 className="title-h1 display-1">Rhino Splits</h1>
        <h5 className="title-h5">Online Payment Splits Application Among Friends </h5>
        <p className="title-p">Capstone project - Nashville Software School 2018-2019</p>
        <img className="bg-img" src={bgForWeb} alt="img" />
      </div>
    );
  }
}

export default HomePage;
