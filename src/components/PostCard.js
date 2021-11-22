import { Link } from 'react-router-dom'
import { useState } from 'react'
// import { getPost } from '../redux/actionCreators'


export default function PostCard({ id, image, description, likes, username, user_id }) {

    // console.log(id)
    // const count = likes
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <Link to={`/users/${user_id}`}><h3> Author: {username}</h3></Link>
            <Link to={`/users/${user_id}`}><img class="card__image" src={image} alt={description} /></Link>
            <p>{description}</p>
            <button onClick={() => setCount(count + 1)}> {count} </button>
        </div>
    )
}