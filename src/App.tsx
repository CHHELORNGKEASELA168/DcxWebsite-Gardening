
import './styles/App.css';
import Header from './components/Header';

import Footer from './components/Footer';
// import Home from './components/Home';
import { BrowserRouter} from "react-router-dom";
import Rout from './components/Rout';
// import Routpage from './components/Routpage';
// import Rout from './components/page/Homeser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Rout />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;