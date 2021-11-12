export default function PostCard({ image, description, likes, username }) {

    return (
        <div className="card">

            <h3>{username}</h3>
            <img src={image} alt={description} />
            <p>{description}</p>
            <button> {likes} </button>
            
        </div>
    )


    
}