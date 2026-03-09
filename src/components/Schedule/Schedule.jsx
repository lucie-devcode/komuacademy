// import "./Schedule.scss";

// export default function Schedule() {
//   const schedule = [
//     {
//       id: 1,
//       course: "Coréen débutant",
//       day: "Lundi",
//       time: "18:00",
//       teacher: "Mme Kim",
//       spotsLeft: 2,
//     },
//     {
//       id: 2,
//       course: "Coréen débutant",
//       day: "Mercredi",
//       time: "19:00",
//       teacher: "Mme Kim",
//       spotsLeft: 1,
//     },
//     {
//       id: 3,
//       course: "Coréen intermédiaire",
//       day: "Jeudi",
//       time: "18:30",
//       teacher: "M. Lee",
//       spotsLeft: 3,
//     },
//     {
//       id: 4,
//       course: "Conversation coréenne",
//       day: "Samedi",
//       time: "14:00",
//       teacher: "Mme Park",
//       spotsLeft: 0,
//     },
//   ];

//   return (
//     <section className="schedule">
//       <div className="schedule-header">
//         <h2>Calendrier des cours</h2>
//         <p>Choisis le créneau qui te convient et réserve ta place.</p>
//       </div>

//       <div className="schedule-grid">
//         {schedule.map((slot) => (
//           <div className="schedule-card" key={slot.id}>
//             <h3>{slot.course}</h3>
//             <p>
//               <strong>Jour :</strong> {slot.day}
//             </p>
//             <p>
//               <strong>Heure :</strong> {slot.time}
//             </p>
//             <p>
//               <strong>Professeur :</strong> {slot.teacher}
//             </p>
//             <p className={slot.spotsLeft === 0 ? "full" : "available"}>
//               {slot.spotsLeft === 0
//                 ? "Complet"
//                 : `${slot.spotsLeft} place(s) restante(s)`}
//             </p>

//             <button disabled={slot.spotsLeft === 0}>
//               {slot.spotsLeft === 0 ? "Complet" : "Réserver"}
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
