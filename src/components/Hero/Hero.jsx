import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Apprends le coréen avec une vraie communauté 🇰🇷</h1>

        <p>
          Des cours individuels ou en petits groupes, des professeurs passionnés
          et une communauté pour pratiquer le coréen tous les jours.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Voir les cours</button>
          <button className="secondary-btn">Rejoindre la communauté</button>
        </div>
      </div>
    </section>
  );
}
