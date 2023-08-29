
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import Todolist from './components/Todolist';
import ProductList from './components/ProductList';
import ManageUser from './components/ManageUser';
import Signup from './components/Signup';
import UserAuth from './components/UserAuth';
import Profile from './components/Profile';
import { Toaster } from 'react-hot-toast';
import UpdateUser from './components/UpdateUser';
import { UserProvider } from './UserContext';
import { AnimatePresence } from 'framer-motion';



function App() {
  return (
    <div>
       <Toaster position="top-right" />
      <BrowserRouter>
      <UserProvider>
          <AnimatePresence>
       

        <Navbar />

       <Routes>
        <Route element={ <Home /> } path='/' />
        <Route element={ <Home /> } path='home' />
        <Route element={ <Signup /> } path='signup' />
        <Route element={ <Login /> } path='login' />
        <Route element={ <EventHandling /> } path='event' />
        <Route element={ <StateManagement /> } path='state' />
        <Route element={ <Todolist /> } path='todo' />
        <Route element={ <ProductList /> } path='list' />
        <Route element={ <ManageUser /> } path='user' />
        <Route element={ <UserAuth> <Profile /> </UserAuth> } path="profile" />
        <Route element={<UpdateUser />} path="updateuser/:id" />
       </Routes>
       </AnimatePresence>
        </UserProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
