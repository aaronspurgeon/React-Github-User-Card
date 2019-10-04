import React from 'react';
import Axios from 'axios';
import Followers from './Components/Followers';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      avi: '',
      name: '',
      title: '',
      followerCount: '',
      followingCount: ''
    }
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI = () => {
    Axios.get('https://api.github.com/users/aaronspurgeon')
      .then(res => {
        this.setState({
          avi: res.data.avatar_url,
          name: res.data.name,
          title: res.data.bio,
          followerCount: res.data.followers,
          followingCount: res.data.following,
        })
      })
      .catch(err => {
        console.log('Error: ', err)
      })
  }
  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <div>
          <img src={this.state.avi} alt="Profile"/>
          <h2>{this.state.name}</h2>
          <p>{this.state.title}</p>
          <span>Follower Count: {this.state.followerCount}</span>
          <span>Following Count: {this.state.followingCount}</span>
        </div>
        <h2>Follower Info</h2>
        <Followers />
      </div>
    )
  }
}

export default App;
