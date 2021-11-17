import { Link } from 'react-router-dom'

export default function UserProfilePage({ id, image, description, likes, username, user_id }) {

    console.log(id)

    return (
        <div className="profile">
            <h3> Author: {username}</h3>
            <img class="card__image" src={image} alt={description} />
            <p>{description}</p>
            <button> {likes} </button>
        </div>
    )  
}