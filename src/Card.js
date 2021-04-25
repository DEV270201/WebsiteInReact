import React from "react";

const Card = ({info}) => {
    return (
        <>
           <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
            <div class="card my-2  mycard" style={{width: "22rem"}}>
                <img src={info.imgsrc} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5>{info.title}</h5>
                    <p class="card-text mt-3 card_p">{info.desc}</p>
                </div>
            </div>
            </div>
        </>
    );
}

export default Card;