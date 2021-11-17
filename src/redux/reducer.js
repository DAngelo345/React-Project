// import { useReducer } from "react"

// import { bindActionCreators } from "redux"

const initalState = {

    posts: [],
    selectedPost: {
        image: "",
        description: "",
        likes: 0,
        username: "",
        bio: "",
        category: "",
        followers: 0,
        following: 0
    },
    user: []
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
        default:
            return {...state,}
    }
}