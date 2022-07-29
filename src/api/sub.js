import axios from "axios";
import { getCookie } from "../Cookie";


// 1. Axios instance생성
const axi = axios.create({

    baseURL: "https://sparta-ysh.shop"

})

// 상우님 api https://shayangju.shop
// 동관님 api https://dkworld.shop
// 승훈님 api https://sparta-ysh.shop
// h2 https://dkworld.shop/h2-console/login.jsp?jsessionid=c2e65e7cdcb83d6b04d83acdc20b8073
// 합쳐진서버 api http://52.79.226.242

// 2. request interceptor
axi.interceptors.request.use(
    config => {
        const token = getCookie("token");
        config.headers.Authorization = token;
        return config;
    },
    error => {
        console.log(error);
    }
)

const axis = {
    //팀 게시판
    postInviteTeam: (data) => axi.post(`/api/teams/auth-code`, data), //초대받은 팀 찾기
    postTeamJoin: (data) => axi.post(`/api/teams/join`, data), //팀 참여하기 
    postTeam: (data) => axi.post(`/api/teams`, data), // 팀만들기
    getTeam: () => axi.get(`/api/teams`), // 팀선택페이지
    postUnaTeamJoin: (data)=>axi.post(`/api/teams/unanimous`, data), //una 팀 조인 테스트

    //meeting room
    postMeetingroom: (data) => axi.post(`api/chat/meetings/${data.meetingId}/rooms`, data),
    getTeamMain: ({ teamId }) => axi.get(`/api/teams/${teamId}`), // 팀 메인 게시판
    patchTeamImage: (data) => axi.patch(`/api/teams/${data.teamId}/teamImage`, data.teamImage), //팀 이미지 수정
    patchTeamNick: (data) => axi.patch(`/api/teams/${data.teamId}`, data), // 팀 닉네임 수정
    patchMeetProfile: (data) => axi.patch(`/api/meetings/${data.meetId}`, data), // 미팅 프로필 수정
    deleteMeet: (data) => axi.delete(`/api/meetings/${data.meetingId}`), // 미팅 삭제
    postReserveMeet: (data) => axi.post(`/api/teams/${data.teamId}/meetings`, data), // 미팅 예약 만들기
    postStartMeet: (data) => axi.post(`/api/teams/${data.teamId}/meetings/now`, data), // 미팅바로 시작하기
    getMeetList: ({ teamId }) => axi.get(`/api/teams/${teamId}/meetings`), // 미팅 목록 가져오기
    getMeetSpecific: ({ meetingId }) => axi.get(`/api/meetings/${meetingId}`), // 특정 미팅 조회
    postMeetReserveIssue: (data) => axi.post(`/api/meetings/${data.meetingId}/issues`, data), // 미팅 예약하기 안건등록
    postMeetStartIssue: (data) => axi.post(`/api/meetings/${data.meetingId}/issues/now`, data), // 미팅 바로 시작하기 안건 등록
    patchStartMeetIssue: (data) => axi.patch(`/api/meetings/${data.meetingId}/issues/${data.issueId}/now`, data), // 미팅 바로시작하기 안건 수정
    patchReserveMeetIssue: (data) => axi.patch(`/api/meetings/${data.meetingId}/issues/${data.issueId}`, data), // 예약 안건 수정
    deleteStartMeetIssue: (data) => axi.delete(`/api/meetings/${data.meetingId}/issues/${data.issueId}/now`), // 미팅 바로시작하기 안건 삭제
    deleteReserveMeetIssue: (data) => axi.delete(`/api/meetings/${data.meetingId}/issues/${data.issueId}`), // 예약 안건 삭제
    deleteTeamLeave: (data) => axi.delete(`/api/teams/${data.teamId}/${data.userId}/exit`), //팀 탈퇴
    deleteTeamMember: (data) => axi.delete(`/api/teams/${data.teamId}/${data.userId}/ban`), //팀원 추방
    postMeetRoom: () => axi.post(`/api/teams/${teamId}/meetings`), // 미팅룸 만들기
    getMeetDetail: ({ teamId, meetingId }) => axi.get(`/api/teams/${teamId}/meetings/${meetingId}`), // 미팅룸 상세조회
    getIssueList: ({ meetID }) => axi.get(`/api/meetings/${meetID}/issues`),
    getReserve: ({ teamId }) => axi.get(`/api/teams/${teamId}/meetings/yet`),
    getOnAir: ({ teamId }) => axi.get(`/api/teams/${teamId}/meetings/now`),
    getPassed: ({ teamId }) => axi.get(`/api/teams/${teamId}/meetings/done`),
    postLeader: (data) => axi.post(`/api/teams/${data.teamId}/manager`, data),
    patchAgenda: (data) => axi.patch(`/api/meetings/${data.meetingId}/issues/${data.issueId}/result`, data.issueResult), // 안건결과패치

    // 경계
    postLogin: (data) => axi.post(`/api/users/login`, data), // 로그인
    postEmailCheck: (data) => axi.post(`/api/users/emails`, data), // 이메일 인증
    postAuth: (data) => axi.post(`/api/users/emails/code`, data), // 이메일 코드인증
    postPassword: (data) => axi.post(`/api/users/signup`, data), // 아이디 패스워드 생성
    postNickCheck: (data) => axi.post(`/api/users/nickname`, data), // 닉네임 중복체크
    patchNickSave: (data) => axi.patch(`/api/users/nickname/${data.userid}`, data), // 닉네임 저장
    postEmailCode: (data) => axi.post(`/api/users/passwordFind`, data), // 이메일 코드 전송(비밀번호 찾기)
    postPasswordCode: (data) => axi.post(`/api/users/pwsearch/code`, data), // 비밀번호 코드
    patchPasswordChange: (data) => axi.patch(`/api/users/passwordChange`, data), // 비밀번호 변경 (토큰o)
    patchPasswordChan: (data) => axi.patch(`api/passwordChange`, data), // 비밀번호 변경(토큰x)
    postPicturePost: (data) => axi.post(`/api/users/signup/${data.userid}`, data.profileImage), // 이미지 쏘기
    postPasswordChange: (data) => axi.post(`/api/users/passwordCheck`, data) // 비밀번호 변경모달로 이동 버튼
}

export default axis;
