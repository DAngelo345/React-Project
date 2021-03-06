// import { useReducer } from "react"

// import { bindActionCreators } from "redux"


const initialPost = {
    image: "",
    description: "",
    likes: 0,
    username: "",
    id: null

}
const initialSetUser = {
    username: '',
    id: null
}


const initalState = {

    posts: [],
    selectedPost: initialPost,
    likedPosts: [],
    user: {
        id: "",
        bio: "",
        username: "",
        category: "",
        followers: null,
        following: null,
        posts: []
    },
    setuser: initialSetUser
  
}

export default function reducer(state=initalState, action){
    switch (action.type) {
        case "GET_POSTS":
            return { ...state, posts: action.payload };
        case "GET_POST":
            console.log("this is GET_POST ", action.payload)
            return { ...state, selectedPost: action.payload };
        case "GET_USER":
                console.log("this is GET_USER ", action.payload)
            return { ...state, user: action.payload };
        case "SET_USER":
            console.log("this is SET_USER", action.payload)
            return { ...state, setuser: action.payload }
            case "LOGOUT":
                console.log("this is LOGOUT")
            return { ...state, setuser: initialSetUser }
        case "NEW_POST":
            console.log("this is NEW_POST")
            return { ...state, posts: [...state.posts, action.payload] }
        // case "ADD_LIKE":
        //     console.log("this is ADD_LIKE")
        //     // console.log(action.payload.likes)
        //     return {
        //         ...state, posts: state.posts.map(state => {
        //             // console.log(state.id)
        //             if (state.id == action.payload.id) {
        //                 console.log(state.likes)
        //                 return {...state, likes: state.likes + 1 }
        //             } else {
        //                 return state
        //             }
        //         })
        //     }
        case "ADD_LIKE":
            console.log("this is ADD_LIKE")
            // console.log(action.payload.likes)
            return {
                ...state, posts: state.posts.map(state => {
                    // console.log(state.id)
                    if (state.id == action.payload.id) {
                        console.log(state.likes)
                        return Object.assign({}, state, { likes: state.likes + 1 })
                    } else {
                        return state
                    }
                })
            }
        case "ADD_LIKE_FROM_USER_PROFILE":
            console.log("this is ADD_LIKE_FROM_USER_PROFILE")
            return {
                ...state, posts: state.user.posts.map(state => {
                    console.log(state.id)
                    if (state.id == action.payload.id) {
                        // console.log(state.likes)
                        return Object.assign({}, state, { likes: state.likes + 1 })
                    } else {
                        return state
                    }
                })

            }
        case "DELETE_POST":
            console.log("this is DELETE_POST")
            return {...state, selectedPost: initialPost}
        // case "CLEAR_USER":
        //     console.log("this is CLEAR_USERRRRRR ")
        //     return { ...state };
        default:
            return {...state}
    }
}