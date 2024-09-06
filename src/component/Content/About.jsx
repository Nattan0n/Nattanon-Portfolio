import { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className='fade-in'>
        <div className="container__00 head_about">
          <div className="container__01">
            <h1 className="text__head_about">About</h1>
            <div className="box-container">
              <h1 className="text__content_about">
                About Me<br />
                Computer Science<br />
                I am a recent graduate with a degree in Computer Science, 
                specializing in web application development and web design. 
                Throughout my academic journey, 
                I have developed a strong passion for crafting user-friendly and visually appealing web applications. 
                I am eager to apply my knowledge and skills in a professional setting, 
                and I thrive in environments where I can continuously learn and innovate.
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
