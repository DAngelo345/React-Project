import './style.css';
import { PostIndex, PostShow, UserProfile, Nav } from './components';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="index">
      
        
      <h1>SOCIAL MEDIA CLONE</h1>
      <Nav/>
      <Switch>
        <Route path="/users/:id" component={UserProfile}></Route>
        <Route path="/posts/:id"><PostShow/></Route>
        <Route path="/posts" component={PostIndex}></Route>
      </Switch>
    
    </div>
  );
}

export default App;
