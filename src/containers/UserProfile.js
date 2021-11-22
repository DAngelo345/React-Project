
import { connect } from 'react-redux'
import { getUser, clearUser } from '../redux/actionCreators'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { PostShow } from '../components';
// import { PostCard } from '../components'
import { UserProfilePage } from '../components'
import '../card.css';
import '../style.css';


function UserProfile({ getUser, clearUser, user }) {

    const routeId = useParams().id
    
    // console.log(getUser)
    useEffect(() => {
        // console.log('getting user')
        getUser(routeId)
        return clearUser
    }, [getUser, routeId, clearUser])
    

    // const whileUserPosts = () => {

    //     while (user.posts === undefined) {
    //         return console.log('undefinded user.posts')
    //     }
    // }

    // whileUserPosts();
    const spinner = () => <div className="loader"></div>

    return(
        <div className="card">
            <h1> USER PROFILE PAGE </h1>
   
            <h1> {user.username} </h1>
            <p>bio : {user.bio} </p>
            <p>category : {user.category} </p>
            <p>followers : {user.followers} </p>
            <p>following : {user.following} </p>

            {/* {console.log(user.posts)} */}
            {/* {user.posts ? spinner() : user.posts.map} */}
            { user.posts.map(post => <UserProfilePage  {...post} key={post.id} />)}              
          
        </div>
       
    )
}

const mapStatetoProps = (state) => {
    return { user: state.user }

}

export default connect(mapStatetoProps, { getUser, clearUser })(UserProfile)