const steps = [
  {
    number: "01",
    title: "Ask like a person.",
    body: "Hold the shortcut, talk naturally, and ask the question you would ask a real teacher in the room.",
  },
  {
    number: "02",
    title: "Let Here. see the work.",
    body: "It reads the screen in front of you, understands the creative context, and keeps the advice grounded in the tool you are already using.",
  },
  {
    number: "03",
    title: "Learn inside the craft.",
    body: "You get voice guidance, clean explanations, and on-screen direction instead of another course tab drifting in the background.",
  },
];

const disciplines = [
  {
    name: "Video editing",
    summary:
      "Cuts, pacing, masking, sound, keyframes, color, and all the tiny decisions that make footage feel intentional.",
    tags: ["cuts", "masking", "color", "sound", "keyframes"],
  },
  {
    name: "UI design",
    summary:
      "Hierarchy, spacing, type, components, and the taste behind making interfaces feel calm, sharp, and alive.",
    tags: ["spacing", "type", "flows", "components", "systems"],
  },
  {
    name: "Blender",
    summary:
      "Lighting, materials, cameras, modifiers, and 3D scenes that feel closer to design direction than random tutorials.",
    tags: ["lighting", "materials", "modifiers", "camera", "renders"],
  },
];

const principles = [
  "Screen-aware by design",
  "Voice-first help",
  "Open-source roots",
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="background-glow background-glow--one" />
      <div className="background-glow background-glow--two" />
      <div className="background-glow background-glow--three" />

      <div className="site-frame">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="Here. home">
            Here.
          </a>
          <nav className="topbar-nav" aria-label="Primary">
            <a href="#how">How it works</a>
            <a href="#focuses">Focuses</a>
            <a href="#open-source">Open source</a>
          </nav>
        </header>

        <section className="hero" id="top">
          <p className="eyebrow">macOS-native creative teacher</p>
          <h1 className="hero-name">Here.</h1>
          <p className="hero-tagline">
            The teacher
            <br />
            that is always here.
          </p>
          <p className="hero-copy">
            A screen-aware companion for video editing, UI design, and Blender.
            Ask out loud. It sees the work in front of you, answers in plain
            language, and helps you move without leaving the craft.
          </p>
          <div className="hero-actions">
            <a className="button button--solid" href="#how">
              See how it works
            </a>
            <a className="button button--ghost" href="#open-source">
              Open-source core
            </a>
          </div>
          <ul className="hero-principles" aria-label="Product principles">
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </section>

        <section className="statement">
          <p className="eyebrow">for the stuck moment</p>
          <h2>
            You should not have to leave the work
            <br />
            to learn the work.
          </h2>
        </section>

        <section className="section" id="how">
          <div className="section-intro">
            <p className="eyebrow">how it works</p>
            <h2 className="section-title">
              A teacher in the middle of the software.
            </h2>
            <p className="section-copy">
              Most learning products sit somewhere else. Another course. Another
              playlist. Another promise that you will practice later. Here. is
              built for later never arriving.
            </p>
          </div>

          <div className="card-grid">
            {steps.map((step) => (
              <article className="card" key={step.number}>
                <p className="card-number">{step.number}</p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="focuses">
          <div className="section-intro section-intro--narrow">
            <p className="eyebrow">starting with three crafts</p>
            <h2 className="section-title">
              Specialized enough to feel real.
            </h2>
            <p className="section-copy">
              Here. is not pretending to teach everything at once. It starts
              with a tight creative lane, then gets deeper where creators
              actually need help.
            </p>
          </div>

          <div className="discipline-grid">
            {disciplines.map((discipline) => (
              <article className="discipline-card" key={discipline.name}>
                <div className="discipline-header">
                  <p className="discipline-kicker">focus</p>
                  <h3>{discipline.name}</h3>
                </div>
                <p className="discipline-summary">{discipline.summary}</p>
                <ul className="tag-row" aria-label={`${discipline.name} topics`}>
                  {discipline.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--open-source" id="open-source">
          <div className="section-intro">
            <p className="eyebrow">open source</p>
            <h2 className="section-title">Built in the open, not behind a curtain.</h2>
            <p className="section-copy">
              Here. grows from the MIT-licensed Clicky project and turns that
              screen-aware assistant pattern into a hands-on teacher for
              creators. The base is open. The direction is remixable. The goal
              is a product that feels more human than passive learning software.
            </p>
          </div>

          <div className="open-source-note">
            <p className="open-source-lead">
              Open-source roots matter here because teaching tools should feel
              reachable, inspectable, and alive.
            </p>
            <p>
              This first version is focused on video editing, UI design, and
              Blender, with room to expand as the system gets sharper.
            </p>
          </div>
        </section>

        <section className="closing">
          <p className="eyebrow">why this should exist</p>
          <h2>
            Less passive watching.
            <br />
            More guided making.
          </h2>
          <p>
            Here. is a teacher that stays near the cursor, near the question,
            and near the work itself.
          </p>
        </section>

        <footer className="footer">
          <p>Here. is being shaped for the Handshake x OpenAI Codex challenge.</p>
          <p>macOS-native. Screen-aware. Open-source at the core.</p>
        </footer>
      </div>
    </main>
  );
}
