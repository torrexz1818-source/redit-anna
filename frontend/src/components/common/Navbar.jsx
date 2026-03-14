import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="navbar">
      <Link to="/feed" className="navbar__logo">
        ReditAnna
      </Link>

      <div className="navbar__actions">
        {user && <span className="navbar__user">Hola, {user.name}</span>}
        <button onClick={logout} className="btn btn--ghost">
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}

export default Navbar;