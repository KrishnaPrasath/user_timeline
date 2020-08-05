import React, { useState } from 'react';
import './User.css';
const User = ( props ) => {
    const user = props.member;

    const [color, setcolor] = useState(props.getRandomColor());

    return(
        <div className="user-wrapper" key={ user.id } onClick={ ()=>{ props.handleUserClick( user.id ) } }>
            <div class="profile-picture" style={{backgroundColor: color}}>{ user.real_name.substring(0,1) }</div>
            <div class="profile-info">
                <p className="name">{ user.real_name }</p>
                <p>{ user.id }</p>
            </div>
        </div>
    );
}

export default User;