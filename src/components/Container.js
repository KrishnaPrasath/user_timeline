import React, { useState } from 'react';
import './Container.css';
import UserList from './UserList';
import Timeline from './Timeline';
import data from '../db.json';


const Container = () => {

    const [ members, setMembers ] =  useState(data.members);
    const [ activeUser, setActiveUser ] = useState(data.members[0]);
 
    const handleUserClick = ( id ) => {
        members.map( member=>{ 
            if(member.id === id){
                setActiveUser(member)
                return true;
            }
            return false;
        });
    }

    const getRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return(
        <div className="wrapper container">
            <UserList  members={ members }  handleUserClick={ handleUserClick } getRandomColor={getRandomColor}/>
            <div className="app-wrapper">
                <Timeline activeUser = { activeUser } getRandomColor={getRandomColor} />
            </div>
        </div>
    );
}

export default Container;