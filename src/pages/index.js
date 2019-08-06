import React from 'react';
import '../css/home.css';
export default () => {
  return (
    <div className='About'>
      <h1>Eder Negrete</h1>
      <figure className='avatar'>
        <img className='avatar-img' src='./images/avatar.png' alt='edernegrete' />
      </figure>
      <p>Hi, I'm a Frontend Engineer, here are my other social media accounts where you can check my work</p>
      <ul className='List'>
        <a href='https://github.com/edernegrete' target='_blank'>
          <li className='item item--black'>
            <img src='./images/github.svg' alt='github' />
            Github
          </li>
        </a>
        <a href='https://medium.com/@ederng' target='_blank'>
          <li className='item item--black'>
            <img src='./images/medium.svg' alt='medium' />
          Medium
          </li>
        </a>
        <a href='https://www.linkedin.com/in/edernegrete' target='_blank'>
          <li className='item item--dark-blue'>
            <img src='./images/linkedin.svg' alt='linkedin' />
          Linkedin
          </li>
        </a>
        <a href='https://www.codepen.io/edernegrete' target='_blank'>
          <li className='item item--black'>
            <img src='./images/codepen.svg' alt='codepen' />
          Codepen
          </li>
        </a>
        <a href='https://twitter.com/edernegrete_' target='_blank'>
          <li className='item item--light-blue'>
            <img src='./images/twitter.svg' alt='twitter' />
          Twitter
          </li>
        </a>
        <a href='/cv.pdf' target='_blank'>
          <li className='item item--green'>
            <img src='./images/cv.svg' alt='resume' />
            Resumé
          </li>
        </a>
      </ul>
    </div>
  );
};
