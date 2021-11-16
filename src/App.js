import './style.css';
import { PostIndex, PostShow } from './components';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="index">
      
        
        <h1>SOCIAL MEDIA CLONE</h1>
      <Switch>
        
        <Route path="/posts/:id"><PostShow/></Route>
        <Route path="/posts" component={PostIndex}></Route>
      </Switch>
    
    </div>
  );
}

export default App;
