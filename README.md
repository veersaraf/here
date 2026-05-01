# StudioMate

StudioMate is a macOS-native, screen-aware creative coach that lives in your menu bar.

Instead of watching a course in one window and fumbling through the work in another, you hold `Control + Option`, ask for help out loud, and StudioMate teaches you inside the tool you're already using. It can see your screen, talk back, and point directly at the next control you should use.

## Landing Page

A Vercel-ready landing page for the public-facing brand **Here.** now lives at the repo root using Next.js.

Run it locally with:

```bash
npm install
npm run dev
```

Then deploy the repository root to Vercel when you are ready.

## What It's For

StudioMate is tuned around three hands-on creative lanes:

- **Video editing**: pacing, cuts, masking, keyframes, color, sound, exports
- **UI design**: hierarchy, spacing, typography, components, auto layout, flows
- **Blender**: modeling, modifiers, lighting, materials, cameras, renders

The app is meant to feel more like a live desk-side mentor than a generic chatbot.

## Core Experience

- Menu bar app with no dock icon
- Global push-to-talk shortcut: `Control + Option`
- Captures screenshots only when you ask for help
- Streams your voice to transcription
- Sends transcript plus screenshots to the creative coach backend
- Speaks the answer back with TTS
- Parses `[POINT:x,y:label]` tags so the cursor buddy can fly to tools on screen

## Why This Repo Exists

This repo was shaped as a competition-ready project for the Handshake x OpenAI Codex Creator Challenge.

The product pitch is simple:

> Udemy teaches before you open the app. StudioMate teaches while you're inside it.

## Architecture

- **App**: SwiftUI + AppKit menu bar app for macOS
- **Screen capture**: ScreenCaptureKit
- **Speech-to-text**: AssemblyAI streaming, with OpenAI/Apple fallbacks already in the codebase
- **Coach response**: streaming vision chat through a Cloudflare Worker proxy
- **Text-to-speech**: ElevenLabs through the same Worker
- **Overlay**: transparent cursor companion across monitors

The current implementation keeps the provider stack close to the inherited source project so the product can move fast. The repo is structured so those providers can be swapped later.

## Getting It Running

### 1. Set up the Worker

```bash
cd worker
npm install
npx wrangler secret put ANTHROPIC_API_KEY
npx wrangler secret put ASSEMBLYAI_API_KEY
npx wrangler secret put ELEVENLABS_API_KEY
```

Set your non-secret voice ID in [worker/wrangler.toml](/Users/veersaraf/Desktop/Codex/worker/wrangler.toml):

```toml
[vars]
ELEVENLABS_VOICE_ID = "your-voice-id-here"
```

Deploy it:

```bash
npx wrangler deploy
```

### 2. Point the app at your Worker

Update `WorkerBaseURL` in [StudioMate/Info.plist](/Users/veersaraf/Desktop/Codex/StudioMate/Info.plist) with your deployed Worker URL.

For local Worker development, you can also run:

```bash
cd worker
npx wrangler dev
```

and temporarily set `WorkerBaseURL` to `http://localhost:8787`.

### 3. Open in Xcode

```bash
open /Users/veersaraf/Desktop/Codex/StudioMate.xcodeproj
```

Then:

1. Select the `StudioMate` scheme
2. Set your signing team
3. Run with `Cmd + R`

## Permissions

StudioMate asks for:

- Microphone
- Accessibility
- Screen Recording
- Screen Content

It only captures the screen when the push-to-talk flow is active.

## Project Shape

```text
StudioMate/                  # macOS app source
  StudioMateApp.swift
  CompanionManager.swift
  CompanionPanelView.swift
  OverlayWindow.swift
  CreativeFocus.swift
  CreativeCoachAPI.swift
worker/                      # Cloudflare Worker proxy
  src/index.ts
NOTICE.md                    # attribution for the inherited MIT base
```

## Attribution

StudioMate is a substantial derivative of [farzaa/clicky](https://github.com/farzaa/clicky), which is MIT-licensed. The original copyright notice is preserved in [LICENSE](/Users/veersaraf/Desktop/Codex/LICENSE), and a short attribution note lives in [NOTICE.md](/Users/veersaraf/Desktop/Codex/NOTICE.md).
