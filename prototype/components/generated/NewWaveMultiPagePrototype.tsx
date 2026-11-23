import { useEffect, useState } from "react";
import "./NewWaveMultiPagePrototype.css";
type Page = "Home" | "Shop" | "Events" | "Sound/Music" | "Artists" | "About" | "New Wave";
const pages: Page[] = ["Home", "Shop", "Events", "Sound/Music", "Artists", "About", "New Wave"];
const pagePaths: Record<Page, string> = { Home: "/", Shop: "/shop", Events: "/events", "Sound/Music": "/sound", Artists: "/artists", About: "/about", "New Wave": "/new-wave" };
const pageFromPath = (): Page => (Object.entries(pagePaths).find(([, path]) => path === window.location.pathname)?.[0] as Page | undefined) ?? "Home";
const copy: Record<Page, {
  eyebrow: string;
  title: string;
  description: string;
}> = {
  Home: {
    eyebrow: "A LITTLE MORE COLOUR OUTSIDE THE LINES",
    title: "Find your own kind of wonderful.",
    description: "A meeting place for curious minds, good sound, independent style and people who make things happen."
  },
  Shop: {
    eyebrow: "GOOD THINGS, WELL WORN",
    title: "Dress like you mean it.",
    description: "Objects with a point of view. The first collection is finding its way to you."
  },
  Events: {
    eyebrow: "A DATE WITH THE OUTSIDE",
    title: "Make a day of it.",
    description: "From intimate link-ups to all-out get-togethers. The next good excuse to leave the house is on its way."
  },
  "Sound/Music": {
    eyebrow: "SOUND ON, WORLD OFF",
    title: "A soundtrack for elsewhere.",
    description: "A little rhythm for the everyday. Long-play moods, fresh finds and sounds worth passing around."
  },
  Artists: {
    eyebrow: "THE ONES TO KNOW",
    title: "Good work. Interesting people.",
    description: "A growing roll call of artists, image-makers, selectors and independent spirits doing things their own way."
  },
  About: {
    eyebrow: "A NOTE ON THE FEELING",
    title: "More feeling. Less formula.",
    description: "New Wave is a meeting point for creativity, culture and the freedom to follow a feeling. Come curious. Leave inspired."
  },
  "New Wave": {
    eyebrow: "A COLLECTION OF CURIOSITIES",
    title: "A world worth looking into.",
    description: "An ever-growing collection of stories, images, conversations and cultural side quests."
  }
};
const subsections = ["Editorial", "Photography", "Interviews", "Culture"];
export const NewWaveMultiPagePrototype = () => {
  const [page, setPage] = useState<Page>(() => pageFromPath());
  const [subsection, setSubsection] = useState("Editorial");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  useEffect(() => {
    const syncPage = () => {
      const match = Object.entries(pagePaths).find(([, path]) => path === window.location.pathname)?.[0] as Page | undefined;
      if (!match) {
        window.history.replaceState({}, "", "/");
        setPage("Home");
        return;
      }
      setPage(match);
      if (match === "New Wave") setSubsection("Editorial");
    };
    syncPage();
    window.addEventListener("popstate", syncPage);
    return () => window.removeEventListener("popstate", syncPage);
  }, []);
  useEffect(() => {
    document.title = `${page === "Sound/Music" ? "Sound" : page} | New Wave`;
  }, [page]);
  const go = (next: Page) => {
    window.history.pushState({}, "", pagePaths[next]);
    setPage(next);
    setMenuOpen(false);
    if (next === "New Wave") setSubsection("Editorial");
  };
  const current = copy[page];
  return <main className="nw">
    <header className="nw-header">
      <button className="nw-brand" onClick={() => go("Home")} aria-label="New Wave home"><span>NEW</span><i>WAVE</i><b>✳</b></button>
      <span className="nw-tagline">THE INTERNET NEEDS A BEACH DAY</span>
      <nav className={menuOpen ? "nw-nav is-open" : "nw-nav"} aria-label="Main navigation">
        {pages.map(item => <button key={item} className={page === item ? "active" : ""} onClick={() => go(item)}>{item === "Sound/Music" ? "Sound" : item}</button>)}
      </nav>
      <button className="nw-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? "CLOSE −" : "MENU +"}</button>
    </header>
    <section className={"nw-hero nw-hero-" + page.toLowerCase().replace(/[^a-z]+/g, "-")}>
      <div className="nw-sun" aria-hidden="true" /><div className="nw-cloud nw-cloud-one" /><div className="nw-cloud nw-cloud-two" />
      <div className="nw-ocean"><span /><span /><span /><span /></div>
      <div className="nw-hero-copy">
        <p className="nw-eyebrow">✳ {current.eyebrow}</p>
        <h1>{page === "Home" ? <>Catch a<br /><em>different</em> wave.</> : current.title}</h1>
        <p className="nw-description">{current.description}</p>
        {page === "Home" ? <button className="nw-primary" onClick={() => go("New Wave")}>TAKE A LOOK AROUND ↗</button> : <button className="nw-primary" onClick={() => go(page === "Shop" ? "Events" : "Home")}>{page === "Shop" ? "WHAT'S AROUND THE CORNER ↗" : "TAKE ME BACK ↗"}</button>}
      </div>
      <div className="nw-board" aria-hidden="true"><span>NEW WAVE</span><i /></div>
      <div className="nw-hero-note">SLOW DOWN. LOOK AROUND. FIND YOUR WAVE. ✳</div>
      <div className="nw-stamp">SUN<br />SEA<br />SOUND</div>
    </section>
    {page === "Home" && <section className="nw-home-grid">
      <div className="nw-intro"><span>A WORLD WITH ROOM TO ROAM</span><h2>Good things<br />travels.</h2><p>Style for the curious. Sound for the soul. Gatherings for the group chat. A little bit of everything, with feeling.</p></div>
      <button className="nw-feature nw-feature-shop" onClick={() => go("Shop")}><small>01 — OBJECTS & STYLE</small><strong>The Shop ↗</strong><span>Objects for the everyday.</span></button>
      <button className="nw-feature nw-feature-culture" onClick={() => go("New Wave")}><small>02 — STORIES & IDEAS</small><strong>New Wave ↗</strong><span>Stories, pictures and people.</span></button>
      <button className="nw-feature nw-feature-sound" onClick={() => go("Sound/Music")}><small>03 — THE SOUNDTRACK</small><strong>Sound ↗</strong><span>A good thing to have on repeat.</span></button>
      <button className="nw-feature nw-feature-events" onClick={() => go("Events")}><small>04 — OUT IN THE WORLD</small><strong>Events ↗</strong><span>Meet us somewhere good.</span></button>
    </section>}
    {page === "New Wave" && <section className="nw-content">
      <div className="nw-section-heading"><span>THE CULTURE DESK</span><h2>Culture has<br />many moods.</h2></div>
      <div className="nw-tabs" role="tablist">{subsections.map(item => <button role="tab" aria-selected={subsection === item} className={subsection === item ? "selected" : ""} key={item} onClick={() => {
          setSubsection(item);
        }}>{item}</button>)}</div>
      <div className="nw-editorial-panel"><div className="nw-panel-art"><span>NW / 00{subsections.indexOf(subsection) + 1}</span><b>{subsection.toUpperCase()}</b><i>✳</i></div><div><small>THE CULTURE DESK / {subsection.toUpperCase()}</small><h3>{subsection === "Editorial" ? "A thought to take with you." : subsection === "Photography" ? "Look again. Look closer." : subsection === "Interviews" ? "A few words with good minds." : "Notes from out there."}</h3><p>The {subsection.toLowerCase()}  collection is being prepared. Check back for new work, fresh perspectives and things worth sharing.</p></div></div>
    </section>}
    {page === "Shop" && <section className="nw-content"><div className="nw-section-heading"><span>A FRESH DROP, WHEN IT'S READY</span><h2>Dress like you mean it.</h2></div><div className="nw-product-grid">{["New Wave Oversized Tee", "Coastal Club Cap", "After The Tide Tote"].map((name, i) => <button className="nw-product" key={name} onClick={() => setSelectedProduct(name)}><div className={"nw-product-art art-" + i}><span>NEW<br />WAVE</span></div><b>{name}</b><small>{selectedProduct === name ? "Added for this visit" : "First look / Not on sale yet"}</small></button>)}</div></section>}
    {page === "Events" && <section className="nw-content"><div className="nw-section-heading"><span>THE CALENDAR</span><h2>Put a little life on the calendar.</h2></div><div className="nw-empty-state"><span>✳</span><h3>Something good is gathering.</h3><p>We're putting the details together. Dates, places and tickets will land here when they're confirmed.</p></div></section>}
    {page === "Sound/Music" && <section className="nw-content"><div className="nw-section-heading"><span>THE SOUND DEPARTMENT</span><h2>Press play on the feeling.</h2></div><div className="nw-mix"><span>NW RADIO / 001</span><b>A LITTLE<br />OFF THE MAP</b><button type="button" disabled aria-disabled="true">PLAYLIST COMING SOON</button></div></section>}
    {page === "Artists" && <section className="nw-content"><div className="nw-section-heading"><span>THE CREATIVE ROLL CALL</span><h2>Make something. Make waves.</h2></div><div className="nw-empty-state"><span>✳</span><h3>Your kind of different belongs here.</h3><p>We're making space for new voices. Artist profiles and submission details are coming together.</p><button className="nw-outline" type="button" disabled aria-disabled="true">SUBMISSIONS OPENING SOON</button></div></section>}
    {page === "About" && <section className="nw-content nw-about"><div className="nw-section-heading"><span>A FEW WORDS ABOUT US</span><h2>Not a place.<br />A feeling.</h2></div><p>New Wave is a lifestyle and culture space for people who are curious, creative and open to what comes next. A place to find good energy, discover new voices and leave a little room for the unexpected.</p></section>}
    <section className="nw-newsletter"><div><small>POSTCARDS FROM NEW WAVE</small><h2>A little note<br />from our world.</h2></div><form onSubmit={e => e.preventDefault()}><label htmlFor="nw-email">Newsletter signup</label><div><input id="nw-email" type="email" disabled placeholder="Signups opening soon" /><button type="button" disabled>COMING SOON</button></div><small>We'll open signups once newsletter delivery is connected.</small></form></section>
    <footer className="nw-footer"><button className="nw-brand" onClick={() => go("Home")}><span>NEW</span><i>WAVE</i><b>✳</b></button><span>A LITTLE LESS SCROLL. A LITTLE MORE SOUL.</span><span>© NEW WAVE</span></footer>
  </main>;
};