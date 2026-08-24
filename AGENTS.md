# Here. — Agent Notes

The Xcode target and most Swift filenames still use the earlier name **StudioMate**. User-visible copy should say **Here.**

## Overview

Here. is a macOS menu bar companion for hands-on creative learning. It listens on Control + Option, captures the user's screen on demand, sends transcript plus screenshots to a vision model, speaks the answer back, and can point at UI elements by flying a cursor overlay to `[POINT:x,y:label]` coordinates embedded in the response.

The product is intentionally specialized around:

- video editing
- UI design
- Blender workflows

## Product Rules

- Keep the app feeling like a practical coach, not a generic assistant
- Favor "next action + why" over abstract explanation
- Point at controls whenever it materially helps the user learn faster
- Preserve the menu bar-only UX unless the user explicitly wants a broader redesign
- Do not reintroduce StudioMate in user-visible strings, TCC prompts, or the welcome bubble

## Key Files

- [StudioMate/StudioMateApp.swift](StudioMate/StudioMateApp.swift): app entry
- [StudioMate/CompanionManager.swift](StudioMate/CompanionManager.swift): main orchestration and prompting
- [StudioMate/CompanionPanelView.swift](StudioMate/CompanionPanelView.swift): menu bar panel UI
- [StudioMate/OverlayWindow.swift](StudioMate/OverlayWindow.swift): cursor overlay and pointing animation
- [StudioMate/CreativeFocus.swift](StudioMate/CreativeFocus.swift): specialization lanes
- [StudioMate/CreativeCoachAPI.swift](StudioMate/CreativeCoachAPI.swift): streaming vision-chat client
- [worker/src/index.ts](worker/src/index.ts): proxy routes `/chat`, `/tts`, `/transcribe-token`
- [app/page.tsx](app/page.tsx): marketing landing page

## Build Notes

- Open the project in Xcode: [StudioMate.xcodeproj](StudioMate.xcodeproj)
- Prefer not to run `xcodebuild` from the terminal because TCC permissions are easier to preserve when running directly from Xcode
- Worker base URL is configured in [StudioMate/Info.plist](StudioMate/Info.plist). Leave the placeholder and the panel will warn; chat/TTS/transcription will not work until it is a real Worker URL.

## Provider Notes

- Chat goes through `/chat` (Anthropic Messages)
- TTS goes through `/tts` (ElevenLabs)
- AssemblyAI temp tokens come from `/transcribe-token`

If you swap providers, keep the screen-aware prompting and point-tag contract intact.
