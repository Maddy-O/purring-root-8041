import React from "react";
import { useNavigate } from "react-router-dom";

export const Credit=()=>{
    const navigate=useNavigate()
    const handleSubmit=()=>{
        alert("payment successful")
        navigate("/home")
    }
    return(
        <div>
            
            <div style={{background:'white',padding:'3%',height:'auto',width:"30%",border:"1px solid white",textAlign:'center',alignItems:'center'}}>
            <div style={{display:'flex',gap:'50%',textAlign:"justify"}}>
            <div><h4>Enter Card Details</h4>
            <p style={{marginTop:'-15%'}}>Amount: {}</p></div>
            <img style={{height:'30px',width:'30px',marginTop:'2%'}} src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png" alt="" />

            </div>
            
            <input style={{marginLeft:'-50%'}} placeholder="Card Number" type="text" />
            <div >
            <input style={{gap:'10px'}} placeholder="Expiry (MM/YY)" />
            <input placeholder="CVV" type="number" />
            </div>
            
            <button onClick={handleSubmit}>PAY{}</button>
            </div>
            
        </div>
    )
}