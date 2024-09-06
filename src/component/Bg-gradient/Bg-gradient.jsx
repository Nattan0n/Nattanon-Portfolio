import { Component } from 'react';
import './backgroundStyle.css';

class BgGradient extends Component {
  componentDidMount() {
    this.interBubble = document.querySelector('.interactive');
    if (!this.interBubble) {
      console.error('Element .interactive not found');
      return;
    }

    this.curX = 0;
    this.curY = 0;
    this.tgX = 0;
    this.tgY = 0;

    this.move = this.move.bind(this);
    window.addEventListener('mousemove', this.handleMouseMove);
    this.move();
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = (event) => {
    this.tgX = event.clientX;
    this.tgY = event.clientY;
  }

  move() {
    this.curX += (this.tgX - this.curX) / 20;
    this.curY += (this.tgY - this.curY) / 20;
    if (this.interBubble) {
      this.interBubble.style.transform = `translate(${Math.round(this.curX - this.interBubble.clientWidth / 2)}px, ${Math.round(this.curY - this.interBubble.clientHeight / 2)}px)`;
    }
    requestAnimationFrame(this.move);
  }

  render() {
    return (
      <div>
        <div className="gradient-bg">
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
            <div className="interactive"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default BgGradient;
