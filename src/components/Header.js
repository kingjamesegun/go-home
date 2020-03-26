import React from 'react';
import image from '../assets/get direction unboarding image.png';
import image1 from '../assets/IMG-20200326-WA0011.jpg';
import image2 from '../assets/IMG-20200326-WA0012.jpg'


const Header =()=>{
    return(
        <div id="header" >
                    
            <nav className="navbar navbar-expand-md fixed-top nav-color">
                <a class="navbar-brand" href="#header">Go Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon" className="toggle"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarsExample04">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#header">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#about">About<span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item active">
                        <a class="nav-link" href="#how">How?<span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item active">
                        <a class="nav-link" href="#mission">Mission<span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item active">
                        <a class="nav-link" href="#faqs">FAQs<span class="sr-only">(current)</span></a>
                      </li>
                      </ul>
                      
    
                </div>
              </nav>

              <div class="row ">
                <div class="col-lg-6  home">
                    <h1>Go Home</h1>
                    <p>Want to always find your way home no matter where you are or at any time of the day, all
                        you need is the Go Home app installed on your mobile device.</p>
                        <a href="https://play.google.com/store/apps/details?id=com.morgan.gohome"><img src={image1} alt="playstore link" className="store"/></a>
                        <a href="#"><img src={image2} alt="appstore link"className="store" /></a>


                </div>
                <div class="col-lg-6 ">
                    <img src={image} alt="compass" class="image"/>
                </div>
                
              </div>
              <div className="more">
              <h1 className="lost"></h1>
              <p></p>
              </div>
        
        </div>
    );
}

export default Header;