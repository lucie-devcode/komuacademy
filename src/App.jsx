import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import AdBanner from "./components/AdBanner/AdBanner";

function App() {
  const messages = [
    "🚨 Participez au concours KomuClub ! 🚨",
    "🎁 Gagnez des livres coréens et goodies K-pop !",
    "📢 Nouvelles leçons chaque semaine !",
  ];

  return (
    <>
      <AdBanner messages={messages} />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
