import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";

// page import
import Home from "./pages/Home";
import MeetMake from "./pages/MeetMake";
import MeetDetail from "./pages/MeetDetail";
import TeamBoard from "./pages/TeamBoard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meetmake" element={<MeetMake />} />
        <Route path="/meetdetail" element={<MeetDetail />} />
        <Route path="/teamboard" element={<TeamBoard />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
