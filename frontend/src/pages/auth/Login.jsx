import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { useAuth } from "../../context/AuthContext";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [form, setForm] = useState({
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
            company: form.company,
            position: form.position,
            email: form.email,
        });
        navigate("/feed");
    };

    return (
        <AuthLayout
            title="Iniciar sesión"
            subtitle="Accede a la comunidad tipo Reddit"
        >
            <form onSubmit={handleSubmit} className="auth-form">
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
                    Ingresar
                </button>
            </form>

            <p className="auth-switch">
                ¿No tienes cuenta? <Link to="/register">Crear cuenta</Link>
            </p>
        </AuthLayout>
    );
}

export default Login;