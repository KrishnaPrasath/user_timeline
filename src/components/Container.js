import React, { useState } from 'react';
import './Container.css';
import UserList from './UserList';
import ModalView from './ModalView';
import data from '../db.json';


const Container = () => {

    const [ members, setMembers ] =  useState(data.members);
    const [ activeUser, setActiveUser ] = useState(data.members[0]);
    const [ isClicked, setIsClicked ] = useState(false);

    const handleUserClick = ( id ) => {
        members.map( member=>{ 
            if(member.id === id){
                setActiveUser(member);
                setIsClicked(true);
                return true;
            }
            return false;
        });
    }

    const handleModalClick = (e) => {
        setIsClicked(!isClicked);

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
        <div className="wrapper container card">
            <UserList  members={ members }  handleUserClick={ handleUserClick } getRandomColor={getRandomColor} />
            { isClicked && <ModalView isClicked = { isClicked } handleModalClick = { handleModalClick } activeUser = { activeUser } getRandomColor={ getRandomColor }/> }
        </div>
    );
}

export default Container;