import "./WhyUs.scss";

export default function WhyUs() {
  const advantages = [
    {
      title: "Petits groupes",
      description: "Maximum 4 élèves pour progresser rapidement.",
    },
    {
      title: "Professeurs natifs",
      description: "Apprends avec des enseignants coréens expérimentés.",
    },
    {
      title: "Pratique réelle",
      description: "Conversation et situations de la vie quotidienne.",
    },
    {
      title: "Communauté",
      description: "Rencontre d'autres passionnés de culture coréenne.",
    },
  ];

  return (
    <section className="whyus">
      <h2>Pourquoi choisir KomuAcademy ?</h2>

      <div className="whyus-grid">
        {advantages.map((item, index) => (
          <div className="whyus-card" key={index}>
            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
