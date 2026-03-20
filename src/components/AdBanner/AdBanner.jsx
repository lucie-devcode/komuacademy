import "./AdBanner.scss";

export default function AdBanner({ messages }) {
  // on duplique les messages pour un scroll infini
  const allMessages = [...messages, ...messages];

  return (
    <div className="adbanner-container">
      <div className="adbanner-scroll">
        {allMessages.map((msg, i) => (
          <span key={i}>{msg}</span>
        ))}
      </div>
    </div>
  );
}
