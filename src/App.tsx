import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div
        style={{
          height: "200vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
        }}
      >
        Portfolio Coming Soon 🚀
      </div>
    </>
  );
}

export default App;