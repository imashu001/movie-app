export default function movies (state = [], action) {
    if(action.type === 'ADD_Movies'){
        return action.movies;
    }
    return state;
}
