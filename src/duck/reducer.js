 const initialState = {
     username:'',
     profileImg: '',
 }

const UPDATE_STATE = 'UPDATE-STATE';

 export default function reducer(state = initialState, action){
     console.log('action', action);
     
    switch (action.type) {
        case UPDATE_STATE:
            return Object.assign({}, state, {username: action.payload.username, profileImg: action.payload.profileImg})
        default:
            return state;
     }
 }

 export function updateState(username, profileImg){
     console.log(username, profileImg);
     
     return{
         type: UPDATE_STATE,
         payload: {
             username: username,
             profileImg: profileImg
         }
     }
 }
