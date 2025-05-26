import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google.png";

export default function LoginPage() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate(); // <- fora do return

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login com:", usuario, senha);

    // Simulação de sucesso no login
    // Aqui você pode validar com backend futuramente
    navigate("/home"); // <- redireciona para HomePage
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
