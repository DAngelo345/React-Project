import { Link } from 'react-router-dom'

import '../cards.css';

export default function UserProfilePage(props) {

    // console.log('i am in UserProfilePage', props.username)  
    console.log('userProfilepage',props.id)
    return (
        <div className="profile">
            <h3> {props.description} </h3>
            <Link to={{
                        pathname: `/posts/${props.id}`,
                        state: {
                            creator: props.creator,
                            user_id: props.user_id
                        }
                        }}><img class="card__image" src={props.image} alt={props.description} /></Link>

            {/* <Link to={`/posts/${props.id}`}><img class="card__image" src={props.image} alt={props.description} /></Link> */}
            {/* <p>{props.description}</p> */}
            <button> {props.likes} </button>
        </div>
    )  
}