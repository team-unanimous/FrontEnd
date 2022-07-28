//init state
const initialState={
    teamId:0,
  }

//Action Type
const TEAM = "teamReducer/TEAM";

//Action Creator
export function setTeamID(payload){
    return{type:TEAM,payload}
}
//Reducer
export default function teamReducer(state=initialState,action={}){
    switch(action.type)
    {
        case TEAM : 
            return {...state, teamId: action.payload}
        default :  
            return state
    }
}