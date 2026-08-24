import './Card.css';

export default function Card({ icon, title, children }) {
  return (
    <article className="card">
      {icon && <span className="card__icon">{icon}</span>}
      <h3 className="card__title">{title}</h3>
      <p className="card__body">{children}</p>
    </article>
  );
}
