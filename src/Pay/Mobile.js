import React from 'react'

const Mobile = () => {
  return (
    <div>
        <div style={{display:'flex',gap:'10%',textAlign:"justify"}}>
            <div><h4>Select Mobile Wallet</h4>
            <p style={{marginTop:'-15%'}}>Amount: {}</p></div>
            <img style={{height:'30px',width:'30px',marginTop:'2%'}} src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png" alt="" />

            </div>
            <div style={{display:'flex',gap:"5%"}}>
                <img style={{height:"30px", width:"30px"}} src='https://img1.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070' alt=''/>
                <p style={{marginTop:"-0.1%"}}>PayTM</p>
            </div>
    </div>
  )
}

export default Mobile