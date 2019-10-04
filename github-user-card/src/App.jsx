import React from 'react';
import Axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      follwers: []
    }
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI = () => {
    Axios.get('https://api.github.com/users/aaronspurgeon')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log('Error: ', err)
      }) 
  }
  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
      </div>
    )
  }
}

export default App;
