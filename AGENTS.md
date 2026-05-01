# StudioMate - Agent Notes

## Overview

StudioMate is a macOS menu bar companion for hands-on creative learning. It listens on a global push-to-talk shortcut, captures the user's screen on demand, sends transcript plus screenshots to a vision model, speaks the answer back, and can point at UI elements by flying a cursor overlay to `[POINT:x,y:label]` coordinates embedded in the response.

The product is intentionally specialized around:

- video editing
- UI design
- Blender workflows

## Product Rules

- Keep the app feeling like a practical coach, not a generic assistant
- Favor "next action + why" over abstract explanation
- Point at controls whenever it materially helps the user learn faster
- Preserve the menu bar-only UX unless the user explicitly wants a broader redesign

## Key Files

- [StudioMate/StudioMateApp.swift](/Users/veersaraf/Desktop/Codex/StudioMate/StudioMateApp.swift): app entry
- [StudioMate/CompanionManager.swift](/Users/veersaraf/Desktop/Codex/StudioMate/CompanionManager.swift): main orchestration and prompting
- [StudioMate/CompanionPanelView.swift](/Users/veersaraf/Desktop/Codex/StudioMate/CompanionPanelView.swift): menu bar panel UI
- [StudioMate/OverlayWindow.swift](/Users/veersaraf/Desktop/Codex/StudioMate/OverlayWindow.swift): cursor overlay and pointing animation
- [StudioMate/CreativeFocus.swift](/Users/veersaraf/Desktop/Codex/StudioMate/CreativeFocus.swift): specialization lanes
- [StudioMate/CreativeCoachAPI.swift](/Users/veersaraf/Desktop/Codex/StudioMate/CreativeCoachAPI.swift): streaming vision-chat client
- [worker/src/index.ts](/Users/veersaraf/Desktop/Codex/worker/src/index.ts): proxy routes

## Build Notes

- Open the project in Xcode: [StudioMate.xcodeproj](/Users/veersaraf/Desktop/Codex/StudioMate.xcodeproj)
- Prefer not to run `xcodebuild` from the terminal because TCC permissions are easier to preserve when running directly from Xcode
- Worker base URL is configured in [StudioMate/Info.plist](/Users/veersaraf/Desktop/Codex/StudioMate/Info.plist)

## Provider Notes

- Current stack keeps the inherited Worker architecture for speed
- Chat goes through `/chat`
- TTS goes through `/tts`
- AssemblyAI temp tokens come from `/transcribe-token`

If you swap providers, keep the screen-aware prompting and point-tag contract intact.
