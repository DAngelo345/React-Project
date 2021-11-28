import { useState } from 'react'
import { submitLogin } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

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
                username:
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
     </p>
        )
}

export default connect(null, { submitLogin })(Login);