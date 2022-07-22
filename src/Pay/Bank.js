import React from 'react'

export const Bank = () => {
  return (
    <div>
        <div style={{background:'white',padding:'3%',height:'auto',width:"30%",border:"1px solid white",textAlign:'center',alignItems:'center'}}>
            <div style={{display:'flex',gap:'50%',textAlign:"justify"}}>
            <div><h4>Select Bank Account</h4>
            <p style={{marginTop:'-15%'}}>Amount: {}</p></div>
            <img style={{height:'30px',width:'30px',marginTop:'2%'}} src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png" alt="" />

            </div>
            <h5>POPULAR BANKS</h5>
            <div style={{display:'flex',gap:"5%"}}>
                <img style={{height:"30px", width:"30px"}} src='https://zoomcar-assets.zoomcar.com/images/original/f380ffaa7f80bdc586f469a53a3caea8887d84a4.png?1584601955' alt=''/>
                <p style={{marginTop:"-0.1%"}}>HDFC Bank</p>
            </div>
            <hr/>

            <div style={{display:'flex',gap:"5%"}}>
                <img style={{height:"30px", width:"30px"}} src='https://zoomcar-assets.zoomcar.com/images/original/27eac78721d3d14bc9df34231bce661e1d510e8f.png?1584602001' alt=''/>
                <p style={{marginTop:"-0.1%"}}>State Bank of India</p>
            </div>
            <hr/>

            <div style={{display:'flex',gap:"5%"}}>
                <img style={{height:"30px", width:"30px"}} src='https://zoomcar-assets.zoomcar.com/images/original/312f0e8f319287aa09b1e96b45a7d82cabf6184a.png?1584601979' alt=''/>
                <p style={{marginTop:"-0.1%"}}>ICICI Netbanking</p>
            </div>
            <hr/>

            <div style={{display:'flex',gap:"5%"}}>
                <img style={{height:"30px", width:"30px"}} src='https://zoomcar-assets.zoomcar.com/images/original/d79d466d40fc7df794e2e1c907db212e52d4f47f.png?1584601931' alt=''/>
                <p style={{marginTop:"-0.1%"}}>Axis Bank</p>
            </div>
            <hr/>
            </div>
    </div>
  )
}
