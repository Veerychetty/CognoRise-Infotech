import React, { useEffect } from 'react';
import './Back.css';

const Back = () => {
  useEffect(() => {
    // Initialize the canvas
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Set up the letters
    const letters = '10'.split('');

    // Set up the columns
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    // Set up the drops
    const drops = Array.from({ length: columns }, () => 1);

    // Set up the draw function
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
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

  return (
    <div>
      <body>
        <canvas></canvas>
        <div className="form">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo obcaecati eligendi consectetur corporis dolor eius minima.
        </div>
      </body>
    </div>
  );
};

export default Back;
