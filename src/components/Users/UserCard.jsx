import React from 'react';
import './UserCard.scss';

const UserCard = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
    };

    return <>
        <div className='user-card' onClick={deleteHandler}>
            <h4>{props.username} <span>{props.age}</span></h4>
        </div>
    </>
}

export default UserCard;