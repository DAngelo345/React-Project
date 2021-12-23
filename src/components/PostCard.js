import { Link } from 'react-router-dom'
// import { useState } from 'react'
import { connect } from 'react-redux'
import { addLike } from '../redux/actionCreators'
// import { getPost } from '../redux/actionCreators'


function PostCard({ id, image, description, likes, username, user_id, setuser, addLike}) {

    // console.log(setuser)
    // const count = likes
    

    const newLike = (e) => {
      
        // const personWhoLiked = { user_id: setuser.id, username: setuser.username }
        addLike(id)
    }

    return (
        <div className="card">
            <Link to={`/users/${user_id}`}><h3> Author: {username}</h3></Link>
            <Link to={`/users/${user_id}`}><img class="card__image" src={image} alt={description} /></Link>
            <p>{description}</p>
            <button className="btn" onClick={newLike}> {likes} </button>
        </div>
    )
}

const mapStatetoProps = (state) => {
    // console.log(state)
    return { setuser: state.setuser }

}
export default connect(mapStatetoProps, {addLike})(PostCard)