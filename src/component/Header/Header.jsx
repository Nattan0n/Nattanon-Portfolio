// Header.jsx

import { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('click', this.handleMenuClick);
    this.handleScroll(); // initial check
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('click', this.handleMenuClick);
  }

  handleScroll() {
    const header = document.querySelector('.header');
    const headerText = document.querySelector('.header__style--text');
    const scrollY = window.scrollY;

    if (scrollY > 10) {
      header.classList.add('sticky');
      headerText.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
      headerText.classList.remove('sticky');
    }
  }

  toggleMenu() {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  handleMenuClick(event) {
    const target = event.target;
    if (target.id.startsWith('scrollButton_') || target.classList.contains('text__margin-left')) {
      this.scrollToElement(target.id);
    } else if (target.classList.contains('bi-x-lg')) {
      this.closeMenu();
    }
  }

  scrollToElement(id) {
    const elementMap = {
      'scrollButton_0': '.body',
      'scrollButton_1': '.head_about',
      'scrollButton_2': '.head_experience',
      'scrollButton_3': '.head_skill',
      'scrollButton_4': '.head_contact',
      'scrollButton_5' : '.head_contact',
    };
    const elementSelector = elementMap[id];
    const contentElement = document.querySelector(elementSelector);
    if (contentElement) {
      const startPosition = window.pageYOffset;
      const targetPosition = contentElement.getBoundingClientRect().top + startPosition;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition - startPosition, 600);
        window.scrollTo(0, run);
        if (timeElapsed < 600) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  }

  render() {
    const { menuOpen } = this.state;
    return (
      <header className="header">
        <div className="header__style--text text">
          <a className="text__padding-right">Nattanon</a>
        </div>
        <div className="header__menu text">
          <a className="text__margin-left" id="scrollButton_0">Home</a>
          <a className="text__margin-left" id="scrollButton_1">About</a>
          <a className="text__margin-left" id="scrollButton_2">Experience</a>
          <a className="text__margin-left" id="scrollButton_3">Skills</a>
          <a className="text__margin-left" id="scrollButton_4">Contact</a>
        </div>
        <div className="header__menu-icon" onClick={this.toggleMenu}>
          <i className="bi bi-list"></i>
        </div>
        <div className={`header__menu-slide text ${menuOpen ? 'show' : 'close'}`}>
          <div className="header__menu-icon col-3">
            <i className="bi bi-x-lg" onClick={this.closeMenu}></i>
          </div>
          <a className="text__margin-left" id="scrollButton_0" onClick={this.closeMenu}>Home</a>
          <a className="text__margin-left" id="scrollButton_1" onClick={this.closeMenu}>About</a>
          <a className="text__margin-left" id="scrollButton_2" onClick={this.closeMenu}>Experience</a>
          <a className="text__margin-left" id="scrollButton_3" onClick={this.closeMenu}>Skills</a>
          <a className="text__margin-left" id="scrollButton_4" onClick={this.closeMenu}>Contact</a>
        </div>
      </header>
    );
  }
}

export default Header;
