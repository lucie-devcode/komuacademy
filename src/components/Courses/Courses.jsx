import "./Courses.scss";

export default function Courses() {
  const courses = [
    {
      title: "Coréen débutant",
      level: "Aucun prérequis",
      students: "4 élèves max",
    },
    {
      title: "Coréen intermédiaire",
      level: "TOPIK 2 minimum",
      students: "4 élèves max",
    },
    {
      title: "Conversation coréenne",
      level: "Pratique orale",
      students: "4 élèves max",
    },
  ];

  return (
    <section className="courses">
      <h2>Cours populaires</h2>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>

            <p>{course.level}</p>

            <p>{course.students}</p>

            <button>Voir le cours</button>
          </div>
        ))}
      </div>
    </section>
  );
}
