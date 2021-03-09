import { createStore, combineReducers } from "redux";

const postsReducer = ( state = { posts: {} }, action ) => {
    switch( action.type ) {
        case 'GETTING_POSTS':
            return { posts: [...action.posts] };
        default:
            return state;
    }
}

const blogStore = () => {
    const store = createStore( combineReducers({
        posts: postsReducer
    }) );
    return store;
}

export default blogStore;

/* const unsubscribe = () => {
    const store = blogStore();
    store.subscribe( 
        () => ( store.getState() )
     )
} */