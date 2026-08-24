import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { services } from '../../data/services';
import { PATHS } from '../../routes/paths';
import './Services.css';

const steps = [
  { n: '01', title: 'Discovery', text: 'A week to understand the problem and agree on scope.' },
  { n: '02', title: 'Design', text: 'Wireframes first, then high-fidelity screens you can react to.' },
  { n: '03', title: 'Build', text: 'Weekly cycles with a live preview link throughout.' },
  { n: '04', title: 'Launch', text: 'Handover, documentation and support after go-live.' },
];

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Services</span>
          <h2>Everything you need to ship a product.</h2>
          <p>
            Pick one piece or the whole thing — most clients start with a single
            project and stay on for support.
          </p>
        </div>

        <div className="grid">
          {services.map((service) => (
            <Card key={service.id} icon={service.icon} title={service.title}>
              {service.description}
            </Card>
          ))}
        </div>

        <h3 className="services__subhead">Our process</h3>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.n} className="step">
              <span className="step__n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="services__footer">
          <p>Not sure which one fits? We'll help you figure it out.</p>
          <Button to={PATHS.contact}>Talk to us</Button>
        </div>
      </div>
    </section>
  );
}
