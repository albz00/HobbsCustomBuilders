import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Builds from './pages/Builds';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Reviews from './pages/Reviews';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builds" element={<Builds />} />
          <Route path="/services" element={<Navigate to="/builds" replace />} />
          <Route path="/work" element={<Navigate to="/builds" replace />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
