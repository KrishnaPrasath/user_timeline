import React, { useState } from 'react';
import './User.css';
import { Tooltip } from 'reactstrap';

const User = ( props ) => {
    const user = props.member;

    const [color, setColor] = useState(props.getRandomColor());
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return(
        <>
        <div id={ user.id } className="user-wrapper" key={ user.id } onClick={ ()=>{ props.handleUserClick( user.id ) } }>
            <div className="profile-picture" style={{backgroundColor: color}}>{ user.real_name.substring(0,1) }</div>
            <div className="profile-info">
                <p className="name"><strong>{ user.real_name }</strong></p>
                <p className="text-muted">{ user.id }</p>
            </div>
            <Tooltip placement="right" isOpen={tooltipOpen} target={ user.id } toggle={toggle}>
                Click to view timeline
            </Tooltip>
        </div>
        </>
    );
}

export default User;