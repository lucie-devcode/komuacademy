import "./Courses.scss";

export default function Courses() {
  return (
    <section className="courses">
      <h2>Nos offres</h2>

      <div className="courses-grid">
        <div className="course-card">
          <h3>Cours en groupe</h3>
          <p>
            Mini-classe de 3 à 4 élèves avec le même groupe pendant 1 mois. Un
            rendez-vous fixe chaque semaine pour progresser ensemble.
          </p>

          <p className="small-text">
            Des cours individuels peuvent être ajoutés en complément.
          </p>

          <p className="price">80 € / mois</p>

          <a href="/cours">
            <button>Voir les créneaux</button>
          </a>
        </div>

        <div className="course-card">
          <h3>Cours individuel</h3>
          <p>
            Cours personnalisé avec des horaires flexibles entre 8h et 18h.
            Idéal pour progresser rapidement et travailler ses difficultés.
          </p>

          <p className="small-text">
            Des cours en groupe peuvent être ajoutés en complément.
          </p>

          <div className="private-prices">
            <div className="price-row">
              <span>1 cours</span>
              <strong>30 €</strong>
            </div>

            <div className="price-row">
              <span>Pack 5</span>
              <div className="price-with-badge">
                <strong>140 €</strong>
                <span className="discount-badge">-7%</span>
              </div>
            </div>

            <div className="price-row">
              <span>Pack 10</span>
              <div className="price-with-badge">
                <strong>260 €</strong>
                <span className="discount-badge best-badge">-13%</span>
              </div>
            </div>
          </div>
          <a href="/cours">
            <button>Voir les créneaux</button>
          </a>
        </div>

        <div className="course-card highlight">
          <h3>Pack mixte</h3>
          <p>
            1 cours en groupe + 1 cours individuel par semaine pour progresser
            plus vite.
          </p>
          <p className="price">160 € / mois</p>
          <a href="/cours">
            <button>Voir les créneaux</button>
          </a>
        </div>
      </div>
    </section>
  );
}
