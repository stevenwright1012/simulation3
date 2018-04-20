 const initialState = {
     username:'',
     id: '',
     profileImg: '',
 }

const UPDATE_STATE = 'UPDATE-STATE';

 export default function reducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_STATE:
            return Object.assign({}, state, {username: action.payload.username, id: action.payload.userId, profileImg: action.payload.profileImg})
        default:
            return state;
     }
 }

 export function updateState(id, username, profileImg){
     return{
         type: UPDATE_STATE,
         payload: {
             userId: id,
             username: username,
             profileImg: profileImg
         }
     }
 }
