import "./App.sass";

// Pages
import Header from "./Pages/Header/Header";
import Collection from "./Pages/Collection/Collection";
import Content from "./Pages/Content/Content";
import Roadmap from "./Pages/Roadmap/Roadmap";
import Team from "./Pages/Team/Team";
import Question from "./Pages/Question/Question";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Collection />
      <Content />
      <Roadmap />
      <Team />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
