// App.jsx

import { Component } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import Page from './component/Page/Page';
import Loading from './component/Loading/Loading';
import BgGradient from './component/Bg-gradient/Bg-gradient';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    // Simulate a loading delay
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000); // Change this time to the desired loading duration
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <Loading /> : <Page />}
        <BgGradient />
        <SpeedInsights />
      </div>
    );
  }
}

export default App;
