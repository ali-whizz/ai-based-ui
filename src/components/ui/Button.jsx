import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Renders a <Link> when `to` is passed, otherwise a plain <button>.
 * variant: 'primary' | 'ghost'
 */
export default function Button({
  children,
  to,
  variant = 'primary',
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
