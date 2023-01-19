import React from "react";
import { Link } from "react-router-dom";
import './index.css'
import Mainimg from '/home/shubhamp/practice/Library_management_system/lms/src/components/images/Main.jpeg'
import bgimg from '/home/shubhamp/practice/Library_management_system/lms/src/components/images/logo.jpeg';

// import bootstrap from 'bootstrap';

function Navbar() {



    //    signinup function start
    function signupfunction() {
        if (window.confirm("do u want to signup")) {
            window.location.to = "http://127.0.0.1:5502/";


        }
        else {
            // alert('fine, if not want');
            window.location.to = "http://127.0.0.1:5502/index.html";
        }
    }
    // signinup function end



    // signinin function start
    function signinfunction() {

        if (window.confirm("do you want to signin")) {
            window.location.to = "http://127.0.0.1:5502/Login.html";
        }
        else {
            window.location.to = "http://127.0.0.1:5502/Login";

        }
    }
    // signin function end


    return (
        <>

            {/* navbar start */}

            <nav className="navbar navbar-expand-md navbar-light bg-secondary bg-gradient sticky-lg-top  ">
                <div className="container-fluid">
                    <Link className="navbar-brand bg-imageFluid" to="#" >
                    <img  style={{ height: "50px", width: "90%" }} src={bgimg} />
                     </Link>

                    {/* toggle button start */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* toggle button end */}
                     <div className="nav-brand d-s-inline " style={{width:"auto" ,margin:"auto" , height:"auto "}}><h1 id="heading"> <span id="headingTag" >Library</span> Management System</h1></div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{margin:"auto"}}>
                        <ul className="navbar-nav ms-auto f-right mb-0">
                            <li className="nav-item m-auto f-right">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>

                            {/* 
          <li className="nav-item">
            <Link className="btn btn-outline-dark mx-2 " onClick={signupfunction} id="demo" role="button">Signup</Link>
          </li> */}
                            <li className="nav-item">
                                <Link className="btn btn-outline-dark" to="/Login" onClick={signinfunction} role="button">Login</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            {/* navbar end */}

            <div className="image-main">
                <img  className="image-main" src={Mainimg} alt="image"></img>
            </div>


        </>
    );


}

export default Navbar;