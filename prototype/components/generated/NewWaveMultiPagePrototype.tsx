import { useState } from "react";
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
  Home: "Hey! Welcome to New Wave. A little more ocean, a little less ordinary.",
  Shop: "Take your time. Find something that feels like you.",
  Events: "Good people, good places. This is where we'll meet.",
  "Sound/Music": "Set the mood. Find your next favourite sound.",
  Artists: "Meet the people and ideas moving culture forward.",
  About: "A coastal state of mind: relaxed, curious and open to everybody.",
  "New Wave": "You're in the New Wave edit. Explore Editorial, Photography, Interviews and Culture."
};
const copy: Record<Page, { eyebrow: string; title: string; description: string }> = {
  Home: { eyebrow: "A LIVING COASTAL CLUB", title: "Catch a different wave.", description: "A place for good energy, new ideas, sound, style and the people who bring it all to life." },
  Shop: { eyebrow: "THE NEW WAVE STORE", title: "Wear the feeling.", description: "Easy pieces, thoughtful details and everyday favourites. Get a first look at the world of New Wave." },
  Events: { eyebrow: "MEET US OUT THERE", title: "Good people. Good times.", description: "Gatherings, sessions and nights worth remembering. Find your people and make a little room for a new story." },
  "Sound/Music": { eyebrow: "PRESS PLAY", title: "Find your frequency.", description: "Sounds for slow mornings, long rides and nights that take their time. A soundtrack for wherever the day goes." },
  Artists: { eyebrow: "PEOPLE MAKE THE WAVE", title: "Meet the makers.", description: "Artists, selectors, photographers and independent minds. The people are the culture." },
  About: { eyebrow: "A STATE OF MIND", title: "Leave room to feel good.", description: "New Wave is a lifestyle and culture space built around curiosity, creativity and a little coastal freedom." },
  "New Wave": { eyebrow: "THE CULTURE EDIT", title: "Stories in motion.", description: "A closer look at the ideas, images, voices and culture shaping the New Wave universe." }
};
const subsections = ["Editorial", "Photography", "Interviews", "Culture"];
const products = [
  { name: "The Everyday Tee", type: "APPAREL", detail: "An easy, oversized staple for long days and late plans.", color: "sand" },
  { name: "Coastal Club Cap", type: "ACCESSORIES", detail: "A little shade. A lot of good energy.", color: "sea" },
  { name: "After The Tide Tote", type: "EVERYDAY CARRY", detail: "Room for the things you take with you.", color: "sun" }
];
const listening = [
  { number: "001", title: "Slow mornings", mood: "Soft rhythms for easing into the day.", length: "THE EASY START" },
  { number: "002", title: "Coastline drive", mood: "Warm sounds for the long way round.", length: "ON THE MOVE" },
  { number: "003", title: "After hours", mood: "A little more feeling after the sun goes down.", length: "WHEN IT GETS LATE" }
];
export const NewWaveMultiPagePrototype = () => {
  const [page, setPage] = useState<Page>("Home");
  const [subsection, setSubsection] = useState("Editorial");
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [expression, setExpression] = useState<Expression>("idle");
  const [message, setMessage] = useState(tips.Home);
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [newsletterPreview, setNewsletterPreview] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedMix, setSelectedMix] = useState("");
  const [artistEmail, setArtistEmail] = useState("");
  const [artistPrompt, setArtistPrompt] = useState(false);

  const go = (next: Page) => {
    setPage(next);
    setMenuOpen(false);
    if (next === "New Wave") setSubsection("Editorial");
    setExpression("idle");
  };
  const ask = (kind: "tour" | "shop" | "events" | "music" | "artists") => {
    const map = { tour: "Home", shop: "Shop", events: "Events", music: "Sound/Music", artists: "Artists" } as const;
    const target = map[kind];
    go(target);
    setAssistantOpen(true);
    setMessage(tips[target]);
    setExpression("thinking");
  };
  const current = copy[page];

  return <main className="nw">
    <header className="nw-header">
      <button className="nw-brand" onClick={() => go("Home")} aria-label="New Wave home"><span>NEW</span><i>WAVE</i></button>
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
        <p className="nw-eyebrow">{current.eyebrow}</p>
        <h1>{page === "Home" ? <>Catch a<br /><em>different</em> wave.</> : current.title}</h1>
        <p className="nw-description">{current.description}</p>
        <button className="nw-primary" onClick={() => go(page === "Home" ? "New Wave" : "Home")}>{page === "Home" ? "COME ON IN ↗" : "BACK TO THE BEACH ↗"}</button>
      </div>
      <div className="nw-board" aria-hidden="true"><span>NEW WAVE</span><i /></div>
      <div className="nw-hero-note">SLOW DOWN. LOOK AROUND. FIND YOUR WAVE.</div>
      <div className="nw-stamp">SUN<br />SEA<br />SOUND</div>
    </section>

    {page === "Home" && <section className="nw-home-grid">
      <div className="nw-intro"><span>01 / THE NEW WAVE UNIVERSE</span><h2>Good energy<br />travels.</h2><p>Explore a growing world of style, sound, events and independent culture. Stay a while.</p><button className="nw-text-link" onClick={() => go("About")}>GET TO KNOW US ↗</button></div>
      <button className="nw-feature nw-feature-shop" onClick={() => go("Shop")}><small>01 — OBJECTS & STYLE</small><strong>The Shop ↗</strong><span>Pieces to take with you.</span></button>
      <button className="nw-feature nw-feature-culture" onClick={() => go("New Wave")}><small>02 — STORIES & IDEAS</small><strong>New Wave ↗</strong><span>Editorial, images, voices and culture.</span></button>
      <button className="nw-feature nw-feature-sound" onClick={() => go("Sound/Music")}><small>03 — THE SOUNDTRACK</small><strong>Sound ↗</strong><span>Press play. Stay a little longer.</span></button>
      <button className="nw-feature nw-feature-events" onClick={() => go("Events")}><small>04 — OUT IN THE WORLD</small><strong>Events ↗</strong><span>Good people, in good places.</span></button>
    </section>}

    {page === "Shop" && <section className="nw-content">
      <div className="nw-section-heading"><span>OBJECTS FOR THE EVERYDAY</span><h2>Good things to live in.</h2><p>Considered staples with a little New Wave spirit. The first collection is taking shape.</p></div>
      <div className="nw-product-grid">{products.map((product, i) => <button className="nw-product" key={product.name} onClick={() => { setSelectedProduct(product.name); setExpression("pointing"); }}>
        <div className={"nw-product-art art-" + i}><span>NEW<br />WAVE</span><i>{i === 0 ? "01" : i === 1 ? "02" : "03"}</i></div>
        <small>{product.type}</small><b>{product.name}</b><span>{product.detail}</span><em>{selectedProduct === product.name ? "SELECTED FOR A CLOSER LOOK ✓" : "EXPLORE PIECE ↗"}</em>
      </button>)}</div>
      <div className="nw-shop-note"><span>THE FIRST DROP</span><p>We're getting the details right. Product availability and checkout will appear here when the collection is ready.</p></div>
    </section>}

    {page === "Events" && <section className="nw-content">
      <div className="nw-section-heading"><span>THE NEW WAVE CALENDAR</span><h2>Make a day of it.</h2><p>From laid-back daytime link-ups to music-led nights, this is where the community comes together.</p></div>
      <div className="nw-event-grid">
        <article className="nw-event-card event-sun"><span>01 / DAYTIME</span><b>Out in the open.</b><p>Easy afternoons, good conversations and room to meet someone new.</p><small>UPCOMING GATHERING · DETAILS TO COME</small></article>
        <article className="nw-event-card event-coral"><span>02 / MUSIC</span><b>Sound after sunset.</b><p>Selectors, new sounds and the kind of night that finds its own rhythm.</p><small>UPCOMING SESSION · DETAILS TO COME</small></article>
        <article className="nw-event-card event-blue"><span>03 / COMMUNITY</span><b>Make something together.</b><p>Creative meet-ups, shared ideas and independent culture in motion.</p><small>COMMUNITY SERIES · DETAILS TO COME</small></article>
      </div>
      <div className="nw-event-note"><strong>Stay close.</strong><span>Confirmed dates, venues and ticket links will be published here as soon as they're announced.</span><button onClick={() => document.getElementById("nw-email")?.focus()}>GET UPDATES ↗</button></div>
    </section>}

    {page === "Sound/Music" && <section className="nw-content">
      <div className="nw-section-heading"><span>THE NEW WAVE SOUND</span><h2>A soundtrack for the in-between.</h2><p>Three moods to move with. Choose a cover to see what belongs in the mix.</p></div>
      <div className="nw-mix-grid">{listening.map((mix, i) => <button className={"nw-mix mix-" + i} key={mix.number} onClick={() => { setSelectedMix(mix.number); setExpression("thinking"); }}>
        <span>NW RADIO / {mix.number}</span><b>{mix.title}</b><i>{mix.length}</i><small>{mix.mood}</small><em>{selectedMix === mix.number ? "SELECTED ✓" : "OPEN MIX ↗"}</em>
      </button>)}</div>
      <div className="nw-audio-note"><span>HEADPHONES OPTIONAL.</span><p>We're curating the first New Wave playlists now. Audio playback will be switched on when the official music source is connected.</p></div>
    </section>}

    {page === "Artists" && <section className="nw-content">
      <div className="nw-section-heading"><span>PEOPLE MAKE THE WAVE</span><h2>Creative energy, shared.</h2><p>A space for the artists, selectors, photographers and independent thinkers shaping what comes next.</p></div>
      <div className="nw-artist-grid">
        <article className="nw-artist-card"><div className="artist-art artist-art-one">MAKE<br />THINGS.</div><span>01 / VISUAL CULTURE</span><b>Image makers</b><p>Photographers, illustrators and artists with a point of view.</p></article>
        <article className="nw-artist-card"><div className="artist-art artist-art-two">FIND<br />YOUR SOUND.</div><span>02 / SOUND</span><b>Selectors & musicians</b><p>People finding fresh ways to move a room and a feeling.</p></article>
        <article className="nw-artist-card"><div className="artist-art artist-art-three">MOVE<br />CULTURE.</div><span>03 / IDEAS</span><b>Independent voices</b><p>Writers, makers and curious minds bringing ideas to life.</p></article>
      </div>
      <div className="nw-submit-panel"><div><span>YOUR TURN</span><h3>Got something good brewing?</h3><p>Tell us a little about your work. Artist submissions will open when the New Wave team inbox is connected.</p></div><button className="nw-outline" onClick={() => setArtistPrompt(!artistPrompt)}>{artistPrompt ? "CLOSE NOTE −" : "I'M AN ARTIST ↗"}</button>{artistPrompt && <p className="nw-inline-note">For now, keep your portfolio and a short introduction ready. The official submission link will be added here.</p>}</div>
    </section>}

    {page === "About" && <section className="nw-content nw-about-page">
      <div className="nw-about-lead"><div className="nw-section-heading"><span>WHAT WE'RE ABOUT</span><h2>A coastal state<br />of mind.</h2></div><p>New Wave is a lifestyle and culture space for people who are curious, creative and open to what comes next. A place to find good energy, discover new voices and leave a little room for the unexpected.</p></div>
      <div className="nw-values-grid">
        <article><span>01</span><b>Stay curious.</b><p>Follow the things that make you look twice, listen closer and ask better questions.</p></article>
        <article><span>02</span><b>Make room.</b><p>Good culture grows when different people, ideas and perspectives meet.</p></article>
        <article><span>03</span><b>Feel the moment.</b><p>Take your time. Find the good in the everyday. Bring good energy with you.</p></article>
      </div>
      <div className="nw-about-signoff"><span>NEW WAVE IS A FEELING.</span><b>Come as you are. Leave with a little more.</b></div>
    </section>}

    {page === "New Wave" && <section className="nw-content">
      <div className="nw-section-heading"><span>THE NEW WAVE EDIT</span><h2>Culture moves in every direction.</h2><p>Ideas, images, conversations and the things shaping the world around us.</p></div>
      <div className="nw-tabs" role="tablist" aria-label="New Wave editorial categories">{subsections.map(item => <button role="tab" aria-selected={subsection === item} className={subsection === item ? "selected" : ""} key={item} onClick={() => { setSubsection(item); setExpression("idle"); }}>{item}</button>)}</div>
      <div className="nw-editorial-panel"><div className={"nw-panel-art panel-" + subsections.indexOf(subsection)}><span>NW / 00{subsections.indexOf(subsection) + 1}</span><b>{subsection.toUpperCase()}</b></div><div><small>THE NEW WAVE EDIT / {subsection.toUpperCase()}</small><h3>{subsection === "Editorial" ? "Ideas worth staying for." : subsection === "Photography" ? "A different point of view." : subsection === "Interviews" ? "Meet the minds behind the motion." : "The world around the wave."}</h3><p>{subsection === "Editorial" ? "Notes, essays and fresh perspectives from across independent culture." : subsection === "Photography" ? "Visual stories, places and people seen through a different lens." : subsection === "Interviews" ? "Conversations with the people making things, moving ideas and asking questions." : "A living collection of style, sound, community and everyday discoveries."}</p><span className="nw-coming-label">FIRST STORIES COMING SOON</span></div></div>
    </section>}

    <section className="nw-newsletter" id="nw-newsletter"><div><small>LET'S KEEP IN TOUCH</small><h2>A little wave<br />in your inbox.</h2></div><form onSubmit={e => { e.preventDefault(); setNewsletterPreview(true); }}><label htmlFor="nw-email">Your email address</label><div><input id="nw-email" type="email" required value={email} onChange={e => { setEmail(e.target.value); setNewsletterPreview(false); }} placeholder="you@example.com" /><button type="submit">SIGN ME UP ↗</button></div><small>{newsletterPreview ? "Preview only — newsletter sign-up is not connected yet." : "No noise. Just the good stuff."}</small></form></section>
    <footer className="nw-footer"><button className="nw-brand" onClick={() => go("Home")}><span>NEW</span><i>WAVE</i></button><span>THE INTERNET NEEDS A BEACH DAY.</span><nav aria-label="Footer navigation">{(["About", "Artists", "Events"] as Page[]).map(item => <button key={item} onClick={() => go(item)}>{item}</button>)}</nav><span>© NEW WAVE</span></footer>

    <aside className={assistantOpen ? "nw-assistant is-open" : "nw-assistant"} aria-label="New Wave surfer guide">
      {assistantOpen && <section className="nw-assistant-bubble" aria-live="polite"><div className="nw-assistant-top"><span>YOUR NEW WAVE GUIDE</span><button aria-label="Close assistant message" onClick={() => { setAssistantOpen(false); setExpression("idle"); }}>×</button></div><p>{message}</p><div className="nw-assistant-actions"><button onClick={() => ask("tour")}>Explore</button><button onClick={() => ask("shop")}>Shop</button><button onClick={() => ask("events")}>Events</button></div></section>}
      <button className="nw-assistant-character" aria-label="Talk to your New Wave guide" aria-expanded={assistantOpen} onClick={() => { const opening = !assistantOpen; setAssistantOpen(opening); setExpression(opening ? "talking" : "idle"); if (opening) setMessage(tips[page]); }}>
        <img src={expressions[expression]} alt="New Wave surfer girl guide" />
      </button>
    </aside>
  </main>;
};
