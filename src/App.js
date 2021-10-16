import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Motion from './components/Motion';
import Presentation from './components/Presentation';

import './App.scss';

const App = () => (
  <div className="App">
    <Motion />
    <Presentation />
    <Gallery />
    <Footer />
  </div>
);

export default App;
