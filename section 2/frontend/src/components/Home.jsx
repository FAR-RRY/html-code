import React from 'react';
import mylogo from '../logo.svg';

const Home = () => {
  return (
    <div 
    style={{backgroundImage: `url("/myimg.jpeg")`,
    backgroundSize: 'cover',
    minHeight: '100vh'
    }}>
        <h1>Welcome to Homepage</h1>
        <h1 className='myclass'>my react app</h1>
      <input type="text" />
      <h2 style={{ color: 'green', fontSize: 30}}>using inline css</h2>
      <img src="/logo192.png" alt=" "/>

      <img src={mylogo} alt="" />

    </div>
  );
};

export default Home;