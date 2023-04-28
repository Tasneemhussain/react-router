import { useState } from "react";

const Login = () => {

    const [email,setEmail]= useState ("")
    const [password,setPassword]= useState ("")

    const handelsubmit = (e) => {
        e.preventDefault() 
    }
    return (

       <from  onSubmit={handelsubmit} className="mt-3">
        <div  className="form-group mb-3">
            <label className="from-label">Email</label>
            <input 
            type="email"
            className="form-control"
            placeholder="Enter email"
            value = {email}
            onChange={(e) => setEmail (e.target.value)} 
            />
        </div>
        <div className="form-group mb-3">
            <label className="from-label">password</label>
            <input 
            type="password"
            className="form-control"
            placeholder="password"
            value = {password}
            onChange={(e) => setPassword (e.target.value)} 
            />
        </div>
        <button disabled= {email  === "" || password ==="" } className="btn btn-primary">
        log in
        </button>

       </from>
    );
};

export default Login ;