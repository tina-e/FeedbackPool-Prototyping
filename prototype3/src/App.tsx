import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateSubmission, MainDashboard, Submission } from "./pages";

export const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/FeedbackPool-Prototyping/submission/create" element={<CreateSubmission />} />
          <Route path="/FeedbackPool-Prototyping/submission/:submissionId" element={<Submission />} />
          <Route path="/FeedbackPool-Prototyping/feedback" element={<MainDashboard />} />
          <Route path="/FeedbackPool-Prototyping" element={<MainDashboard />} />
        </Routes>
      </>
    </Router>
  );
};
