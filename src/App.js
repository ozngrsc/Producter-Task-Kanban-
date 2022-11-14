import "./App.css";
import Task from "./components/body/Task/Task";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/body/Dashboard/Dashboard";
import Changelog from "./components/body/Changelog/Changelog";
import Feedback from "./components/body/Feedback/Feedback";
import Help from "./components/body/Help/Help";
import InvitePeople from "./components/body/InvitePeople/InvitePeople";
import Notifications from "./components/body/Not/Notifications";
import Roadmap from "./components/body/Roadmap/Roadmap";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="sidebody">
          <Sidebar />
          <Routes>
            <Route path="/task" element={<Task />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/help" element={<Help />} />
            <Route path="/invitePeople" element={<InvitePeople />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
