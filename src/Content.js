import React, { useEffect } from 'react';
import './Content.css'
import { useState } from 'react'

const Content = () => {
  useEffect(() => {
    // Initialize the canvas
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Set up the letters
    const letters = '100011'.split('');

    // Set up the columns
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    // Set up the drops
    const drops = Array.from({ length: columns }, () => 1);

    // Set up the draw function
    function draw() {
      ctx.fillStyle = 'rgba(1, 0, 0, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
       
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    // Loop the animation
    setInterval(draw, 99);
  }, []);
  
  const [inputvalue,setinputvalue]=useState('')
  function handle(e){
    setinputvalue(inputvalue +e.target.innerHTML)
  }
  function equal(){
    setinputvalue(eval(inputvalue))

  }
  function clear(){
    setinputvalue('')
  }
  function backd(){
    setinputvalue(inputvalue.toString().slice(0,-1))
    
  }



 
  return (
    <div className='backcontainer'>
      <canvas></canvas>
      <div className="maincontainer">
        <div className="display">
          <input type="text" placeholder='0' value={inputvalue}  />
          
        </div>
        <div className="row1">
          <button onClick={clear}>AC</button>
          <button onClick={backd}>Del</button>
          <button onClick={handle}>%</button>
          <button onClick={handle}>/</button>
        </div>
        <div className="row2">
          <button  onClick={handle}>7</button>
          <button onClick={handle}>8</button>
          <button onClick={handle}>9</button>
          <button onClick={handle}>*</button>
        </div>
        <div className="row3">
        <button onClick={handle}>4</button>
          <button onClick={handle}>5</button>
          <button onClick={handle}>6</button>
          <button onClick={handle}>-</button>

        </div>
        <div className="row4">
        <button onClick={handle}>1</button>
          <button onClick={handle}>2</button>
          <button onClick={handle}>3</button>
          <button onClick={handle}>+</button>
        </div>
        <div className="row5">
        <button onClick={handle}>0</button>
          <button onClick={handle}>.</button>
          <button onClick={handle}>(</button>
          <button onClick={handle}>)</button>

          <button id='equal' onClick={equal}>=</button>
        </div>

      </div>
    </div>
  )
}

export default Content