// 액션 타입
const USERID = 'post/USERID'
const POST_USERID = 'post/POST_USERID'

// 액션 함수
export const tossUserId = (payload) => ({ type: USERID, payload });
export const postUserId = (payload) => ({ type: POST_USERID, payload });

// 초기값
const initialState = {
    users: "",
}

// 리듀서
export default function postReducer(state = initialState, { payload, type }) {
    switch (type) {
        case POST_USERID:
            return {
                ...state,
                users: payload,
            };
        case USERID:
            return {
                ...state,
                users: payload,
            };
        default:
            return state;
    }
} 