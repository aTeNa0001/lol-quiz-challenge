import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}

export default App;
