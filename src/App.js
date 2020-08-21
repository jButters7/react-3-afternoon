import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import CardDisplay from './Components/CardDisplay';
import data from './data'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: data,
      cardNumber: 0
    }
  }

  handleNextChanges() {
    // if (this.cardNumber !== 24) {
    //   this.setState({ cardNumber: this.state.cardNumber + 1 });
    // } else {
    //   this.setState({ cardNumber: 0 });
    // }
    this.setState({ cardNumber: this.state.cardNumber + 1 });
  }

  handlePreviousChanges() {
    // if (this.cardNumber !== 1) {
    //   this.setState({ cardNumber: this.state.cardNumber - 1 });
    // } else {
    //   this.setState({ cardNumber: 24 });
    // }
    this.setState({ cardNumber: this.state.cardNumber - 1 });
  }


  render() {

    return (
      <div className="App">
        <header>
          <Header />
        </header>

        <main>
          <CardDisplay key={this.state.info[this.state.cardNumber].id} person={this.state.info[this.state.cardNumber]} />

          <div className="below-card">
            <div>
              <button className="text-button" onClick={() => this.handlePreviousChanges()}>Previous</button>
            </div>
            <div>
              <button>Edit</button>
              <button>Delete</button>
              <button>New</button>
            </div>
            <div>
              <button onClick={() => this.handleNextChanges()}>Next</button>
            </div>
          </div>

        </main>

      </div>
    );
  }
}

export default App;
