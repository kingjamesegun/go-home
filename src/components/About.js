import React from 'react';
import image from '../assets/board.jpg'


const About=()=>{
    return(
        <div className="about-section" id="about">
            <div className="row ">
            <div className="col-lg-6 ">
                    <img src={image} alt="home unboarding about" class="image"/>
                </div>
                <div className="col-lg-6  about">
                    <h1>About the app</h1>
                    <p>There are so many routes that seems to lead leads home, but not all routes leads to the direction of home and we end of finding ourselves caught up in the middle of where seems to be nowhere, this can be the most embarrassing thing that could happen to anyone- being lost, especially when you’ve just recently moved to a new neighborhood.
The good thing is that the Go home app points to the only direction of interest which is home. You don’t need to worry about going to a new place because we have always got your back you will never lose track of your way back home. 
</p>


                </div>
                
                
              </div>
           
            
        </div>
    )
}

export default About;