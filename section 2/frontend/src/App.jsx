
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Roll from './components/Roll';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import Todolist from './components/Todolist';
import ProductList from './components/ProductList';
import ManageUser from './components/ManageUser';



function App() {
  return (
    <div>
      <BrowserRouter>

        {/* <Link to="/home">Home</Link>
        <Link to="/roll">Roll</Link>
        <Link to="/login">Login</Link> */}

        <Navbar />

       <Routes>
        <Route element={ <Home /> } path='/' />
        <Route element={ <Home /> } path='home' />
        <Route element={ <Roll /> } path='roll' />
        <Route element={ <Login /> } path='login' />
        <Route element={ <EventHandling /> } path='event' />
        <Route element={ <StateManagement /> } path='state' />
        <Route element={ <Todolist /> } path='todo' />
        <Route element={ <ProductList /> } path='list' />
        <Route element={ <ManageUser /> } path='user' />
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
