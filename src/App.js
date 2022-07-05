import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";


// page import
import Home from "./pages/Home";
import MeetMake from "./pages/MeetMake";
import MeetDetail from "./pages/MeetDetail";
import TeamSelect from "./pages/TeamSelect";
import TeamBoard from "./pages/TeamBoard";
import Login from "./pages/Login";
import SignUpOne from "./pages/SignupOne";
import SignUpTwo from "./pages/SignUpTwo";
import SignUpThree from "./pages/SignUpThree"
import SignUpFour from "./pages/SignUpFour";
import TeamMake from "./pages/TeamMake";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signupone" element={<SignUpOne />} />
        <Route path="/signuptwo" element={<SignUpTwo />} />
        <Route path="/signupthree" element={<SignUpThree />} />
        <Route path="/signupfour" element={<SignUpFour />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meetmake" element={<MeetMake />} />
        <Route path="/meetdetail" element={<MeetDetail />} />
        <Route path="/teamboard" element={<TeamBoard />} />
        <Route path="/teamselect" element={<TeamSelect />} />
        <Route path="/teammake" element={<TeamMake />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;