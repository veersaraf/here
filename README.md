# Here.

A macOS menu-bar teacher. Hold **Control + Option**, ask out loud, and it looks at your screen, talks back, and points at the next control to use.

Specialized for video editing, UI design, and Blender. The Xcode target is still named `StudioMate` — same app.

**Live:** [here-app-three.vercel.app](https://here-app-three.vercel.app)

## Run it

You need a Cloudflare Worker in front of Anthropic, AssemblyAI, and ElevenLabs. Keys stay on the Worker; the app only stores the Worker URL.

```bash
cd worker
npm install
npx wrangler login
npx wrangler deploy
npx wrangler secret put ANTHROPIC_API_KEY
npx wrangler secret put ASSEMBLYAI_API_KEY
npx wrangler secret put ELEVENLABS_API_KEY
```

Voice ID is already in [`worker/wrangler.toml`](worker/wrangler.toml). For local Worker dev, put those three keys in `worker/.dev.vars` and run `npx wrangler dev`.

Then set `WorkerBaseURL` in [`StudioMate/Info.plist`](StudioMate/Info.plist) to the deployed URL (or `http://localhost:8787`). If you leave the placeholder, the menu panel will say so and chat/voice will not work.

```bash
open StudioMate.xcodeproj
```

Select the `StudioMate` scheme, set your signing team, Cmd+R. Prefer Xcode over `xcodebuild` so TCC permissions stick.

First run asks for microphone, accessibility, screen recording, and screen content. Screenshots happen after you release the hotkey (and once during the first-run pointing demo), not continuously.

## Landing page

```bash
npm install
npm run dev
```

## License

MIT. Substantial derivative of [farzaa/clicky](https://github.com/farzaa/clicky) — see [LICENSE](LICENSE) and [NOTICE.md](NOTICE.md).
