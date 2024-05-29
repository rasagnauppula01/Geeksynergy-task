import React from 'react';
import { Link } from 'react-router-dom';

const CompanyInfo = () => {
    return (
        <div>
        <div style={{marginTop:"10%", alignContent:"center",boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",borderRadius:"8px black", width:"29%",marginLeft:"36%",backgroundColor:"white"}}>
            <h1>Company Info</h1>
            <p><span style={{color:"black"}}>Company:</span> Geeksynergy Technologies Pvt Ltd</p>
            <p><span style={{color:"black"}}>Address:</span> Sanjayanagar, Bengaluru-56</p>
            <p><span style={{color:"black"}}>Phone:</span> XXXXXXXXX09</p>
            <p><span style={{color:"black"}}>Email:</span> XXXXXX@gmail.com</p>
        </div>
        <div>
            <button style={{ border:"1px solid green", height:"35px", marginTop:"20px", background:"green",color:"white"}}>
            <Link to="/movies" style={{color:"white", textDecoration:"none",fontSize:"18px",fontWeight:"bold",width:"150px",padding:"50px"}}>Back</Link></button>
        </div>
        </div>
    );
};

export default CompanyInfo;
