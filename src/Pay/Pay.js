import React from "react";
import {useNavigate} from 'react-router-dom'

const Pay=()=>{
    const navigate=useNavigate()
    // const handleClick=()=>{
    //     navigate("/credit")
    // }
    const handleClick1=()=>{
        navigate("/bank")
    }
    const handleClick2=()=>{
        navigate("/mobile")
    }
    return(
        <div>
            {/* <h1>Hello</h1> */}
            <div style={{background:'black',textAlign:"left"}}>
                <div style={{color:'white'}}> INR {} </div>
                <div style={{color:'white'}}>{}</div>
            </div>
            <div style={{height:"auto",width:"35%",textAlign:"center",paddingLeft:'36%'}}>
                {/* credit */}
            <div onClick={()=>navigate("/credit")} style={{display:'flex'}}>
            <img style={{height:'40px',width:'35px'}} src="https://zoomcar-assets.zoomcar.com/images/original/97f051d76793fffe5ab182ffa58b8eb47c5ba0cf.png?1584453494" alt="" />
            <div style={{marginLeft:'2%',textAlign:"justify"}}>
            <p style={{marginTop:'-1%'}}>Credit / Debit / ATM Card </p>
            <p style={{fontSize:'13px',marginTop:'-7%'}}>All major card provider are supported</p>
            </div>
            </div>
            <hr></hr>
            {/* Banking */}

            <div onClick={handleClick1} style={{display:'flex'}}>
            <img style={{height:'40px',width:'35px'}} src="https://zoomcar-assets.zoomcar.com/images/original/4dd051886e5403aafb9725b7d2ab42c80f9b1df6.png?1584453529" alt="" />
            <div style={{marginLeft:'2%',textAlign:"justify"}}>
            <p style={{marginTop:'-1%'}}>Net Banking</p>
            <p style={{fontSize:'13px',marginTop:'-7%'}}>All major banks are supported</p>
            </div>
            </div>
            <hr />
            
            {/* Wallet */}
            <div onClick={handleClick2} style={{display:'flex'}}>
            <img style={{height:'40px',width:'35px'}} src="https://zoomcar-assets.zoomcar.com/images/original/1317404625e385185d23ea43a0c34569d6432d09.png?1632130014" alt="" />
            <div style={{marginLeft:'2%',textAlign:"justify"}}>
            <p style={{marginTop:'-1%'}}>Mobile Wallet</p>
            <p style={{fontSize:'13px',marginTop:'-7%'}}>Paytm Wallet + Postpaid</p>
            </div>
            </div>
            <hr />

            {/* UPI */}
            <div style={{display:'flex'}}>
            <img style={{height:'40px',width:'35px'}} src="https://zoomcar-assets.zoomcar.com/images/original/9fcb8335a89265849f23225858489f2a9ce8e121.png?1584453574.png?1632130014" alt="" />
            <div style={{marginLeft:'2%',textAlign:"justify"}}>
            <p style={{marginTop:'-1%'}}>UPI</p>
            <p style={{fontSize:'13px',marginTop:'-7%'}}>Get ₹29 Instant Cashback on using any UPI payment</p>
            </div>
            </div>
            </div>
            
        </div>
    )
}
export {Pay}