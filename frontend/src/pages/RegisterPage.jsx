import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from  '../assets/google.png'
import api from '../api';


export default function RegisterPage() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Cadastro com:", usuario, email, senha);

    try {
      const res = await api.post("/api/user/register/", {
        username: usuario,
        email: email,
        password: senha
      });
      // Se o backend não retornar tokens, remova as linhas abaixo:
      // localStorage.setItem(ACCESS_TOKEN, res.data.access);
      // localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate("/login"); // Redireciona para a página de login após o cadastro
    }
    catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleRegister}>
        <h2>Cadastre-se</h2>

        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          Já possui uma conta? <Link to="/login">Faça login</Link>
        </p>

        <button type="submit">Continuar</button>

        <hr />
        <button type="button">
            <img src={google} alt="Google Logo" style={{width: '20px', marginLeft: '8px', verticalAlign: 'middle'}} />
            Iniciar sessão com Google</button>
      </form>
    </div>
  );
}
