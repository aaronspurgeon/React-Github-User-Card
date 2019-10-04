import React from 'react';


function FollowerInfo(props) {
    console.log(props)
    return(
        <div>
          <img src={props.item.avatar_url} alt="Profile"/>
          <h2>{props.item.login}</h2>
          
        </div>
    )
}


export default FollowerInfo;