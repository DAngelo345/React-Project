// import { useReducer } from "react"

// import { bindActionCreators } from "redux"

const initalState = {

    posts: []
}

export default function reducer(state=initalState, action){
    switch (action.type) {
        
        case "GET_POSTS":
            return { ...state, posts: action.payload };
        default:
            return {...state}
    }
}