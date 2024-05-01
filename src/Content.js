// Content.js
import React from 'react';
import "./Content.css"

import img1 from "./img/green.jpg"





const Content = () => {
    return (
      <div class='content'>
        <div class='Writings'>
        <p class="about">K.Veerychetty: Second-Year B.TECH IT Student at Jeppiaar Engineering College <br></br>
            • Passionate about coding and learning new skills. <br></br>
            • Knowledge in HTML, CSS, Java Script, Python, React JS,  SQL, little bit of Java, and C programming. <br></br>
            • Currently solving problems on Leet Code and other competitive coding platforms. <br></br>
            • Snap lens creator.<br></br>
            • Interest in interning in software engineering domain.</p>



        </div>
        <div className="ring">
<i style={{ '--clr': '#00ff0a' }}></i>
<i style={{ '--clr': '#ff0057' }}></i>
<i style={{ '--clr': '#fffd44' }}></i>
<i style={{ '--clr': 'pink' }}></i>
<div class="box">
<img src={img1} alt='' style={{ '--primary': '#00ff0a' }}></img>
</div>



</div>







      </div>
       
            
            
        
    );
};

export default Content;
