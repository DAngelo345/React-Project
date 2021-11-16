import { useEffect } from "react"
import { getPosts } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { PostCard }  from '../components'
import '../card.css';
import '../cards.css';

function PostIndex({ getPosts, posts}) {

    useEffect(getPosts, [getPosts])
    // console.log(posts)

    return(
    <div className="cards">
            <h1> ALL POSTS </h1>
            {posts.map(post => <PostCard {...post} key={post.id} />)}
    </div>
    )

}

const mapStatetoPorps = (state) => {
    return { posts: state.posts }

}

export default connect(mapStatetoPorps, { getPosts })(PostIndex)