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
import SignUpThree from "./pages/SignUpThree";
import TeamMake from "./pages/TeamMake";
import TeamInvited from "./pages/TeamInvited";
import TeamJoin from "./pages/TeamJoin";
import Landing from "./pages/Landing";
import MeetingRoomChat from "./components/MeetingRoomChat";
import MeetingRoomStyle from "./components/MeetingRoomStyle";
import MeetingRoomMain from "./pages/MeetingRoomMain";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/signupone" element={<SignUpOne/>} />
        <Route path="/signuptwo" element={<SignUpTwo/>} />
        <Route path="/signupthree" element={<SignUpThree/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/meetmakeone" element={<MeetMakeOne />} />
        <Route path="/meetmaketwoone" element={<MeetMakeTwoOne />} />
        <Route path="/meetmaketwotwo" element={<MeetMakeTwoTwo />} />
        <Route path="/meetmakethreeone" element={<MeetMakeThreeOne />} />
        <Route path="/meetmakethreetwo" element={<MeetMakeThreeTwo />} />
        <Route path="/meetdetailone" element={<MeetDetailOne />} />
        <Route path="/meetdetailtwo" element={<MeetDetailTwo />} />
        <Route path="/teamboard" element={<TeamBoard />} />
        <Route path="/teamselect" element={<TeamSelect />}/>
        <Route path="/teammake" element={<TeamMake />} />
        <Route path="/teaminvited" element={<TeamInvited />} />
        <Route path="/teamjoin" element={<TeamJoin />} />
        <Route path="/chat" element={<MeetingRoomChat />} />
        <Route path="/chatstyle" element={<MeetingRoomStyle />} />
        <Route path="/meetingroom" element={<MeetingRoomMain />} />

      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;