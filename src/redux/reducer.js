// import { useReducer } from "react"

// import { bindActionCreators } from "redux"

const initialPost = {
    image: "",
    description: "",
    likes: 0,
    username: "",
    bio: "",
    category: "",
    followers: 0,
    following: 0

}


const initalState = {

    posts: [],
    selectedPost: initialPost,
    user: {
        id: "",
        bio: "",
        username: "",
        category: "",
        followers: null,
        following: null,
        posts: []
    },
    setuser: {
        username: ''
    }
  
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
                return{ ...state, setuser: ""}
        // case "CLEAR_USER":
        //     console.log("this is CLEAR_USERRRRRR ")
        //     return { ...state };
        default:
            return {...state,}
    }
}