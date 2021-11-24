import { useEffect } from "react"
import { getPosts } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { PostCard, Nav } from '../components'
import { useState } from 'react'
import '../card.css';
import '../cards.css';

function PostIndex({ getPosts, posts}) {

    useEffect(getPosts, [getPosts])
    // console.log(posts)
    // const [count, setCount] = useState(0);

    const [active, setActive] = useState(false);


    const sortedArray = () => {
        if (
            active
        )
            return [...posts].sort((postA, postB) => postA.description.localeCompare(postB.description))
        else {
            return posts
        }

    }

    return(
    <div className="cards">
            <h1> ALL POSTS </h1>
            <Nav/>
            {/* sortedArray() */}
            {sortedArray().map(post => <PostCard {...post} key={post.id} />)}
            <button onClick={() => setActive(!active)}>{active ? 'true' : 'false'}</button>
          
    </div>
    )

}

const mapStatetoPorps = (state) => {
    return { posts: state.posts }

}

export default connect(mapStatetoPorps, { getPosts })(PostIndex)