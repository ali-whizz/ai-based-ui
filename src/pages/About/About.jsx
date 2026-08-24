import { team, milestones } from '../../data/team';
import './About.css';

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">About us</span>
          <h2>A small team, deliberately.</h2>
          <p>
            We stay small so the people you meet are the people doing the work.
            No handoffs, no account layers — just a tight team shipping steadily.
          </p>
        </div>

        <div className="about__split">
          <div className="about__text">
            <h3>How we work</h3>
            <p>
              Every project starts with a short discovery week: we map the
              problem, agree on scope and set a realistic timeline. From there we
              work in weekly cycles with a live preview link you can check any
              time.
            </p>
            <p>
              We write our own CSS, keep dependencies light and hand over code
              your team can actually maintain.
            </p>
          </div>

          <ul className="timeline">
            {milestones.map((item) => (
              <li key={item.year} className="timeline__item">
                <span className="timeline__year">{item.year}</span>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="about__subhead">The people</h3>
        <div className="grid">
          {team.map((member) => (
            <article key={member.id} className="member">
              <span className="member__avatar">{member.initials}</span>
              <div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
