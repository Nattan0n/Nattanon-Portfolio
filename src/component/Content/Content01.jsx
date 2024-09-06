// Content01.jsx

import { Component } from 'react';
import Typed from 'typed.js';
import '../../style/animation.css';
import nattanon_02 from '/img/nattanon_02.jpg';

class Content01 extends Component {
  componentDidMount() {
    const element = document.querySelector('.typed-text');

    if (!element._typed) { // ตรวจสอบว่ามีการสร้าง Typed.js แล้วหรือไม่
      const options = {
        strings: ['Computer Science', 'Front-end Developer'],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1000,
        startDelay: 100,
        loop: true,
        cursorChar: '|' // ซ่อน cursor
      };
      new Typed(element, options);
      element._typed = true; // ใช้ตัวแปรกำหนดเองเพื่อป้องกันการสร้างซ้ำ
    }
  }

  render() {
    const labelTextContent = `
      Hi, <br>I'm <span style="color: #FFF96D">Nattanon</span> Siripaisananusorn <br><span class="typed-text"></span>
      <div class="button__style" id="scrollButton_5">
          <p class="btn__text--style" id="scrollButton_5">Contact</p>
      </div>
    `;
    
    return (
      <div style={{marginTop: '5rem'}}>
        <div className="container__00 col-1 fade-in">
          <h1 className="text__content" dangerouslySetInnerHTML={{ __html: labelTextContent }} />
          <div className="box-photo__container bounce-in">
            <div className="photo__container">
              <div className="photo__container__00"></div>
              <div className="photo__container__01"></div>
              <img alt="Nattanon Siripaisananusorn" src={nattanon_02} className="photo__style" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content01;
