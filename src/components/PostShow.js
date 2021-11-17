import { useParams } from 'react-router-dom' 
import { connect } from 'react-redux'
import { getPost } from '../redux/actionCreators'
import { useEffect } from 'react'
import '../style.css';

function PostShow(props) {
    const routeId = useParams().id
    console.log(props)
    useEffect(() => {
        console.log('getting post')
        props.getPost(routeId)
}, [props.getPost, routeId])
    
    return <div className="show">
        
        <h1> THIS iS A POSTS SHOW PAGE</h1>

        </div>
}

const mapStatetoPorps = (state) => {
    return {...state.selectedPost}
}

export default connect(mapStatetoPorps, { getPost })(PostShow);