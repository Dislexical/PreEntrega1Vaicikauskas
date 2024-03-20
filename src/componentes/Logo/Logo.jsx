import React from "react";
import logoCasa from './assets/Casa.png';
import classes from './Logo.module.css'


const Logo = () => {
    return (
        <a className='d-flex flex-column justify-content-center align-items-center'>
            <div>
                <img className={classes.imgLogo} src={logoCasa} alt="Logo Casa" />
            </div>
            <p className={classes.nameLogo}></p>
        </a>
    );
}

export default Logo;