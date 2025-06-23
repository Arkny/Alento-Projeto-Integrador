import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import api from '../api';

export default function LoginPage() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate(); // <- fora do return

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login com:", usuario, senha);
    try {
      const res = await api.post("/api/token/", {
        username: usuario,
        password: senha
      });
      localStorage.setItem("ACCESS_TOKEN", res.data.access);
      localStorage.setItem("REFRESH_TOKEN", res.data.refresh);
      navigate("/home");
    }
    catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Tente novamente.");
    }
    // Simulação de sucesso no login
    // Aqui você pode validar com backend futuramente
    // <- redireciona para HomePage
  };

  return (
    <div className="form-container">
      <form onSubmit={handleLogin}>
        <h2>Acesse sua conta</h2>

        <input
          type="text"
          placeholder="Usuário/Email"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <p>
          Não possui uma conta? <Link to="/register">Cadastre-se</Link>
        </p>

        <button type="submit">Continuar</button>

        <hr />
        <button type="button">
          <img
            src={google}
            alt="Google Logo"
            style={{
              width: "20px",
              marginLeft: "8px",
              verticalAlign: "middle",
            }}
          />
          Entrar com Google
        </button>
      </form>
    </div>
  );
}
