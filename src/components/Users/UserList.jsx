import React from 'react';
import UserCard from './UserCard';

const UserList = (props) => {
    return <>
        {props.datas.map(user => <UserCard key={user.id} id={user.id} username={user.username} age={user.age} onDelete={props.onDeleteItem} />)}
    </>
}

export default UserList;