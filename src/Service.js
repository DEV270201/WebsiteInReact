import React from "react";
import Card from "./Card";
import Serviceinfo from "./Serviceinfo";

const Service = ()=>{
  return(
      <>
       <div className="my-4">
         <h2 className="text-center service_h2">Our Services</h2>
       </div>
       <div className="container-fluid mb-5">
         <div className="row">
           <div className="col-10 mx-auto">
             <div className="row">
                  {
                    Serviceinfo.map((info,index)=>{
                      return <Card info={info} key={index} />
                    })
                  }
             </div>
           </div>
         </div>
       </div>
      </>
  );
}

export default Service;