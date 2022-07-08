import api from "./core";
import { emailPost } from "../pages/SignUpTwo"

const apis = {
    //팀 게시판
    getTeamMain: () => api.get(`/api/teams/${teamId}`), // 팀 메인 게시판
    patchMeetProfile: () => api.get(`/api/${meetingId}`), // 미팅 프로필 수정
    deleteMeet: () => api.delete(`/api/meetings/${meetingId}`), // 미팅 삭제
    postReserveMeet: () => api.post(`/api/teams/${teamId}/meetings`), // 미팅 예약 만들기
    postStartMeet: () => api.post(`/api/teams/${teamId}/meetings/now`), // 미팅바로 시작하기
    getMeetList: () => api.get(`/api/teams/${teamId}/meetings`), // 미팅 목록 가져오기
    getMeetSpecific: () => api.get(`/api/meetings/${meetingId}`), // 특정 미팅 조회
    patchMeetProfile: () => api.patch(`/api/meetings/${meetingId}`), // 미팅 프로필 수정
    postMeetReserveIssue: (data) => api.post(`/api/meetings/${meetingId}/issues`, data), // 미팅 예약하기 안건등록
    postMeetStartIssue: () => api.post(`/api/meetings/${meetingId}/issues/now`), // 미팅 바로 시작하기 안건 등록
    patchMeetIssue: () => api.patch(`/api/meetings/${meetingId}/issues/${issueId}`), // 안건 수정
    deleteMeetIssue: () => api.delete(`/api/meetings/${meetingId}/issues/${issueId}`), // 안건 삭제
    getMeetDetail: () => api.get(`/api/teams/${teamId}/meetings/${meetingId}`), // 미팅룸 상세조회


    postMeetRoom: () => api.post(`/api/teams/${teamId}/meetings`), // 미팅룸 만들기
    getMeetDetail: () => api.get(`/api/teams/${teamsId}/meetings/${meetingId}`), // 미팅룸 상세조회


    postInviteTeam: (data) => api.post(`/api/teams/auth-code`, data), //초대받은 팀 찾기
    postTeamJoin: (data) => api.post(`/api/teams/join`, data), //팀 참여하기 
    postTeam: (data) => api.post(`/api/teams`, data), // 팀만들기
    getTeam: () => api.get(`/api/teams`), // 팀선택페이지
    postLogin: (data) => api.post(`/api/users/login`, data), // 로그인
    // 경계
    postLogin: (data) => api.post(`/api/users/login`, data), // 로그인
    postEmailCheck: (data) => api.post(`/api/users/emails`, data), // 이메일 인증
    postAuth: (data) => api.post(`/api/users/emails/auth-code`, data), // 이메일 코드인증
    postPassword: (data) => api.post(`/api/users/signup`, data), // 아이디 패스워드 생성
    postNickCheck: (data) => api.post(`/api/users/nickname`, data), // 닉네임 중복체크
    patchNickSave: (data) => api.patch(`/api/users/nickname/${data.userid}`, data), // 닉네임 저장
    postPicturePost: (data) => api.post(`/api/users/signup/1`, data), // 프로필사진 등록
    postNickNameCreate: (data) => api.post(`api/users/signup/profile/{userid}`, data), // 닉네임 프로필 저장
}

export default apis;