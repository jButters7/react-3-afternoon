import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import CardDisplay from './Components/CardDisplay';
import data from './data'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: data
    }
  }

  render() {

    return (
      <div className="App" >
        <header>
          <Header />
        </header>

        <main>
          <CardDisplay key={this.state.info[0].id} person={this.state.info[0]} />

          <div className="below-card">
            <div>
              <button className="text-button">Previous</button>
            </div>
            <div>
              <button>Edit</button>
              <button>Delete</button>
              <button>New</button>
            </div>
            <div>
              <button>Next</button>
            </div>
          </div>

        </main>

      </div>
    );
  }
}

export default App;
