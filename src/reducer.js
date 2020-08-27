export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    weekly: null
}



const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
            break;
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
            break;
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                weekly: action.weekly
            }
        default:
            return state;
    }
}


export default reducer;