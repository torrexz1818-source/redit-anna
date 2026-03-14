import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { useAuth } from "../../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    name: "",
    company: "",
    position: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      name: form.name,
      email: form.email,
    });

    navigate("/feed");
  };

  return (
    <AuthLayout
      title="Crear cuenta"
      subtitle="Únete a la comunidad"
    >
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Empresa"
          value={form.company}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="position"
          placeholder="Cargo"
          value={form.position}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn--primary">
          Registrarme
        </button>
      </form>

      <p className="auth-switch">
        ¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link>
      </p>
    </AuthLayout>
  );
}

export default Register;