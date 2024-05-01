// Footer.js
import React from 'react';
import "./Footer.css"

const Footer = () => {
    const year = new Date()
    return (
        <footer class="flex-container">
            
            <div class="phone">
        <h5> <a  href="tel:+917305898078">Phone&#9990;</a></h5>
        <a  href="tel:+917305898078" > +91 7305898078</a>
    </div>
    <div class="mail-head">
        <h5><a  href="mailto:veerychetty123@gmail.com">Email &#9993;</a></h5>
        <a  href="mailto:veerychetty123@gmail.com">veerychetty123@gmail.com </a>
    </div>
    <div class="social">
        <h5>follow Me</h5>
        
        <a id='hj' href="https://www.linkedin.com/in/veery-chetty-a00674264?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B15DLMuUpSP%2BMR35VpH7wRA%3D%3D" target="_blank" rel="noopener">
            <img id='in'class="logo" src="https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/linkedin.svg" alt="LinkedIn" width="32" height="32"></img>
        </a>
        
        <a  href="https://www.instagram.com/veery_26?igsh=MWZlaXpsb3RlYzlzNQ== " target="_blank" rel="noopener">
            <img id='insta' class="logo" src="https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/instagram.svg" alt="Instagram" width="32" height="32"></img>
        </a>
       
        <a  href="https://github.com/Veerychetty" target="_blank" rel="noopener">
            <img id='git' class="logo" src="https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/github.svg" alt="GitHub" width="32" height="32"></img>
        </a>
        <a  href="https://www.snapchat.com/add/veery_26?share_id=1LuOE8z-2bQ&locale=en-US" target="_blank" rel="noopener">
            <img id='snap' class="logo" src="https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/snapchat.svg" alt="SnapChat" width="32" height="32"></img>
        </a>
    </div>
    <div class="final">
        <span class="copy">&copy;{year.getFullYear()} K.Veerychetty</span><br></br>
        <span>Student @ jeppiaar engineering college</span>
    </div>
        </footer>
    );
};

export default Footer;
