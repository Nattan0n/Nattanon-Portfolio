// Loading.jsx

import { Component } from 'react';
import './Loading.css'

class Loading extends Component {
  render() {
    return (
        <div id='perLoader' className="lds-ripple"><div></div><div></div></div>
    );
  }
}

export default Loading;
