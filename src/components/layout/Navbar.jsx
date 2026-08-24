import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS, PATHS } from '../../routes/paths';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to={PATHS.home} className="navbar__brand" onClick={close}>
          <span className="navbar__mark">N</span>
          Nimbus
        </Link>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={close}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'is-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
