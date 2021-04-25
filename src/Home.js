import React from "react";

const Home = ()=>{
  return(
      <>
       <section>
         <div className="d-flex align-items-center" id="header">
           <div className="container-fluid">
             <div className="row">
               <div className="col-10 mx-auto">
                <div className="row">
                 <div className="col-md-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                   <h2 className="home_h1"> Any need of softwares for your business?<br/><span>sofTech</span> is here.</h2>
                   <h4 className="home_h2"> Enthusiastic developers will make your work simpler.</h4>
                   <div className="mt-3">
                     <button className="mybtn">Get Started</button>
                   </div>
                 </div>
                 <div className="col-md-5 order-1 order-lg-2 d-flex justify-content-center">
                   <img src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" className="img-fluid myimg" alt="Code_Snippet" />
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

export default Home;