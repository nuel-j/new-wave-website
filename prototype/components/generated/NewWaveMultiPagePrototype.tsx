import { useEffect, useState } from "react";
import "./NewWaveMultiPagePrototype.css";
type Page = "Home" | "Shop" | "Events" | "Sound/Music" | "Artists" | "About" | "New Wave";
type Expression = "idle" | "talking" | "thinking" | "pointing";
const pages: Page[] = ["Home", "Shop", "Events", "Sound/Music", "Artists", "About", "New Wave"];
const expressions: Record<Expression, string> = {
  idle: "https://yourimageshare.com/ib/OC7y4tBxtN.png",
  thinking: "https://yourimageshare.com/ib/hpwpo1bH2a.png",
  talking: "https://yourimageshare.com/ib/wejYmdziST.png",
  pointing: "https://yourimageshare.com/ib/QszUb92jtd.png"
};
const tips: Record<Page, string> = {
  Home: "Hey! Welcome to New Wave. A little more ocean, a little less ordinary. Want me to show you around?",
  Shop: "Good taste. Take a look around the shop. Find something that feels like you.",
  Events: "The good nights start here. Explore what's coming up and save a date.",
  "Sound/Music": "Set the mood. Find the sounds and mixes moving through New Wave.",
  Artists: "Meet the people making things happen. This is where the creative community lives.",
  About: "New Wave is a coastal state of mind: relaxed, curious, creative and open to everybody.",
  "New Wave": "You're in the New Wave section. Explore Editorial, Photography, Interviews and Culture."
};
const copy: Record<Page, {
  eyebrow: string;
  title: string;
  description: string;
}> = {
  Home: {
    eyebrow: "A LIVING COASTAL CLUB",
    title: "Catch a different wave.",
    description: "A place for good energy, new ideas, sound, style and the people who bring it all to life."
  },
  Shop: {
    eyebrow: "THE NEW WAVE STORE",
    title: "Wear the feeling.",
    description: "Pieces for wherever the day takes you. The shop is being prepared for its first drop."
  },
  Events: {
    eyebrow: "MEET US OUT THERE",
    title: "Good people. Good times.",
    description: "A home for gatherings, sessions and nights worth remembering. Upcoming dates will appear here."
  },
  "Sound/Music": {
    eyebrow: "PRESS PLAY",
    title: "Find your frequency.",
    description: "Sounds for slow mornings, long rides and nights that take their time."
  },
  Artists: {
    eyebrow: "PEOPLE MAKE THE WAVE",
    title: "Meet the makers.",
    description: "Artists, selectors, photographers and independent minds from across the creative world."
  },
  About: {
    eyebrow: "A STATE OF MIND",
    title: "Leave room to feel good.",
    description: "New Wave is a lifestyle and culture space built around curiosity, creativity and a little coastal freedom."
  },
  "New Wave": {
    eyebrow: "THE CULTURE EDIT",
    title: "Stories in motion.",
    description: "A closer look at the ideas, images, voices and culture shaping the New Wave universe."
  }
};
const subsections = ["Editorial", "Photography", "Interviews", "Culture"];
export const NewWaveMultiPagePrototype = () => {
  const [page, setPage] = useState<Page>("Home");
  const [subsection, setSubsection] = useState("Editorial");
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [expression, setExpression] = useState<Expression>("idle");
  const [message, setMessage] = useState(tips.Home);
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  useEffect(() => {
    const timer = window.setTimeout(() => setExpression("idle"), 2600);
    return () => window.clearTimeout(timer);
  }, [expression]);
  const go = (next: Page) => {
    setPage(next);
    setMenuOpen(false);
    if (next === "New Wave") setSubsection("Editorial");
  };
  const ask = (kind: "tour" | "shop" | "events" | "music" | "artists") => {
    const map = {
      tour: "Home",
      shop: "Shop",
      events: "Events",
      music: "Sound/Music",
      artists: "Artists"
    } as const;
    const target = map[kind];
    go(target);
    setAssistantOpen(true);
    setMessage(target === "Home" ? "Let's take a look around. Pick a section from the menu and I'll come with you." : tips[target]);
    setExpression("pointing");
  };
  const current = copy[page];
  return <main className="nw">
    <header className="nw-header">
      <button className="nw-brand" onClick={() => go("Home")} aria-label="New Wave home"><span>NEW</span><i>WAVE</i><b>✳</b></button>
      <span className="nw-tagline">THE INTERNET NEEDS A BEACH DAY</span>
      <nav id="nw-main-nav" className={menuOpen ? "nw-nav is-open" : "nw-nav"} aria-label="Main navigation">
        {pages.map(item => <button key={item} className={page === item ? "active" : ""} onClick={() => go(item)}>{item === "Sound/Music" ? "Sound" : item}</button>)}
      </nav>
      <button className="nw-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="nw-main-nav">{menuOpen ? "CLOSE −" : "MENU +"}</button>
    </header>
    <section className={"nw-hero nw-hero-" + page.toLowerCase().replace(/[^a-z]+/g, "-")}>
      <div className="nw-sun" aria-hidden="true" /><div className="nw-cloud nw-cloud-one" /><div className="nw-cloud nw-cloud-two" />
      <div className="nw-ocean"><span /><span /><span /><span /></div>
      <div className="nw-hero-copy">
        <p className="nw-eyebrow">✳ {current.eyebrow}</p>
        <h1>{page === "Home" ? <>Catch a<br /><em>different</em> wave.</> : current.title}</h1>
        <p className="nw-description">{current.description}</p>
        {page === "Home" ? <button className="nw-primary" onClick={() => go("New Wave")}>COME ON IN ↗</button> : <button className="nw-primary" onClick={() => go(page === "Shop" ? "Events" : "Home")}>{page === "Shop" ? "SEE WHAT'S NEXT ↗" : "BACK TO THE BEACH ↗"}</button>}
      </div>
      <div className="nw-board" aria-hidden="true"><span>NEW WAVE</span><i /></div>
      <div className="nw-hero-note">SLOW DOWN. LOOK AROUND. FIND YOUR WAVE. ✳</div>
      <div className="nw-stamp">SUN<br />SEA<br />SOUND</div>
    </section>
    {page === "Home" && <section className="nw-home-grid">
      <div className="nw-intro"><span>01 / THE NEW WAVE UNIVERSE</span><h2>Good energy<br />travels.</h2><p>Explore a growing world of style, sound, events and independent culture. Stay a while.</p></div>
      <button className="nw-feature nw-feature-shop" onClick={() => go("Shop")}><small>01 — OBJECTS & STYLE</small><strong>The Shop ↗</strong><span>Pieces to take with you.</span></button>
      <button className="nw-feature nw-feature-culture" onClick={() => go("New Wave")}><small>02 — STORIES & IDEAS</small><strong>New Wave ↗</strong><span>Editorial, images, voices and culture.</span></button>
      <button className="nw-feature nw-feature-sound" onClick={() => go("Sound/Music")}><small>03 — THE SOUNDTRACK</small><strong>Sound ↗</strong><span>Press play. Stay a little longer.</span></button>
      <button className="nw-feature nw-feature-events" onClick={() => go("Events")}><small>04 — OUT IN THE WORLD</small><strong>Events ↗</strong><span>Good people, in good places.</span></button>
    </section>}
    {page === "New Wave" && <section className="nw-content">
      <div className="nw-section-heading"><span>THE NEW WAVE EDIT</span><h2>Culture moves<br />in every direction.</h2></div>
      <div className="nw-tabs" role="tablist">{subsections.map(item => <button role="tab" aria-selected={subsection === item} className={subsection === item ? "selected" : ""} key={item} onClick={() => {
          setSubsection(item);
          setExpression("thinking");
          setMessage("Let's explore " + item.toLowerCase() + ". New stories will live here.");
        }}>{item}</button>)}</div>
      <div className="nw-editorial-panel"><div className="nw-panel-art"><span>NW / 00{subsections.indexOf(subsection) + 1}</span><b>{subsection.toUpperCase()}</b><i>✳</i></div><div><small>THE NEW WAVE EDIT / {subsection.toUpperCase()}</small><h3>{subsection === "Editorial" ? "Ideas worth staying for." : subsection === "Photography" ? "A different point of view." : subsection === "Interviews" ? "Meet the minds behind the motion." : "The world around the wave."}</h3><p>This space is ready for approved New Wave {subsection.toLowerCase()} stories and features.</p></div></div>
    </section>}
    {page === "Shop" && <section className="nw-content"><div className="nw-section-heading"><span>THE FIRST DROP IS ON ITS WAY</span><h2>Wear the feeling.</h2></div><div className="nw-product-grid">{["New Wave Oversized Tee", "Coastal Club Cap", "After The Tide Tote"].map((name, i) => <button className="nw-product" key={name} onClick={() => setSelectedProduct(name)}><div className={"nw-product-art art-" + i}><span>NEW<br />WAVE</span></div><b>{name}</b><small>{selectedProduct === name ? "Saved to your shortlist" : "Preview / Coming soon"}</small></button>)}</div></section>}
    {page === "Events" && <section className="nw-content"><div className="nw-section-heading"><span>THE CALENDAR</span><h2>See you out there.</h2></div><div className="nw-empty-state"><span>✳</span><h3>Good things are taking shape.</h3><p>Upcoming New Wave gatherings and ticket information will appear here once confirmed.</p></div></section>}
    {page === "Sound/Music" && <section className="nw-content"><div className="nw-section-heading"><span>THE NEW WAVE SOUND</span><h2>Let the day play.</h2></div><div className="nw-mix"><span>NW RADIO / 001</span><b>THE COASTLINE<br />MIXTAPE</b><button onClick={() => setMessage("The music player will connect to the approved New Wave playlist when the music source is supplied.")}>▶ PREVIEW MIX</button></div></section>}
    {page === "Artists" && <section className="nw-content"><div className="nw-section-heading"><span>THE CREATIVE COMMUNITY</span><h2>Make some noise.</h2></div><div className="nw-empty-state"><span>✳</span><h3>There's room for your voice.</h3><p>Artist profiles and submission opportunities will be published here.</p><button className="nw-outline" onClick={() => setMessage("Artist submissions will open here when the submission form and inbox are connected.")}>HOW TO SUBMIT ↗</button></div></section>}
    {page === "About" && <section className="nw-content nw-about"><div className="nw-section-heading"><span>WHAT WE'RE ABOUT</span><h2>A coastal state<br />of mind.</h2></div><p>New Wave is a lifestyle and culture space for people who are curious, creative and open to what comes next. A place to find good energy, discover new voices and leave a little room for the unexpected.</p></section>}
    <section className="nw-newsletter"><div><small>LET'S KEEP IN TOUCH</small><h2>A little wave<br />in your inbox.</h2></div><form onSubmit={e => {
        e.preventDefault();
        if (email.includes("@")) setJoined(true);
      }}><label htmlFor="nw-email">Your email address</label><div><input id="nw-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" /><button>{joined ? "YOU'RE ON THE LIST ✓" : "SIGN ME UP ↗"}</button></div><small>{joined ? "Thanks — newsletter delivery will activate when the mailing service is connected." : "No noise. Just the good stuff."}</small></form></section>
    <footer className="nw-footer"><button className="nw-brand" onClick={() => go("Home")}><span>NEW</span><i>WAVE</i><b>✳</b></button><span>THE INTERNET NEEDS A BEACH DAY.</span><span>© NEW WAVE</span></footer>
    <aside className={assistantOpen ? "nw-assistant is-open" : "nw-assistant"} aria-label="New Wave surfer guide">
      {assistantOpen && <section className="nw-assistant-bubble" aria-live="polite">
        <div className="nw-assistant-top"><span>YOUR NEW WAVE GUIDE</span><button aria-label="Close assistant message" onClick={() => setAssistantOpen(false)}>×</button></div>
        <p>{message}</p>
        <div className="nw-assistant-actions"><button onClick={() => ask("tour")}>Explore</button><button onClick={() => ask("shop")}>Shop</button><button onClick={() => ask("events")}>Events</button></div>
        <span className="nw-assistant-hint">Tap me whenever you need a hand</span>
      </section>}
      <button className="nw-assistant-character" aria-label="Talk to your New Wave guide" onClick={() => {
        setAssistantOpen(!assistantOpen);
        setExpression("talking");
      }} onMouseEnter={() => setExpression("pointing")} onMouseLeave={() => setExpression("idle")}>
        <img src={expressions[expression]} alt="New Wave surfer girl guide" onError={e => {
          (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
        }} />
        <span className="nw-character-glint">✳</span><span className="nw-assistant-status">NEED A HAND?</span>
      </button>
    </aside>
  </main>;
};