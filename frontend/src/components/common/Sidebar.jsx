import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <Link to="/feed" className="sidebar__link">
          Inicio
        </Link>
        <Link to="/create" className="sidebar__link">
          Crear post
        </Link>
      </nav>

      <div className="sidebar__box">
        <h3>Comunidad</h3>
        <p>Comparte experiencias, tips, preguntas y recomendaciones.</p>
      </div>
    </aside>
  );
}

export default Sidebar;