import { Component } from 'react';
import '../../style/animation.css'
import nattanon_02 from '/img/nattanon_02.jpg';

class Content01 extends Component {
  render() {
    const labelTextContent = `
      Hi, <br>I'm <span style="color: #FFF96D">Nattanon</span> Siripaisananusorn <br>Computer Science
      <div class="button__style" id="scrollButton_5">
          <p class="btn__text--style" id="scrollButton_5">Contact</p>
      </div>
    `;
    
    return (
      <div>
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
