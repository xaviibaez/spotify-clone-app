//Initial state of the user object
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token : null,
};

//Reducer -> estado del data layer y la accion (manipular como se muestra el dataLayer)
const reducer = (state, action) => {
    console.log(action);

    //Tipo de accion que hace el usuario
    switch (action.type) {
        case "SET_USER":
            return {
                //No variar su estado
                ...state,
                //Setear el nuevo estado
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                //No variar su estado
                ...state,
                //Setear el nuevo token
                token: action.token,
            };
        default:
            return state;
    }
};

export default reducer;