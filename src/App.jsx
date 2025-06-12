import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import GroundingWrapper from './pages/GroundingWrapper';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        {/*
          Remove nested routes for grounding pages.
          GroundingWrapper will handle which specific GroundingPage to display
          based on its internal logic and the URL.
          The path will now be /grounding/:id
        */}
        <Route path="/grounding/:id" element={<GroundingWrapper />} />
        <Route path="/grounding" element={<Navigate to="/grounding/1" replace />} />

        {/* Adicionar um fallback para /grounding-01 caso ainda seja referenciado em algum lugar */}
        <Route path="/grounding-01" element={<Navigate to="/grounding/1" replace />} />
      </Routes>
    </Router>
  );
}

export default App;