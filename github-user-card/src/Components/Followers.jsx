import React from 'react';
import FollowerInfo from './FollowersInfo';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <FollowerInfo />
            </div>
        )
    }
}

export default Followers;