import React from "react";

const About = ()=>{
  return(
      <>
      <section>
         <div className="d-flex align-items-center" id="header2">
           <div className="container-fluid">
             <div className="row">
               <div className="col-10 mx-auto">
                <div className="row">
                 <div className="col-md-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                   <h2 className="about_h1 text-center">About Us</h2>
                   <h4 className="about_h2 mt-3"><span><b>softTech</b></span> is a one stop destination for all your software development needs to boost up your buisness.
                   We are the team of passionate developers who work harder everyday to meet our clients deadlines. Don't think too much ...just get started</h4>
                   <div className="mt-3">
                     <button className="mybtn">View our recent projects</button>
                   </div>
                 </div>
                 <div className="col-md-5 order-1 order-lg-2 d-flex justify-content-center">
                   <h1 className="logo"> :-||-: </h1>
                 </div>
               </div>
               </div>
             </div>
           </div>
         </div>
       </section>
      </>
  );
}

export default About;