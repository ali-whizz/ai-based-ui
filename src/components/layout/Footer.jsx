import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../../routes/paths';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Nimbus Studio. All rights reserved.
        </p>
        <nav className="footer__links">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className="footer__link">
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </footer>
  );
}
