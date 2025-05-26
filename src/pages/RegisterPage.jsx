import { useState } from "react";
import { Link } from "react-router-dom";
import google from  '../assets/google.png'


export default function RegisterPage() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Cadastro com:", usuario, email, senha);
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
