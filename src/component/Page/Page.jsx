// Page.jsx

import { Component } from 'react';
import '../../style/styles.css';
import '../../style/animation.css';
import Header from '../../component/Header/Header';
import Content01 from '../../component/Content/Content01';
import About from '../../component/Content/About';
import Experience from '../../component/Content/Experience';
import Skills from '../../component/Content/Skill';
import Contact from '../../component/Content/Contact';
import ScrollButton from '../ScrollButton/ScrollButton';

class Page extends Component {
  componentDidMount() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const bounceElements = document.querySelectorAll('.bounce-in');

    const observerOptions = {
      threshold: 0.5 // Show animation when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const observerBounce = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible2');
        }
      });
    }, observerOptions);

    fadeElements.forEach((el) => observer.observe(el));
    bounceElements.forEach((el) => observerBounce.observe(el));

    // Add event listener for scrollButton
    window.addEventListener('scroll', this.toggleScrollButton);
  }

  componentWillUnmount() {
    // Remove event listener when component is unmounted
    window.removeEventListener('scroll', this.toggleScrollButton);
  }

  // Function to show/hide scrollButton
  toggleScrollButton = () => {
    const scrollButton = document.getElementById('scrollButton');
    if (window.scrollY > 300) {
      scrollButton.classList.remove('hidden');
    } else {
      scrollButton.classList.add('hidden');
    }
  }

  render() {
    return (
      <div id='body' className="body"> 
        <Header />
        <Content01 />
        <About />
        <Experience />
        <Skills />
        <Contact />
        <ScrollButton />
      </div>
    );
  }
}

export default Page;
