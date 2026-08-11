import Image from "next/image";
import Link from "next/link";
import { MapSection } from "@/components/map/MapSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">History lives here</p>
          <h1>Preserving the stories that shaped Milton Point.</h1>
          <p className="hero-intro">
            Three remarkable places. Centuries of local history. One shared future in the heart of Rye, New York.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary hero-donate" href="/donate">Donate now</Link>
            <a className="text-link" href="#places">Explore our places <Arrow /></a>
          </div>
        </div>
        <div className="hero-image">
          <Image src="/rye-meeting-house-06.webp" alt="The historic Rye Meeting House and its bell cupola" fill priority sizes="(max-width: 900px) 100vw, 55vw" />
          <span className="image-note">Rye Meeting House · Photograph courtesy of ABA</span>
        </div>
      </section>

      <section className="mission" id="story">
        <p className="section-kicker">Our purpose</p>
        <h2>We protect the places where Rye’s history, community, and coastal landscape meet.</h2>
        <p>
          Milton Point Conservancy stewards three City of Rye properties and is building a hands-on learning center for historic preservation, archaeology, natural science, and local stories.
        </p>
      </section>

      <section className="site-plan" aria-labelledby="site-plan-title">
        <div className="site-plan-heading">
          <div>
            <p className="section-kicker">The place we preserve</p>
            <h2 id="site-plan-title">A historic landscape on Blind Brook Estuary</h2>
          </div>
          <p>
            The Bird Homestead, Rye Meeting House, and William Voris Site form one connected cultural landscape at the edge of Milton Harbor.
          </p>
        </div>
        <figure className="site-plan-figure">
          <div className="site-plan-image">
            <Image
              src="/milton-point-site-plan.png"
              alt="Architectural site plan showing the Bird Homestead, Rye Meeting House, William Voris Site, Milton Road, and Milton Harbor"
              fill
              sizes="(max-width: 900px) 100vw, 90vw"
            />
          </div>
          <figcaption>
            <span>Site plan</span>
            <span>Milton Road · Rye, New York</span>
            <span>Drawing courtesy of Abruzzo Bodziak Architects</span>
          </figcaption>
        </figure>
      </section>

      <section className="landscape" aria-labelledby="landscape-title">
        <div className="landscape-image">
          <Image src="/rye-salt-marsh-autumn.jpg" alt="Golden salt marsh grasses beside the water in Rye, New York" fill sizes="(max-width: 900px) 100vw, 62vw" />
        </div>
        <div className="landscape-copy">
          <p className="section-kicker light">A coastal inheritance</p>
          <h2 id="landscape-title">History belongs to the landscape, too.</h2>
          <p>Milton Point’s stories are inseparable from Rye’s marshes, waterways, and working shoreline. Protecting this place means keeping that relationship visible.</p>
          <small>Rye salt marsh photograph by 10sefirot · <a href="https://commons.wikimedia.org/wiki/File:Salt_marsh_in_autumn.jpg" target="_blank" rel="noreferrer">CC BY-SA 4.0</a> · Cropped for display</small>
        </div>
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
            <div className="place-card-image"><Image src="/bird-homestead.jpg" alt="The historic Bird Homestead in Rye, New York" fill sizes="(max-width: 560px) 100vw, (max-width: 840px) 50vw, 33vw" /></div>
            <div className="place-card-copy">
              <span className="card-number">01</span>
              <p className="card-type">Greek Revival homestead · 1835</p>
              <h3>Bird Homestead</h3>
              <p>Home to five generations of the Bird family—scientists, explorers, artists, and beloved community figures.</p>
            </div>
          </article>
          <article className="place-card meeting">
            <div className="place-card-image"><Image src="/rye-meeting-house-06.webp" alt="The Rye Meeting House and its historic bell cupola" fill sizes="(max-width: 560px) 100vw, (max-width: 840px) 50vw, 33vw" /></div>
            <div className="place-card-copy">
              <span className="card-number">02</span>
              <p className="card-type">Schoolhouse & chapel · c. 1835</p>
              <h3>Rye Meeting House</h3>
              <p>A gathering place with many lives: school, chapel, lending library, Quaker meeting house, and community landmark.</p>
            </div>
          </article>
          <article className="place-card voris">
            <div className="place-card-image site-plan-card"><Image src="/milton-point-site-plan.png" alt="Architectural site plan locating the William Voris archaeological site" fill sizes="(max-width: 560px) 100vw, (max-width: 840px) 100vw, 33vw" /></div>
            <div className="place-card-copy">
              <span className="card-number">03</span>
              <p className="card-type">Historic landscape</p>
              <h3>William Voris Site</h3>
              <p>The former home and inn of a pioneering Black entrepreneur whose remarkable story belongs in Rye’s history.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="visit-map-section" id="visit" aria-labelledby="visit-title">
        <div className="visit-map-heading">
          <div>
            <p className="section-kicker">Come find us</p>
            <h2 id="visit-title">Three stories in one historic landscape.</h2>
          </div>
          <p>Explore the Bird Homestead, Rye Meeting House, and William Voris Site along Milton Road and Blind Brook Estuary.</p>
        </div>
        <MapSection />
      </section>

      <section className="campaign" id="support">
        <div className="campaign-copy">
          <p className="section-kicker light">A once-in-a-generation restoration</p>
          <h2>Help us open the doors again.</h2>
          <p>
            A New York State challenge grant brings the Bird Homestead closer to restoration—but every public dollar must be matched. Your gift helps repair the exterior, protect the Meeting House, and prepare these places for learning and community life.
          </p>
          <Link className="button button-light" href="/donate">Support the restoration</Link>
        </div>
        <div className="campaign-stat" aria-label="Restoration grant amount">
          <span>$172K</span>
          <p>challenge grant awarded for historic restoration</p>
          <div className="rule" />
          <small>Your support unlocks the match.</small>
        </div>
      </section>

      </main>
      <SiteFooter />
    </>
  );
}
