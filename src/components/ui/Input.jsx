import './Input.css';

export default function Input({ label, id, as = 'input', error, ...rest }) {
  const Field = as;

  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <Field
        id={id}
        className={`field__control ${error ? 'has-error' : ''}`}
        {...rest}
      />
      {error && <span className="field__error">{error}</span>}
    </div>
  );
}
