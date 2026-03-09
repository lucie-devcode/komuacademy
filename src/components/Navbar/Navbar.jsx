import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">KomuAcademy</h2>
      <ul className="menu">
        <li>Accueil</li>
        <li>Cours</li>
        <li>Communauté</li>
        <li>Connexion</li>
      </ul>
    </nav>
  );
}
