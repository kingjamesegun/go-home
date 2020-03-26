import React from 'react';


const Footer=()=>{
    return(
      <div className="footer">
        <div className="row">
           <h1 className="col-3">Go Home</h1>
           <div className="col-9 container">
             <ul className="footer-nav">
               <li><a href="#header">Home</a></li>
               <li><a href="#about">About</a></li>
               <li><a href="#how">How?</a></li>
               <li><a href="#mission">Mission</a></li>
               <li><a href="#faqs">FAQs</a></li>
             </ul>
           </div>
         </div>
         <p>Copyright &copy: 2020</p>
      </div>
         
    )
};


export default Footer;