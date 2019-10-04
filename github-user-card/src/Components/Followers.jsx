import React from 'react';
import FollowerInfo from './FollowersInfo';
import Axios from 'axios'

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {
            follower: []
        }
    }

    componentDidMount() {
        this.fetchAPI();
      }
    
      fetchAPI = () => {
        Axios.get('https://api.github.com/users/aaronspurgeon/followers')
          .then(res => {
              this.setState({
                  follower: res.data
              })
            // this.setState({
            //   avi: res.data.avatar_url,
            //   name: res.data.name,
            //   title: res.data.bio,
            //   followerCount: res.data.followers,
            //   followingCount: res.data.following,
            // })
          })
          .catch(err => {
            console.log('Error: ', err)
          })
      }

    render() {
        return (
            <div>
                {this.state.follower.map((item, index) => (
                    <FollowerInfo item={item} key={index} />
                ))}
            </div>
        )
    }
}

export default Followers;