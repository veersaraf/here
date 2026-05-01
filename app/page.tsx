export default function Home() {
  return (
    <main className="page-shell">
      <div className="page-noise" />

      <div className="site-frame">
        <header className="topbar">
          <div aria-hidden="true" />

          <a className="brand" href="#top" aria-label="Here. home">
            Here.
          </a>

          <a
            className="github-link"
            href="https://github.com/veersaraf/HereApp"
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub repository"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 1.5C6.2 1.5 1.5 6.3 1.5 12.1c0 4.7 3.1 8.7 7.3 10.1.5.1.7-.2.7-.5v-1.9c-3 .7-3.6-1.3-3.6-1.3-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.4-.3-4.9-1.2-4.9-5.3 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 3 .9a10.3 10.3 0 0 1 5.4 0c2.1-1.2 3-.9 3-.9.6 1.4.2 2.5.1 2.8.7.8 1.1 1.8 1.1 3 0 4.1-2.5 5-4.9 5.3.4.3.8 1 .8 2v2.9c0 .3.2.6.7.5 4.2-1.4 7.3-5.4 7.3-10.1C22.5 6.3 17.8 1.5 12 1.5Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </header>

        <section className="hero" id="top">
          <h1 className="hero-name">Here.</h1>
          <p className="hero-tagline">The teacher that is always here.</p>
        </section>

        <section className="how-block" aria-label="How it works">
          <h2>How it works</h2>
          <p>
            Hold Control + Option and ask for help. Here. listens, sees what is
            on your screen, speaks back, and points at what to click next, so
            you can learn inside the app you are already using.
          </p>
          <p className="github-note">
            All download and setup details live on GitHub.
          </p>
        </section>

        <section className="focus-block" aria-label="Creative focuses">
          <p className="focus-lead">Fine-tuned specially for</p>
          <div className="focus-list">
            <p>
              <span>Video Editing</span>
              <em>Final Cut Pro, DaVinci Resolve</em>
            </p>
            <p>
              <span>Graphic Design</span>
              <em>Blender, After Effects</em>
            </p>
            <p>
              <span>UI Design</span>
              <em>Figma</em>
            </p>
          </div>
        </section>

        <p className="bottom-note">Less Seeing, More Doing</p>
      </div>
    </main>
  );
}
