import api from "./core";

const apis = {
    getTeamMain : ()=>api.get(`/api/teams/${teamId}`), // 팀 메인 게시판
    postMeetRoom : ()=>api.post(`/api/teams/${teamId}/meetings`), // 미팅룸 만들기
    getMeetDetail : ()=>api.get(`/api/teams/${teamsId}/meetings/${meetingId}`), // 미팅룸 상세조회
    postInviteTeam : (data)=>api.post(`/api/teams/auth-code`, data), //초대받은 팀 찾기
    postTeamJoin : (data)=>api.post(`/api/teams/join`, data), //팀 참여하기 
    postTeam : (data)=>api.post(`/api/teams`, data), // 팀만들기
    getTeam : ()=>api.get(`/api/teams`), // 팀선택페이지
    postLogin : (data)=>api.post(`/api/users/login`,data), // 로그인
    //kakao
    postAuth: () => api.post(`/api/users/emails/auth-code`), // 암호인증
    postNickNameCreate: () => api.post(`api/users/signup/profile/{userid}`), // 닉네임 프로필 저장
    postNickCheck: () => api.post(`/api/users/nickname`), // 닉네임 중복체크
    postEmailCheck: () => api.post(`/api/users/emails`), // 이메일 인증
    postSignUp: (data) => api.post(`/api/users/signup`, data), // 회원가입
}

export default apis;