//
//  StudioMateAnalytics.swift
//  StudioMate
//
//  Lightweight analytics shim. The inherited source project sent events to a
//  third-party PostHog workspace owned by the original app. This repo keeps a
//  central surface for telemetry hooks, but no-ops by default so contributors
//  can wire their own analytics provider without leaking data elsewhere.
//

import Foundation

enum StudioMateAnalytics {
    static func configure() {}
    static func trackAppOpened() {}
    static func trackOnboardingStarted() {}
    static func trackOnboardingReplayed() {}
    static func trackOnboardingVideoCompleted() {}
    static func trackOnboardingDemoTriggered() {}
    static func trackAllPermissionsGranted() {}
    static func trackPermissionGranted(permission: String) {}
    static func trackPushToTalkStarted() {}
    static func trackPushToTalkReleased() {}
    static func trackUserMessageSent(transcript: String) {}
    static func trackAIResponseReceived(response: String) {}
    static func trackElementPointed(elementLabel: String?) {}
    static func trackResponseError(error: String) {}
    static func trackTTSError(error: String) {}
}
