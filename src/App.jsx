import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import BIM from './pages/BIM/BIM';
import DigitalMarketing from './pages/DigitalMarketing/DigitalMarketing';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* About Us */}
            <Route path="/about/management" element={<div>About Management</div>} />
            <Route path="/about/principal-director" element={<div>Principal & Director</div>} />
            <Route path="/about/vision-mission" element={<div>Vision & Mission</div>} />
            <Route path="/about/quality-policy" element={<div>Quality Policy & Core Values</div>} />

            {/* Administration */}
            <Route path="/administration/organization-chart" element={<div>Organization Chart</div>} />
            <Route path="/administration/best-practices" element={<div>Best Practices</div>} />
            <Route path="/administration/administrative-staff" element={<div>Administrative Staff</div>} />

            {/* Departments */}
            <Route path="/departments/bim-construction" element={<BIM />} />
            <Route path="/departments/digital-marketing" element={<DigitalMarketing />} />

            {/* Training & Placement */}
            <Route path="/training-placement/about" element={<div>About Training & Placement</div>} />
            <Route path="/training-placement/committee" element={<div>Placement Committee</div>} />
            <Route path="/training-placement/process" element={<div>Training & Placement Process</div>} />
            <Route path="/training-placement/roadmap" element={<div>Training Roadmap</div>} />
            <Route path="/training-placement/partners" element={<div>Placement Partners</div>} />
            <Route path="/training-placement/events" element={<div>Events</div>} />
            <Route path="/training-placement/statistics" element={<div>Placement Statistics</div>} />

            {/* Other */}
            <Route path="/admissions" element={<div>Admissions</div>} />
            <Route path="/contact" element={<div>Contact</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;