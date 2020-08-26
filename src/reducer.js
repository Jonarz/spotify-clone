export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null
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
        default:
            return state;
            break;
    }
}


export default reducer;