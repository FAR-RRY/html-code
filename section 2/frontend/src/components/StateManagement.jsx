import React, { useState } from 'react';

const StateManagement = () => {
    let count = 2;

    const [likes, setlikes] = useState(1);
    
    return (
        <div className='container'>
            <h1 className='text-center'>State Management</h1>
            <hr />

            <button 
            className='btn btn-primary mt-4' 
            onClick={() => { 
                count++; 
                console.log(count); 
                }}
                >Add Count</button>
                <h1>{count}</h1>

                <button className="btn btn-success mt-5" onClick={ () => { setlikes(likes+1)}} 
                >Update State</button>
                <h1>{likes}</h1>

        </div>
    )
}

export default StateManagement;