export const getPosts = () => {

    return dispatch => fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(posts => dispatch({ type: "GET_POSTS", payload: posts })
    )
}

export const getPost = (id) => {
    return dispatch => fetch(`http://localhost:3000/posts/${id}`)
    .then(res => res.json())
    .then(post => dispatch({ type: "GET_POST", payload: post })
    )
}

export const getUser = (id) => {
    return dispatch => fetch(`http://localhost:3000/users/${id}`)
    .then(res => res.json())
    .then(user => dispatch({ type: "GET_USER", payload: user })
    )
}

export const submitLogin = (user) => {
    return dispatch => fetch(`http://localhost:3000/users`, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then(res => res.json())
        .then(user => dispatch({type: "SET_USER", payload: user})) 
}

export const submitLogout = (user) => {
    return dispatch => {
        dispatch({ type: "LOGOUT"})
    }
}
export const submitPost = (newPost) => {
    return dispatch => fetch(`http://localhost:3000/posts`, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      })
        .then(res => res.json())
        .then(newPost => dispatch ({ type: "NEW_POST", payload: newPost }))
}

export const deletePost = (id) => {
  return dispatch => fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    })
      .then(res => res.json())
      .then(post => dispatch({ type: "DELETE_USER", payload: post }))
}

export const addLike = (id) => {
  return dispatch =>
    fetch(`http://localhost:3000/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    }   
  })
    .then(res => res.json())
    .then(likesPlusOne => dispatch({ type: "ADD_LIKE", payload: likesPlusOne }))
}

export const addLikeFromUserProfile = (id) => {
  return dis =>
    fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    }   
  })
    .then(res => res.json())
    .then(likesPlusOne => dis({ type: "ADD_LIKE_FROM_USER_PROFILE", payload: likesPlusOne }))
}


export const clearUser = () => ({type: "ClEAR_USER"})

    
