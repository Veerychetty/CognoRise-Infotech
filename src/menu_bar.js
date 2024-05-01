import React from 'react'
import './menu_bar.css'

const menu_bar = () => {
  return (
    <div><div class="only">
    <input type="checkbox" id="active"></input>
    <label for="active" class="menu-btn"><i class="fas fa-bars"></i>&#9776;</label>
    <div class="wrapper">
        <ul>
            <li><a href="Esakki Raja - Resume.pdf.pdf">Resume</a></li>
            <li><a href="https://github.com/Esakkiraja2004?tab=repositories">Project</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </div>
</div></div>
  )
}

export default menu_bar