import css from './styles/App.module.scss';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Experties from "./components/Experties/Experties";
import Works from "./components/Works/Works";
import Portfolio from './components/Portfolio/Portfolio';
import Technical from './components/Skills/Technical';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className={`bg-primary ${css.container}`}>
    <Header />
    <Hero />
    <Experties />
    <Works />
    <Portfolio />
    <Technical />
    <Footer />
  </div>
)

export default App;
