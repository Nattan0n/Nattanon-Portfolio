import { Component } from 'react';
import MC16ProR from '/img/backgroud/MC-16-Pro-R.png'
import MC16ProL from '/img/backgroud/MC-16-Pro-2-L.png'

class Experience extends Component {
  render() {
    return (
      <div>
        <div className="container__00 head_experience fade-in">
          <div className="container__01">
            <h1 
              className="text__head_experience" 
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Experience
            </h1>
          </div>
        </div>

        <div className="container__00 col-1">
          <div className="imgPNG__style01 fade-in">
            <div target="_blank" rel="noopener noreferrer">
              <img 
                src={MC16ProR}
                alt="Macbook Pro 16" 
                className="img-fit01"
              />
            </div>
          </div>            

          <h1 className="text__content_experience bounce-in">
            HiddenGem
            <p>2023-2024 | 4 Months</p>
            <a href="https://nightlife.run" target="_blank" rel="noopener noreferrer">
              <div className="button__style">
                <p className="btn__text--style">Link to web</p>
              </div>
            </a>
          </h1>
        </div>

        <div className="container__00 col-1" style={{ marginTop: '20%' }}>
          <h1 className="text__content_experience bounce-in">
            Job description
            <ul>
              <li>Worked as a front-end developer</li>
              <li>Designed a Nightlife App using Figma</li>
              <li>Created user interface design for nightlife web application with React.js</li>
            </ul>
          </h1>
          
          <div className="imgPNG__style02 fade-in">
            <div className="Link-img" target="_blank" rel="noopener noreferrer">
              <img 
                src={MC16ProL}
                alt="Macbook Pro 16" 
                className="img-fit02"
              />
            </div>
          </div>  
        </div>
      </div>
    );
  }
}

export default Experience;
