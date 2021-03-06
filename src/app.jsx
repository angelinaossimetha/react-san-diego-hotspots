import React, { Component } from 'react';
import TopSpot from './topspot';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    const axios = require('axios');
    axios.get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    const { topspots } = this.state;
    return (
      <div style={{ background: "linear-gradient(to right, #3ca55c, #b5ac49)" }}>
        <div className="container">
          <div className='App'>
          <div className='page-header border border-dark border-bottom' >
            <h1 style={{ color: "black" }}>San Diego Top Spots</h1>
            <subtitle style={{ color: "black" }}>A list of the top 30 places to see in San Diego, California.</subtitle>
          </div>
            {
              this.state.topspots.map(topspot => (
                <TopSpot
                  key={topspot.id}
                  name={topspot.name}
                  description={topspot.description}
                  location={topspot.location}
                />
              ))
            }
          </div>
        </div>

      </div>
    );
  }

}

export default App;
