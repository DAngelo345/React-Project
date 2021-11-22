import { NavLink } from 'react-router-dom'
import '../cards.css';
function Nav() {
    return <nav>
     
        <NavLink to="/posts" className="nav">ALL POSTS</NavLink>
         <p></p>
        <NavLink to="/login" className="nav">LOGIN</NavLink>
    </nav>
}

export default Nav