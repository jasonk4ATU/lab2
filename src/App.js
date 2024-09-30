import Header from './components/header'; //import content from a component
import Content from './components/content';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <NavigationBar />
      <Routes>
        <Route path="/content" element={<Content />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
