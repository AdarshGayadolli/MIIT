import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
// import BIM from './pages/BIM/BIM';

import DigitalMarketing from './pages/Department/DigitalMarketing/DigitalMarketing';
import Management from './pages/About/Management/Management';
import PrincipalAndDirector from './pages/About/PrincipalAndDirector/principal-director';
import VisionAndMission from './pages/About/VisionMission/Vision-Mission';
import Values from './pages/About/Values/Values';
import About from './pages/About/About';
import Admissions from './pages/Admissions/Admissions';
import OrganizationChart from './pages/Administration/OrganizationChart/OrganizationChart';
import AdministrativeStaff from './pages/Administration/AdministrativeStaff/AdministrativeStaff';
import BIM from './pages/Department/BIM/BIM';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import AboutTrainingAndPlacement from './pages/TrainingAndPlacement/About/AboutTrainingAndPlacement';
import PlacementCommittee from './pages/TrainingAndPlacement/PlacementCommitie/PlacementCommittee';
import TrainingAndPlacementProcess from './pages/TrainingAndPlacement/TrainingAndPlacementProcess/TrainingAndPlacementProcess';
import TrainingRoadmap from './pages/TrainingAndPlacement/TrainingRoadmap/TrainingRoadmap';
import PlacementStatistics from './pages/TrainingAndPlacement/PlacementStatistics/PlacementStatistics';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* About Us */}
            <Route path="/about/management" element={<Management />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/principal-director" element={<PrincipalAndDirector />} />
            <Route path="/about/vision-mission" element={<VisionAndMission />} />
            <Route path="/about/quality-policy" element={<Values />} />

            {/* Administration */}
            <Route path="/administration/organization-chart" element={<OrganizationChart />} />
            <Route path="/administration/best-practices" element={<div>Best Practices</div>} />
            <Route path="/administration/administrative-staff" element={<AdministrativeStaff />} />

            {/* Departments */}
            <Route path="/departments/bim-construction" element={<BIM />} />
            <Route path="/departments/digital-marketing" element={<DigitalMarketing />} />

            {/* Training & Placement */}
            <Route path="/training-placement/about" element={<AboutTrainingAndPlacement />} />
            <Route path="/training-placement/committee" element={<PlacementCommittee />} />
            <Route path="/training-placement/process" element={<TrainingAndPlacementProcess />} />
            <Route path="/training-placement/roadmap" element={ <TrainingRoadmap/>} />
            {/* <Route path="/training-placement/partners" element={<div>Placement Partners</div>} />
            <Route path="/training-placement/events" element={<div>Events</div>} /> */}
            <Route path="/training-placement/statistics" element={ <PlacementStatistics/>} />

            {/* Other */}
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            {/* NOT FOUND */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;