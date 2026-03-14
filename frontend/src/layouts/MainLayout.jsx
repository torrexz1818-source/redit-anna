import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-shell__body">
        <Sidebar />
        <main className="app-shell__content">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;