import "./CourseSlot.scss";
import { useState } from "react";

export default function CourseSlot({ level, day, time, spots }) {
  const [reserved, setReserved] = useState(false);
  const [remaining, setRemaining] = useState(spots);

  function handleReserve() {
    if (remaining > 0) {
      setReserved(true);
      setRemaining(remaining - 1);
    }
  }

  return (
    <div className="slot-card">
      <h3>{level}</h3>

      <p>
        {day} • {time}
      </p>

      {spots && <p className="spots">{remaining} place(s) restante(s)</p>}

      <button onClick={handleReserve} disabled={reserved || remaining === 0}>
        {remaining === 0 ? "Complet" : reserved ? "Réservé" : "Réserver"}
      </button>
    </div>
  );
}
