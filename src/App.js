import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";


// page import
import Home from "./pages/Home";
import MeetMakeOne from "./pages/MeetMakeOne";
import MeetMakeTwoOne from "./pages/MeetMakeTwoOne";
import MeetMakeTwoTwo from "./pages/MeetMakeTwoTwo";
import MeetMakeThreeOne from "./pages/MeetMakeThreeOne";
import MeetMakeThreeTwo from "./pages/MeetMakeThreeTwo";
import MeetDetailOne from "./pages/MeetDetailOne";
import MeetDetailTwo from "./pages/MeetDetailTwo";
import TeamSelect from "./pages/TeamSelect";
import TeamBoard from "./pages/TeamBoard";
import Login from "./pages/Login";
import SignUpOne from "./pages/SignupOne";
import SignUpTwo from "./pages/SignUpTwo";
import SignUpThree from "./pages/SignUpThree"
import SignUpFour from "./pages/SignUpFour";
import TeamMake from "./pages/TeamMake";
import TeamInvited from "./pages/TeamInvited";
import TeamJoin from "./pages/TeamJoin";
import Landing from "./pages/Landing";
import MeetingRoomChat from "./components/MeetingRoomChat";
import MeetingRoomStyle from "./components/MeetingRoomStyle";
import MeetingRoomMain from "./pages/MeetingRoomMain";
import Mypage from "./pages/Mypage";
import PasswordFindOne from "./pages/PasswordFindOne"
import PasswordFindTwo from "./pages/PasswordFindTwo"
import MeetingEditTwoOne from "./pages/MeetingEditTwoOne";
import MeetingEditTwoTwo from "./pages/MeetingEditTwoTwo";
import JoinRoom from "./components/WebRTC/JoinRoom";
import MeetingRoom from "./pages/MeetingRoom";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signupone" element={<SignUpOne/>} />
        <Route path="/signuptwo" element={<SignUpTwo/>} />
        <Route path="/signupthree" element={<SignUpThree/>} />
        <Route path="/signupone" element={<SignUpOne />} />
        <Route path="/signuptwo" element={<SignUpTwo />} />
        <Route path="/signupthree" element={<SignUpThree />} />
        <Route path="/signupfour" element={<SignUpFour />} />
        <Route path="/teamboard/:teamid/:meetid/meetingeditone" element={<MeetingEditTwoOne/>}/>
        <Route path="/teamboard/:teamid/:meetid/meetingedittwo" element={<MeetingEditTwoTwo/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/teamboard/:teamid/meetmakeone" element={<MeetMakeOne />} />
        <Route path="/teamboard/:teamid/meetmaketwoone" element={<MeetMakeTwoOne />} />
        <Route path="/teamboard/:teamid/meetmaketwotwo" element={<MeetMakeTwoTwo />} />
        <Route path="/teamboard/:teamid/meetmakethreeone" element={<MeetMakeThreeOne />} />
        <Route path="/teamboard/:teamid/meetmakethreetwo" element={<MeetMakeThreeTwo />} />
        <Route path="/teamboard/:teamid/:meetid/meetdetailone" element={<MeetDetailOne />} />
        <Route path="/teamboard/:teamid/:meetid/meetdetailtwo" element={<MeetDetailTwo />} />
        <Route path="/teamboard/:teamid" element={<TeamBoard />} />
        <Route path="/teamselect" element={<TeamSelect />} />
        <Route path="/teammake" element={<TeamMake />} />
        <Route path="/teaminvited" element={<TeamInvited />} />
        <Route path="/teamjoin" element={<TeamJoin />} />
        <Route path="/chat" element={<MeetingRoomChat />} />
        <Route path="/chatstyle" element={<MeetingRoomStyle />} />
        <Route path="/meetingroom" element={<MeetingRoomMain />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/passwordfindone" element={<PasswordFindOne />} />
        <Route path="/passwordfindtwo" element={<PasswordFindTwo />} />
        <Route path="/meetingroomtest" element={<MeetingRoom/>}/>
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;