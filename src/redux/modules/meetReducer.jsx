
const initialState={
    meetID:0,
    theme:1
  }

const TEAM = "meetReducer/TEAM";
const THEME = "meetReducer/THEME"


export function teamID(payload){
    return{type:TEAM,payload}
}

export function themem(payload){
    return{type:THEME,payload}
}

function meetReducer(state=initialState,action){
    switch(action.type)
    {
        case TEAM : return{...state,meetID:action.payload}
        case THEME : return{...state,theme:action.payload}
        default :  return{...state}
    }
}


export default meetReducer