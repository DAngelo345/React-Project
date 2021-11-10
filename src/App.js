import logo from './logo.svg';
import './App.css';
import PostIndex from './containers/Postindex';

function App() {
  return (
    <div className="App">
      
        <img src={logo} className="App-logo" alt="logo" />
        <h1>SOCIAL MEDIA CLONE</h1>
        
        <PostIndex/>
    
    </div>
  );
}

export default App;
