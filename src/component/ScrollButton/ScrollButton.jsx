// ScrollButton.jsx

import { Component } from 'react';

class scrollButton extends Component {
    scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    }
    
    render() {
    return (
        <div>
        <button id="scrollButton" className="hidden" onClick={this.scrollToTop}>
            <i className="bi bi-chevron-up"></i>
        </button>
        </div>
    );
    }
}

export default scrollButton;
