import React from 'react';
import User from './User';

const UserList = (props) => {
    return(
            <div className="pb-5">
                <h3>UserList</h3>
                <div className="d-flex justify-content-center flex-column align-items-center">
                { props.members.length !== 0 ? (
                    props.members.map( member=>{
                    return (
                        <div key={member.id} className="tr-highlight m-2 shadow p-4 ">
                            <div><User member={ member } handleUserClick={ props.handleUserClick } getRandomColor={props.getRandomColor} /></div>
                        </div>)
                    })) : (<tr><td>No Users to display</td></tr>) 
                }       
                </div>   
            </div>
        
    );
};

export default UserList;