import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useContactForm } from '../../hooks/useContactForm';
import './Contact.css';

const details = [
  { label: 'Email', value: 'hello@nimbus.studio' },
  { label: 'Phone', value: '+1 (555) 018‑2244' },
  { label: 'Studio', value: '24 Aldgate Lane, London' },
];

export default function Contact() {
  const { values, errors, submitted, handleChange, handleSubmit, reset } =
    useContactForm();

  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Contact</span>
          <h2>Tell us about your project.</h2>
          <p>
            Fill in the form and we'll get back to you within one working day.
          </p>
        </div>

        <div className="contact">
          <aside className="contact__details">
            {details.map((item) => (
              <div key={item.label} className="contact__detail">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
            <p className="contact__note">
              Prefer a call? Mention it in your message and we'll send over a few
              time slots.
            </p>
          </aside>

          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <h3>Thanks — message received 🎉</h3>
                <p>
                  This demo doesn't send anything anywhere, but in a real build
                  this is where the confirmation would appear.
                </p>
                <Button variant="ghost" onClick={reset}>
                  Send another
                </Button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <Input
                  id="name"
                  name="name"
                  label="Your name"
                  placeholder="Jane Doe"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="jane@company.com"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <Input
                  id="message"
                  name="message"
                  as="textarea"
                  label="Message"
                  placeholder="A few lines about what you need…"
                  value={values.message}
                  onChange={handleChange}
                  error={errors.message}
                />
                <Button type="submit">Send message</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
