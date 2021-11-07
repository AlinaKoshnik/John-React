import React from "react"

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content container">
           <div className="footer-social social">
               <a href="" className="social-item ">
                   <img  className="_icon-fb" src="/icon/fb.svg" alt=""/>
               </a>
               <a href="" className="social-item ">
                   <img className="_icon-insta" src="/icon/insta.svg" alt=""/>
               </a>
               <a href="" className="social-item ">
                   <img className="_icon-Group" src="/icon/Group.svg" alt=""/>
               </a>
               <a href="" className="social-item ">
                   <img className="_icon-Linkedin" src="/icon/Linkedin.svg" alt=""/>
               </a>
           </div> 
           <div className="footer-copy">Copyright ©2020 All rights reserved </div>
        </div>
    </footer>
    )
}

export default Footer