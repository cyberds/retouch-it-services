import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SEO from './components/SEO';

const App = () => {
  return (
    <>
      <SEO
        title="Retouch IT Services | Global Digital Solutions, Local Expertise"
        description="Retouch IT Services provides comprehensive digital solutions including UX Design, AI, Digital Marketing, CRM, Web Development, and more. Global expertise, local service."
        image="https://retouchitservices.com/og-image.jpg"
        url="https://retouchitservices.com"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
};

export default App;
