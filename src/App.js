import './style.css';
import { PostIndex, PostShow, UserProfile, Login, PostForm } from './components';
import { Switch, Route } from 'react-router-dom'
import {connect} from 'react-redux'

function App(props) {
  console.log(props.setuser.username)
  return (
    <div className="index">
      
        
      <h1>SOCIAL MEDIA CLONE</h1>

      {props.setuser.username ?
      <Switch>
          <Route path="/users/:id" component={UserProfile}></Route>
          <Route path="/posts/:id" component={PostShow}></Route>
          <Route path="/posts" component={PostIndex}></Route>
          <Route path="/"><PostIndex /></Route>
        </Switch> :
        <Login />
      }
      
       
      {/* <Login/> */}
  
    
    </div>
  );
}

const mapStatetoProps = (state) => ({user: state.user, setuser: state.setuser})
export default connect(mapStatetoProps)(App);
