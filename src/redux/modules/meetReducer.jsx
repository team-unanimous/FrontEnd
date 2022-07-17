
const initialState={
    meetID:0,
  }

const TEAM = "meetReducer/TEAM";

export function teamID(payload){
    return{type:TEAM,payload}
}

function meetReducer(state=initialState,action){
    switch(action.type)
    {
        case TEAM : return{...state,meetID:action.payload}
        default :  return{...state}
    }
}


export default meetReducer