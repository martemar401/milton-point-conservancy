import Image from "next/image";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Milton Point Conservancy home">
          <Image src="/logo.svg" alt="Milton Point Conservancy" width={272} height={64} priority />
        </a>
        <nav aria-label="Main navigation">
          <a href="#places">Our places</a>
          <a href="#story">Our story</a>
          <a href="#visit">Visit</a>
          <a className="nav-give" href="#support">Support us</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">History lives here</p>
          <h1>Preserving the stories that shaped Milton Point.</h1>
          <p className="hero-intro">
            Three remarkable places. Centuries of local history. One shared future in the heart of Rye, New York.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#support">Help restore the Homestead <Arrow /></a>
            <a className="text-link" href="#places">Explore our places <Arrow /></a>
          </div>
        </div>
        <div className="hero-image">
          <Image src="/bird-homestead.jpg" alt="The historic Bird Homestead in Rye, New York" fill priority sizes="(max-width: 900px) 100vw, 55vw" />
          <span className="image-note">The Bird Homestead · Est. 1835</span>
        </div>
      </section>

      <section className="mission" id="story">
        <p className="section-kicker">Our purpose</p>
        <h2>We protect the places where Rye’s history, community, and coastal landscape meet.</h2>
        <p>
          Milton Point Conservancy stewards three City of Rye properties and is building a hands-on learning center for historic preservation, archaeology, natural science, and local stories.
        </p>
      </section>

      <section className="places" id="places">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Three places, one story</p>
            <h2>A living history of Milton Point</h2>
          </div>
          <p>Explore the landmarks and landscapes we preserve for generations to come.</p>
        </div>
        <div className="place-grid">
          <article className="place-card featured">
            <span className="card-number">01</span>
            <div>
              <p className="card-type">Greek Revival homestead · 1835</p>
              <h3>Bird Homestead</h3>
              <p>Home to five generations of the Bird family—scientists, explorers, artists, and beloved community figures.</p>
            </div>
          </article>
          <article className="place-card meeting">
            <span className="card-number">02</span>
            <div>
              <p className="card-type">Schoolhouse & chapel · c. 1835</p>
              <h3>Rye Meeting House</h3>
              <p>A gathering place with many lives: school, chapel, lending library, Quaker meeting house, and community landmark.</p>
            </div>
          </article>
          <article className="place-card voris">
            <span className="card-number">03</span>
            <div>
              <p className="card-type">Historic landscape</p>
              <h3>William Voris Site</h3>
              <p>The former home and inn of a pioneering Black entrepreneur whose remarkable story belongs in Rye’s history.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="campaign" id="support">
        <div className="campaign-copy">
          <p className="section-kicker light">A once-in-a-generation restoration</p>
          <h2>Help us open the doors again.</h2>
          <p>
            A New York State challenge grant brings the Bird Homestead closer to restoration—but every public dollar must be matched. Your gift helps repair the exterior, protect the Meeting House, and prepare these places for learning and community life.
          </p>
          <a className="button button-light" href="mailto:info@miltonpointconservancy.org?subject=Supporting%20Milton%20Point%20Conservancy">Support the restoration <Arrow /></a>
        </div>
        <div className="campaign-stat" aria-label="Restoration grant amount">
          <span>$172K</span>
          <p>challenge grant awarded for historic restoration</p>
          <div className="rule" />
          <small>Your support unlocks the match.</small>
        </div>
      </section>

      <section className="visit" id="visit">
        <div>
          <p className="section-kicker">Come find us</p>
          <h2>Two landmarks.<br />One walk through history.</h2>
        </div>
        <div className="visit-details">
          <p><strong>Bird Homestead</strong><br />600 Milton Road<br />Rye, New York 10580</p>
          <p><strong>Rye Meeting House</strong><br />624 Milton Road<br />Rye, New York 10580</p>
          <a className="text-link" href="https://maps.google.com/?q=600+Milton+Road+Rye+NY+10580" target="_blank" rel="noreferrer">Get directions <Arrow /></a>
        </div>
      </section>

      <footer>
        <Image src="/logo-reverse.svg" alt="Milton Point Conservancy" width={285} height={68} />
        <div className="footer-copy">
          <p>Protecting Rye’s history, one place at a time.</p>
          <p className="fine">Milton Point Conservancy is an independent nonprofit stewarding City of Rye historic properties.</p>
        </div>
        <a href="mailto:info@miltonpointconservancy.org">Get in touch <Arrow /></a>
      </footer>
    </main>
  );
}
