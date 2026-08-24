import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { services } from '../../data/services';
import { PATHS } from '../../routes/paths';
import './Home.css';

const stats = [
  { value: '40+', label: 'Products shipped' },
  { value: '6 yrs', label: 'In business' },
  { value: '98%', label: 'Client retention' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <span className="eyebrow">Design & Frontend Studio</span>
          <h1>
            We build simple interfaces that <em>feel</em> effortless.
          </h1>
          <p className="hero__lead">
            Nimbus is a small studio helping product teams design, build and ship
            web experiences people actually enjoy using.
          </p>
          <div className="hero__actions">
            <Button to={PATHS.contact}>Start a project</Button>
            <Button to={PATHS.services} variant="ghost">
              See what we do
            </Button>
          </div>

          <ul className="hero__stats">
            {stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2>What we're good at</h2>
            <p>
              A focused set of services — no bloat, just the work that moves a
              product forward.
            </p>
          </div>

          <div className="grid">
            {services.slice(0, 3).map((service) => (
              <Card key={service.id} icon={service.icon} title={service.title}>
                {service.description}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <div>
              <h2>Have something in mind?</h2>
              <p>Tell us about it — we usually reply within a day.</p>
            </div>
            <Button to={PATHS.contact}>Get in touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}
