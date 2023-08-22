import React, { useState } from 'react'

const ManageUser = () => {
    
    const [userList, setUserList] = useState([]);

   const fetchUserData = async () => {
    const res = await fetch( );
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setUserList(data);
   }




  return (
    <div>
        <h1 className='text-center fw-bold'>Manage User Data</h1>
        <hr />

        <div className='container'></div>
    </div>
  )
}

export default ManageUser;