import DailyPicks from "./components/DailyPicks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Principles from "./components/Principles";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <DailyPicks />
        <Principles />
        <Footer />
      </div>
    </>
  );
}

export default App;
