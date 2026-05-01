# Here.

Here. is a macOS-native, screen-aware teacher that lives in your menu bar.

Hold `Control + Option`, ask for help out loud, and Here. teaches you inside the app you are already using. It can see your screen, talk back, and point directly at the next control you should use.

## What It's For

Here. is currently fine-tuned around three creative lanes:

- **Video editing**: Final Cut Pro, DaVinci Resolve
- **Graphic design**: Blender, After Effects
- **UI design**: Figma

The goal is simple: less passive watching, more guided doing.

## Core Experience

- Menu bar app with no dock icon
- Global push-to-talk shortcut: `Control + Option`
- Captures screenshots only when you ask for help
- Streams your voice to transcription
- Sends transcript plus screenshots to the creative coach backend
- Speaks the answer back with TTS
- Parses `[POINT:x,y:label]` tags so the cursor companion can fly to tools on screen

## Architecture

- **App**: SwiftUI + AppKit menu bar app for macOS
- **Screen capture**: ScreenCaptureKit
- **Speech-to-text**: AssemblyAI streaming, with OpenAI/Apple fallbacks already in the codebase
- **Coach response**: streaming vision chat through a Cloudflare Worker proxy
- **Text-to-speech**: ElevenLabs through the same Worker
- **Overlay**: transparent cursor companion across monitors

The public product name is **Here.** The current source tree still uses `StudioMate` in file and target names internally.

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

Here. asks for:

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

Here. is a substantial derivative of [farzaa/clicky](https://github.com/farzaa/clicky), which is MIT-licensed. The original copyright notice is preserved in [LICENSE](/Users/veersaraf/Desktop/Codex/LICENSE), and a short attribution note lives in [NOTICE.md](/Users/veersaraf/Desktop/Codex/NOTICE.md).
