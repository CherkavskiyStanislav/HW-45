import './App.css';
import Main from './components/Main';
import Posts from './components/Posts';
import Login from './components/Login';
import SinglePost from './components/SinglePost';
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <nav className="menu">
          <NavLink 
            className={({isActive}) => isActive ? "menuLinkActive" : ""} 
            to="/main"
          >
            Main
          </NavLink>
          <NavLink 
            className={({isActive}) => isActive ? "menuLinkActive" : ""} 
            to="/posts"
          >
            Posts
          </NavLink>
          <NavLink 
            className={({isActive}) => isActive ? "menuLinkActive" : ""} 
            to="/login"
          >
            Login
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />

          <Route path='/post/:id' element={<SinglePost />}/>

          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
