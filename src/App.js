import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const App = () => {
  const Users = [
    {
      id: 1,
      username: "Hari",
      age: 22
    },
    {
      id: 2,
      username: "Pandi",
      age: 21
    }
  ]

  const [data, setData] = useState(Users);

  const getData = (receivedata) => {
    setData((prevdata) => {
      const Fulldata = [{ ...receivedata, id: Math.floor((Math.random() * 100) + 1) }, ...prevdata];
      return Fulldata
    });
  }

  const deleteUser = (useId) => {
    setData(prevdata => {
      const Fulldata = prevdata.filter(user => useId !== user.id);
      return Fulldata;
    })
  }

  let ListContent = (<UserList datas={data} onDeleteItem={deleteUser} />);
  // console.log(data.length);
  if (data.length === 0) {
    ListContent = (<p style={{ color: '#000' }}>No User List Found</p>);
  };


  return (
    <div className='container'>
      <div className='App'>
        <h1>Add Users</h1>
        <AddUser receiveData={getData} />
        {ListContent}
      </div>
    </div>
  );
}

export default App;
