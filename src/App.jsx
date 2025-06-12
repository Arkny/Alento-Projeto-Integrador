import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import GroundingWrapper from './pages/GroundingWrapper'; // Importar o novo GroundingWrapper

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* Nova rota para o GroundingWrapper com rotas aninhadas */}
        <Route path="/grounding" element={<GroundingWrapper />}>
          <Route path="1" element={<></>} /> {/* Renderizado via GroundingWrapper */}
          <Route path="2" element={<></>} />
          <Route path="3" element={<></>} />
          <Route path="4" element={<></>} />
          <Route path="5" element={<></>} />
          {/* Redireciona /grounding para /grounding/1 por padrão */}
          <Route index element={<Navigate to="1" replace />} />
        </Route>
        {/* Adicionar um fallback para /grounding-01 caso ainda seja referenciado em algum lugar */}
        <Route path="/grounding-01" element={<Navigate to="/grounding/1" replace />} />
      </Routes>
    </Router>
  );
}

export default App;