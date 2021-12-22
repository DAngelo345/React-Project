import { useState } from 'react'
import { submitLogin } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../morecss.css';

function Login(props) {
    
    const history = useHistory()

    const [username, setUsername] = useState('')
    // const handleChange = (e) => setUsername({ ...user, [e.target.name]: e.target.value })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.submitLogin({ username })
        history.push("/posts")
    }

    console.log(props)
return (
    <p className="login">
        <form onSubmit={handleSubmit}>
            <label>
                Pick a Username:
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <input  className="btn" type="submit" value="SUBMIT" />
        </form>
     </p>
        )
}
// return {...state, posts: state.posts.map()}
export default connect(null, { submitLogin })(Login);