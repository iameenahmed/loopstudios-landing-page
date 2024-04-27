import Creations from "./components/Creations";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";

const App = () => {
  return (
    <div className="w-full font-secondary text-[15px] text-secondary">
      <Header />
      <main className="">
        <Hero />
        <Intro />
        <Creations />
      </main>
      <Footer />
    </div>
  );
};
export default App;
