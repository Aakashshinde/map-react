import React from "react";
import classes from './Footer.module.css';
// import map from '../images/logo.jpg'
function Footer(){
    const style={
        "font-weight":"bold"
    };
    return  ( 
    
    <React.Fragment><div className={classes.footer} > 
    <div className="row"> 
    <div className="col-sm-3" >
        <ul className={classes.footerul}>
            <li className={classes.footerli}><a href="footer.html">
                {/* <img src={map} width="70px" height="45px"/> */}
                </a>
                <span style={style}>MAP Solutions</span>
                <figcaption>Copyright © 2022 MAP Software Ltd.<br></br>
                  All rights reserved.</figcaption>
            </li>
          </ul>
    </div>
    <div className="col-sm-3"></div>
    <div className="col-sm-6">
        <div className="row" >
            <div className="col-sm-9"></div>
        <div className="col-sm">
            <ul className={classes.footerul}>
                <li className={classes.footerli}><i className="fa-brands fa-twitter fa-lg"></i></li>
                <li className={classes.footerli}><i className="fa-brands fa-facebook fa-lg"></i></li>
                <li className={classes.footerli}><i className="fa-brands fa-linkedin-in fa-lg" ></i></li>
                <li className={classes.footerli}><i className="fa-solid fa-wifi fa-lg" ></i></li>
                <li className={classes.footerli}><i className="fa-brands fa-youtube fa-lg"></i></li>
            </ul>
        </div>
        </div>
        <div className = "row" >
            <ul className={classes.footerul}>
                <li className={classes.footerli}>Terms and Conditions</li>
                <li className={classes.footerli}>Privacy and Policy</li>
                <li className={classes.footerli}>Cookie Preferences</li>
            </ul>
        </div>
        
        </div>
    </div>

</div>
</React.Fragment>);
}
export default Footer;