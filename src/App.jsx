import { Component } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Page from './component/Page/Page';

class App extends Component {
  render() {
    return (
      <div>
        <Page />
        <SpeedInsights />
      </div>
    );
  }
}

export default App;
