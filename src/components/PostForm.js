
import { useHistory } from 'react-router-dom'
import { useEffect } from "react"
import { submitPost, getPosts } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { useState } from 'react'


function PostForm({ userId, submitPost, getPosts }) {
    console.log(userId)

    useEffect(getPosts, [getPosts])

    const history = useHistory()

    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newPost = { image, description, user_id: userId }
        // console.log(newPost)
       submitPost(newPost)
        history.push("/posts/:id")
    }

    return (
        <p>
            <form onSubmit={handleSubmit}>
                <label>
                    Image link:
                    <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
                    Description:
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </p>
    )

}
const mapStateToProps = (state) => ({ userId: state.setuser.id })

export default connect(mapStateToProps, { submitPost, getPosts })(PostForm);