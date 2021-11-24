import './style.css';
import { PostIndex, PostShow, UserProfile, Nav, Login } from './components';
import { Switch, Route } from 'react-router-dom'
import {connect} from 'react-redux'

function App(props) {
  console.log(props)
  return (
    <div className="index">
      
        
      <h1>SOCIAL MEDIA CLONE</h1>
      <Nav/>
    
      <Switch>
          <Route path="/login" component={Login}><Login/></Route>
          <Route path="/users/:id" component={UserProfile}></Route>
          <Route path="/posts/:id"><PostShow /></Route>
          <Route path="/posts" component={PostIndex}></Route>
          <Route path="/"><PostIndex /></Route>
        </Switch>
       
      {/* <Login/> */}
  
    
    </div>
  );
}

const mapStatetoProps = (state) => ({user: state.user})
export default connect(mapStatetoProps)(App);
