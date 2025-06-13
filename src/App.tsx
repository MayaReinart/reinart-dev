import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioPage from './components/PortfolioPage';
import { CVPage } from './components/cv';

function App() {
  return (
    <Router>
      <div className="font-sans bg-white">
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
