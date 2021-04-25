import React,{useState,useEffect} from "react";

const Contact = () => {
  
  const[data,setData] = useState({
    fullname: "",
    email: "",
    education: "",
    message: "",
  });
  const[users,setusers] = useState([]);

  useEffect(()=>{
     console.log(users.length);
     console.log(users);
  },[users]);

  const update = (event)=>{
    const {name,value} = event.target;
    setData((prevdata)=>{
      // console.log(prevdata);
      // console.log([name])
      return{
        ...prevdata,
        [name] : value,
        
      };
    });
  }

  const submit_form = (event)=>{
    alert(`Name : ${data.fullname}
           Email-id : ${data.email}
           Education : ${data.education}
           Message: ${data.message}`);
    setData({
      fullname: "",
      message: "",
      education: "",
      email: "",
    });
    console.log("state updated");
    setusers((prevUsers)=>{
      return[...prevUsers,data];
    });
    console.log("list updated");
  }

  return (
    <>
      <div className="my-3">
        <h2 className="contact_h2 text-center">Contact Us</h2>
      </div>
      <div className="container contact">
        <div className="row">
          <div className="col-md-6 col-11 mx-auto">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name </label>
                <input type="text" className="form-control myform" id="exampleFormControlInput1" name="fullname" value={data.fullname} required placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control myform" id="exampleFormControlInput1" name="email" value={data.email} required placeholder="Enter your mail" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Education</label>
                <input type="text" className="form-control myform" id="exampleFormControlInput1" name="education" value={data.education} required placeholder="Enter your education" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control myform" id="exampleFormControlTextarea1" rows="3" required name="message" value={data.message} ></textarea>
              </div>
              <button className="btn btn-outline-primary" onClick={submit_form} >Submit</button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default Contact;