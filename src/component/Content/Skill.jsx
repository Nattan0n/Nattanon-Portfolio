import { Component } from 'react';
import HTML from '/img/img-logo/html.png'
import CSS from '/img/img-logo/css-3.png'
import JavaScript from '/img/img-logo/js.png'
import ReactJs from '/img/img-logo/react-js.png'
import PHP from '/img/img-logo/php.png'
import MySQL from '/img/img-logo/logo-mysql-170x115.png'
import Java from '/img/img-logo/java.png'
import Python from '/img/img-logo/python.png'
import Figma from '/img/img-logo/figma.png'
import XAMPP from '/img/img-logo/xampp.png'
import GitHub from '/img/img-logo/github-mark.png'
import Redux from '/img/img-logo/redux.png'
import ChatGPT from '/img/img-logo/chatgpt-logo.png'


class Skills extends Component {
  render() {
    return (
      <div>
        <div className="container__00 head_skill">
          <div className="container__01">
            <h1 className="text__head_skill">Skills</h1>
            <div className="box-container">
              
              <h1 className="text__content_skills">Front-End</h1>
              <div className="box-icon">
                <img alt="HTML" className="icon" src={HTML} />
                <img alt="CSS" className="icon" src={CSS} />
                <img alt="JavaScript" className="icon" src={JavaScript} />
                <img alt="React"className="icon" src={ReactJs} style={{ backgroundColor: 'white', borderRadius: '50%' }} />
              </div>

              <h1 className="text__content_skills">Back-End</h1>
              <div className="box-icon">
                <img alt="PHP" className="icon" src={PHP} />
                <img alt="MySQL" className="icon" src={MySQL} style={{ backgroundColor: 'white', borderRadius: '50%' }} />
                <img alt="Java" className="icon" src={Java} style={{ backgroundColor: 'white', borderRadius: '50%' }} />
                <img alt="Python" className="icon" src={Python} />
              </div>

              <h1 className="text__content_skills">Other</h1>
              <div className="box-icon">
                <img alt="Figma" className="icon" src={Figma} />
                <img alt="XAMPP" className="icon" src={XAMPP} />
                <img alt="GitHub" className="icon" src={GitHub} />
                <img alt="Redux" className="icon" src={Redux} />
                <img alt="ChatGPT" className="icon" src={ChatGPT} />
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
