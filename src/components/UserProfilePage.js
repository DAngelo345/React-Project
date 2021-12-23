import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addLike, addLikeFromUserProfile } from '../redux/actionCreators'
import { useState } from 'react';

import '../cards.css';

function UserProfilePage({description, id, image, likes, creator, user_id, addLike, posts, addLikeFromUserProfile}) {
    //  console.log("after mapstateToprops", posts)

    // console.log('i am in UserProfilePage', props.username)  
    // console.log('userProfilepage', props)
    // function mapper() {
    //     posts.forEach(post => {
    //         // console.log("this Is mapper", post)      
    //         return post.likes 
    //     })
    // }
    // mapper()
    
    const [count, setCount] = useState(likes);

    const newLike = (e) => {

        // addLikeFromUserProfile(id)
        setCount(count + 1)
        addLike(id)
      
    }

    return (
        <div className="profile" >
            <h3> {description} </h3>
            <Link to={{
                        pathname: `/posts/${id}`,
                        state: {
                            creator: creator,
                            user_id: user_id
                        }
                        }}><img class="card__image" src={image} alt={description} /></Link>

            {/* <Link to={`/posts/${props.id}`}><img class="card__image" src={props.image} alt={props.description} /></Link> */}
            {/* <p>{props.description}</p> */}
            <button className="btn" onClick={newLike} > {count} </button>
        </div>
    )  
 }

 const mapStateToProps = (state) => {
    // console.log(state)
    return { posts: state.posts }

}

export default connect(mapStateToProps, {addLike, addLikeFromUserProfile})(UserProfilePage)