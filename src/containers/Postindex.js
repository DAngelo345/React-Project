import { useEffect } from "react"
import { getPosts, submitPost } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { PostCard, Nav, PostForm } from '../components'
import { useState } from 'react'

import '../card.css';
import '../cards.css';
import '../index.css';

function PostIndex({ getPosts, posts }) {
// console.log(posts)

    // actually CHECK THE LENGTH OF [getPost] and if that changes useEffect should modify the indexpage
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
                <Nav />
                
                {/* sortedArray() */}
                {sortedArray().map(post => <PostCard {...post} key={post.id} />)}
                <button onClick={() => setActive(!active)}>{active ? 'true' : 'false'}</button>
                <PostForm />
        </div>
    )

}

const mapStatetoProps = (state) => {
    return { posts: state.posts }

}

export default connect(mapStatetoProps, { getPosts })(PostIndex)