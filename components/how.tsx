'use client'

import { FeatureSteps } from "./blocks/feature-section"

const universalFeatures = [
  {
    step: "Step 1",
    title: "Pick Your Path",
    content:
      "Select a role focus—Server, Bartender, Host—or FOH Fundamentals.",
  },
  {
    step: "Step 2",
    title: "Book a Session",
    content:
      "Individuals join local classes; restaurants schedule on-site training.",

  },
  {
    step: "Step 3",
    title: "Train Live",
    content:
      "Hands-on practice with real scenarios, role-plays, and menu talk.",
  },
  {
    step: "Step 4",
    title: "Certify & Grow",
    content:
      "Actionable feedback, checklists, and certificates to advance your goals.",
  },
]


export default function How() {
    return(
        <div>
            <FeatureSteps features={universalFeatures} title="How It Works" />
        </div>
    )
}