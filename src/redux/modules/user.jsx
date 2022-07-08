// 액션 타입
const USERID = 'post/USERID'

// 액션 함수
export const tossUserId = (payload) => ({ type: USERID, payload });

// 초기값
const initialState = {
    usersid: "",
}

// 리듀서
export default function userReducer(state = initialState, { payload, type }) {
    switch (type) {
        case USERID:
            return {
                ...state,
                usersid: payload,
            };
        default:
            return state;
    }
} 