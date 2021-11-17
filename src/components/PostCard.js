import { Link } from 'react-router-dom'

export default function PostCard({ id, image, description, likes, username }) {

    console.log(id)

    return (
        <div className="card">

            <Link to={`/users/${id}`}><h3>{username}</h3></Link>
            <Link to={`/users/${id}`}><img src={image} alt={description} /></Link>
            <p>{description}</p>
            <button> {likes} </button>  
        </div>
    )  
}