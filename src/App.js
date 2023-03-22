import './App.css';
import Main from './components/Main';
import Posts from './components/Posts';
import Login from './components/Login';

function App() {
  return (
    <div className="wrapper">
      <nav className="menu">
        <a href="#">Main</a>
        <a href="#">Posts</a>
        <a href="#">Login</a>
      </nav>

      <Main />
      <Posts />
      <Login />

    </div>
  );
}

export default App;
