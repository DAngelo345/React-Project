import { useParams } from 'react-router-dom' 
import { connect } from 'react-redux'
import { getPost, deletePost } from '../redux/actionCreators'
import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
// import { Nav } from '/components/Nav'
import '../style.css';
import '../cards.css';

function PostShow(props) {
    const routeId = useParams().id
    
    const location = useLocation()
    // const { info }  = location.state
    // console.log(location.state)
    console.log(props)
    
    // console.log("THI IS POSTSHOW useLocation info", location.state.creator)
    
    const history = useHistory()
    // console.log( "this is post show props", props)
    useEffect(() => {
        console.log('getting post')
        props.getPost(routeId)
    }, [props.getPost, routeId, props])
    
    const deleteButton = () => {
        
        if (location.state.user_id == location.state.creator) { 
        props.deletePost(routeId)
        history.push("/posts")
        }
        else {
            console.log("not the right user")
        }
    
    }
    
    return <div className="show">
        {/* <Nav/> */}
        <h1> THiS iS A POSTs SHOW PAGE</h1>
        {console.log(props.image)}

        
            {/* <h3> Author: {props.username}</h3> */}
            <img class="card__imageshow" src={props.image} alt={props.description} />
            <p>{props.description}</p>
        {/* <button onClick={() => setCount(count + 1)}> {count} </button> */}
        
        <button onClick={deleteButton}> DELETE </button>
        
        </div>
}

const mapStatetoPorps = (state) => {
    return {...state.selectedPost}
}

export default connect(mapStatetoPorps, { getPost, deletePost })(PostShow);