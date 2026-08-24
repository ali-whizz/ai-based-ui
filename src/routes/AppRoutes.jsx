import { Routes, Route, Navigate } from 'react-router-dom';
import { PATHS } from './paths';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={PATHS.home} element={<Home />} />
      <Route path={PATHS.about} element={<About />} />
      <Route path={PATHS.services} element={<Services />} />
      <Route path={PATHS.contact} element={<Contact />} />
      <Route path="*" element={<Navigate to={PATHS.home} replace />} />
    </Routes>
  );
}
