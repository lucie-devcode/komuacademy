import "./CoursesPage.scss";
import CourseSlot from "../components/CourseSlot/CourseSlot";

export default function CoursesPage() {
  // créneaux groupe
  // On crée une liste d’objets qui contient les créneaux. Chaque objet représente un cours.
  const groupSlots = [
    { level: "Débutant", day: "Lundi", time: "19h", spots: 4 }, //spots = places restantes
    { level: "Débutant", day: "Mercredi", time: "19h", spots: 3 },
    { level: "Débutant", day: "Samedi", time: "10h", spots: 2 },

    { level: "Intermédiaire", day: "Mardi", time: "18h30", spots: 4 },
    { level: "Intermédiaire", day: "Jeudi", time: "18h30", spots: 3 },
    { level: "Intermédiaire", day: "Samedi", time: "11h30", spots: 2 },
  ];

  // créneaux individuels
  //On crée une constante appelée privateSlots.
  // On crée une constante appelée privateSlots et sa valeur est vide
  const privateSlots = [];

  const weekdays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

  weekdays.forEach((day) => {
    //day est une variable temporaire. À chaque tour de boucle, elle prend la valeur d’un jour.
    for (let hour = 10; hour <= 12; hour++) {
      privateSlots.push({ day, time: `${hour}h` });
    }

    for (let hour = 14; hour <= 18; hour++) {
      privateSlots.push({ day, time: `${hour}h` });
    }
  });

  for (let hour = 9; hour <= 12; hour++) {
    privateSlots.push({ day: "Samedi", time: `${hour}h` });
  }

  return (
    <section className="courses-page">
      <h1>Créneaux disponibles</h1>

      {/* COURS GROUPE */}

      <div className="course-section">
        <h2>Cours en groupe</h2>

        <div className="slots-grid">
          {groupSlots.map((slot, index) => (
            <CourseSlot
              key={index}
              level={slot.level}
              day={slot.day}
              time={slot.time}
              spots={slot.spots}
            />
          ))}
        </div>
      </div>

      {/* COURS INDIVIDUELS */}

      <div className="course-section">
        <h2>Cours individuels</h2>

        <div className="slots-grid">
          {privateSlots.map((slot, index) => (
            <CourseSlot
              key={index}
              level="Cours individuel"
              day={slot.day}
              time={slot.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
