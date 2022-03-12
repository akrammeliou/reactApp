import React from 'react';
import "../style.css";
import imageInSrc from "../imageInSrc.jpg";

const CheckpointJsx = () => {
    return (
        <>
            <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
                <h1 className='title red'>Akram Meliou</h1>
                <br />
                <img src="/imageInPublic.png" className='srcImg' />
                <br />
                <img src={imageInSrc} className='publicImg' />
            </div>
            <video width="320" height="240" style={{marginTop:10,marginBottom:10}} controls>
                <source src="myVideo.mp4" type="video/mp4"/>
            </video>
        </>
    );
};

export default CheckpointJsx;