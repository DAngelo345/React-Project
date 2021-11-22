import { Link } from 'react-router-dom'

export default function UserProfilePage(props) {

    // console.log('i am in UserProfilePage', props.username)

    return (
        <div className="profile">
            <h3> {props.description} </h3>
           
            <Link to={`/posts/${props.id}`}><img class="card__image" src={props.image} alt={props.description} /></Link>
            {/* <p>{props.description}</p> */}
            <button> {props.likes} </button>
        </div>
    )  
}