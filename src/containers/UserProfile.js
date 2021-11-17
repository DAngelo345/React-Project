
import { connect } from 'react-redux'
import { getUser } from '../redux/actionCreators'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PostShow } from '../components';
import '../card.css';


function UserProfile({ getUser, user }) {
    const routeId = useParams().id

    console.log(getUser)
    useEffect(() => {
        console.log('getting user')
       getUser(routeId)
    },[getUser, routeId])

    return(
        <div className="card">
            <h1> USER PROFILE PAGE </h1>
            {/* {console.log("this is in the div", user)} */}
            <h1> {user.username} </h1>
            <p> {user.bio} </p>
            <p> {user.category} </p>
            <p> {user.folowers} </p>
            <p> {user.folowing} </p>
            
        </div>
        // <>
        //     <PostShow/>
        // </>
    )

}

const mapStatetoPorps = (state) => {
    return { user: state.user }

}
export default connect(mapStatetoPorps, { getUser })(UserProfile)