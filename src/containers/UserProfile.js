
import { connect } from 'react-redux'
import { getPost, getUser } from '../redux/actionCreators'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { PostShow } from '../components';
import { PostCard } from '../components'
import { UserProfilePage } from '../components'
import '../card.css';


function UserProfile({ getUser, user, posts }) {
    const routeId = useParams().id

    console.log(getUser)
    useEffect(() => {
        console.log('getting user')
        getUser(routeId)
        getPost(routeId)
    },[getUser, getPost, routeId])

    return(
        <div className="card">
            <h1> USER PROFILE PAGE </h1>
            {/* {console.log("this is in the div", user)} */}
            <h1> {user.username} </h1>
            <p>bio : {user.bio} </p>
            <p>category : {user.category} </p>
            <p>followers : {user.folowers} </p>
            <p>following : {user.folowing} </p>
            {console.log(posts)}
            {posts.map(post => <UserProfilePage  {...post} key={post.id} />)}
        </div>
        // <>
        //     <PostShow/>
        // </>
    )
}

const mapStatetoPorps = (state) => {
    return { user: state.user, posts: state.posts }

}

export default connect(mapStatetoPorps, { getUser, getPost })(UserProfile)