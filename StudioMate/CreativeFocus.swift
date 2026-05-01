//
//  CreativeFocus.swift
//  StudioMate
//
//  Product-specific coaching lanes for the StudioMate experience.
//

import Foundation

enum CreativeFocus: String, CaseIterable, Identifiable {
    case videoEditing
    case uiDesign
    case blender

    var id: String { rawValue }

    var title: String {
        switch self {
        case .videoEditing:
            return "Video Editing"
        case .uiDesign:
            return "UI Design"
        case .blender:
            return "Blender"
        }
    }

    var shortTitle: String {
        switch self {
        case .videoEditing:
            return "Edit"
        case .uiDesign:
            return "UI"
        case .blender:
            return "3D"
        }
    }

    var summary: String {
        switch self {
        case .videoEditing:
            return "Cuts, pacing, keyframes, masking, color, audio, and export choices."
        case .uiDesign:
            return "Hierarchy, spacing, typography, components, flows, and prototyping clarity."
        case .blender:
            return "Modeling, lighting, materials, cameras, motion, and render polish."
        }
    }

    var toolStack: String {
        switch self {
        case .videoEditing:
            return "Premiere Pro, Final Cut Pro, DaVinci Resolve, CapCut"
        case .uiDesign:
            return "Figma, Framer, Sketch"
        case .blender:
            return "Blender, Eevee, Cycles, Geometry Nodes"
        }
    }

    var samplePrompts: [String] {
        switch self {
        case .videoEditing:
            return [
                "Help me make this intro hit harder.",
                "Where should I add keyframes here?",
                "Tell me why this cut feels awkward."
            ]
        case .uiDesign:
            return [
                "Why does this screen feel cluttered?",
                "Show me how to fix the spacing.",
                "What should I change before prototyping?"
            ]
        case .blender:
            return [
                "How do I make this render feel premium?",
                "Point me to the right modifier stack.",
                "What lighting change would improve this scene?"
            ]
        }
    }

    var coachingGuidance: String {
        switch self {
        case .videoEditing:
            return """
            you are strongest when teaching timeline-based craft. focus on pacing, shot selection, transitions, masking, color, sound cleanup, motion, titles, and export settings. if the user is inside an editor, point to the exact panel, clip, inspector, or button they should use next.
            """
        case .uiDesign:
            return """
            you are strongest when teaching interface craft. focus on layout, hierarchy, spacing, typography, contrast, alignment, auto layout, component systems, states, and prototype flows. if the user is inside a design tool, point to the exact frame, layer, panel, or property they should touch next.
            """
        case .blender:
            return """
            you are strongest when teaching blender-centered visual craft. focus on topology, modifiers, materials, lighting, cameras, render engines, geometry nodes, animation, and compositing. if the user is inside blender, point to the exact viewport area, outliner item, modifier slot, shader node, or render setting they should use next.
            """
        }
    }
}
