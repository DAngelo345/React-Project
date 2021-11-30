import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { submitLogout } from '../redux/actionCreators';
import '../cards.css';
function Nav({ submitLogout }) {
    


    
    return <nav>
     
        <NavLink to="/posts" className="nav">ALL POSTS</NavLink>
         <p></p>
        {/* <NavLink to="/login" className="nav">LOGIN</NavLink> */}
        <p></p>
        <NavLink to="/login" className="nav" onClick={submitLogout}>LOGOUT</NavLink>
    </nav>
}

export default connect(null, { submitLogout })(Nav);