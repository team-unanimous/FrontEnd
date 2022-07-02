import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";


// page import
import Home from "./pages/Home";
import MeetMakeOne from "./pages/MeetMakeOne";
import MeetMakeTwo from "./pages/MeetMakeTwo";
import MeetDetail from "./pages/MeetDetail";
import TeamSelect from "./pages/TeamSelect";
import TeamBoard from "./pages/TeamBoard";
import Login from "./pages/Login";
import SignUpOne from "./pages/SignupOne";
import SignUpTwo from "./pages/SignUpTwo";
import SignUpThree from "./pages/SignUpThree";
import TeamMake from "./pages/TeamMake";
import TeamInvited from "./pages/TeamInvited";
import TeamJoin from "./pages/TeamJoin";


const queryClient = new QueryClient();
TeamInvited
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signupone" element={<SignUpOne/>} />
        <Route path="/signuptwo" element={<SignUpTwo/>} />
        <Route path="/signupthree" element={<SignUpThree/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/meetmakeone" element={<MeetMakeOne />} />
        <Route path="/meetmaketwo" element={<MeetMakeTwo />} />
        <Route path="/meetdetail" element={<MeetDetail />} />
        <Route path="/teamboard" element={<TeamBoard />} />
        <Route path="/teamselect" element={<TeamSelect />}/>
        <Route path="/teammake" element={<TeamMake />} />
        <Route path="/teaminvited" element={<TeamInvited />} />
        <Route path="/teamjoin" element={<TeamJoin />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;