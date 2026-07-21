# Here.

**A macOS-native, screen-aware teacher that lives in your menu bar.**

Hold `Control + Option`, ask for help out loud, and Here. teaches you inside the app you are already using. It can see your screen, talk back, and fly a cursor to point directly at the next control you should touch.

The goal is simple: less passive watching, more guided doing.

---

## What it's for

Here. is tuned for hands-on creative work, with three specialization lanes built into the app:

| Lane | Focus | Typical tools |
| --- | --- | --- |
| **Video Editing** | Cuts, pacing, keyframes, masking, color, audio, export | Premiere Pro, Final Cut Pro, DaVinci Resolve, CapCut |
| **UI Design** | Hierarchy, spacing, typography, components, flows, prototyping | Figma, Framer, Sketch |
| **Blender / 3D** | Modeling, lighting, materials, cameras, motion, render polish | Blender, Eevee, Cycles, Geometry Nodes |

Each lane changes how the coach reasons about your screen — see [`StudioMate/CreativeFocus.swift`](StudioMate/CreativeFocus.swift).

## How it works

A single push-to-talk gesture drives the whole loop:

1. **Listen** — hold `Control + Option` and speak. Audio is streamed to transcription in real time.
2. **See** — on release, Here. captures your screen(s) via ScreenCaptureKit. Screenshots are only taken when you ask for help.
3. **Think** — the transcript plus screenshots are sent to a vision model through a Cloudflare Worker proxy, which streams the response back.
4. **Speak** — the answer is played aloud with text-to-speech, written for the ear rather than the eye.
5. **Point** — if the model emits a `[POINT:x,y:label]` tag, a cursor overlay flies to that on-screen element, across multiple displays if needed.

## Architecture

| Concern | Implementation |
| --- | --- |
| App | SwiftUI + AppKit menu bar app for macOS (no dock icon) |
| Push-to-talk | Global, listen-only `CGEvent` tap for modifier-only shortcuts |
| Screen capture | ScreenCaptureKit (`SCScreenshotManager`), all connected displays |
| Speech-to-text | AssemblyAI streaming, with OpenAI and Apple Speech fallbacks in the codebase |
| Coach response | Streaming vision chat (Anthropic Messages API) via a Cloudflare Worker |
| Text-to-speech | ElevenLabs, through the same Worker |
| Overlay | Transparent cursor companion that animates to pointed elements |

The Worker is a thin proxy so the app never ships with raw API keys — every provider key stays as a Cloudflare secret.

> **A note on naming:** the public product is **Here.** The source tree still uses the earlier `StudioMate` name for the Xcode target and most file names. Renaming the target is cosmetic and deferred; treat `StudioMate` and `Here.` as the same thing.

## Repository layout

```text
StudioMate/                  # macOS app source (SwiftUI + AppKit)
  StudioMateApp.swift        #   app entry
  CompanionManager.swift     #   orchestration, prompting, POINT parsing
  CompanionPanelView.swift   #   menu bar panel UI
  OverlayWindow.swift        #   cursor overlay and pointing animation
  CreativeFocus.swift        #   specialization lanes
  CreativeCoachAPI.swift     #   streaming vision-chat client
  ...                        #   transcription providers, capture, TTS, etc.
worker/                      # Cloudflare Worker proxy
  src/index.ts               #   /chat, /tts, /transcribe-token routes
app/                         # Next.js landing page
NOTICE.md                    # attribution for the inherited MIT base
```

## Getting started

### 1. Deploy the Worker

```bash
cd worker
npm install
npx wrangler secret put ANTHROPIC_API_KEY
npx wrangler secret put ASSEMBLYAI_API_KEY
npx wrangler secret put ELEVENLABS_API_KEY
```

Set your (non-secret) ElevenLabs voice ID in [`worker/wrangler.toml`](worker/wrangler.toml):

```toml
[vars]
ELEVENLABS_VOICE_ID = "your-voice-id-here"
```

Then deploy:

```bash
npx wrangler deploy
```

For local development, `npx wrangler dev` serves the Worker at `http://localhost:8787`.

### 2. Point the app at your Worker

Set `WorkerBaseURL` in [`StudioMate/Info.plist`](StudioMate/Info.plist) to your deployed Worker URL (or `http://localhost:8787` while developing). This single value configures the `/chat`, `/tts`, and `/transcribe-token` routes.

### 3. Build and run in Xcode

```bash
open StudioMate.xcodeproj
```

Then select the `StudioMate` scheme, set your signing team, and run with `Cmd + R`.

> Prefer running from Xcode over `xcodebuild` — TCC (microphone, screen recording, accessibility) permissions are easier to preserve when launching directly.

## Permissions

On first run, Here. requests:

- **Microphone** — to hear your questions
- **Accessibility** — to run the global push-to-talk shortcut
- **Screen Recording** — to see and point at your screen

Screen capture only happens while a push-to-talk request is active.

## Landing page

The marketing site under [`app/`](app/) is a small Next.js app:

```bash
npm install
npm run dev
```

## Attribution

Here. is a substantial derivative of [farzaa/clicky](https://github.com/farzaa/clicky), which is MIT-licensed. The original copyright is preserved in [LICENSE](LICENSE), and a short attribution note lives in [NOTICE.md](NOTICE.md).

## License

MIT — see [LICENSE](LICENSE).
