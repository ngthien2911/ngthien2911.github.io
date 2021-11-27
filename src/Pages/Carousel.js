

import React from 'react';
import "./carousel.scss";
import $ from 'jquery'; 
import clothes from '../clothes2.png';
import gift from '../gift.png'
import clothes1 from '../clothes.png';


function Carousel(props) {

    
    return (
        <><div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={gift} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="caroutitle">Chrismast is coming!</h5>
              <p className="caroudescrip">Let's buy gifts for your family!</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={clothes} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="caroutitle">Forget about the price</h5>
              <p className="caroudescrip">This is the biggest sale season of the year</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={clothes1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="caroutitle">Come with us</h5>
              <p className="caroudescrip">You will be satisfied</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div></>
    );
}

export default Carousel;