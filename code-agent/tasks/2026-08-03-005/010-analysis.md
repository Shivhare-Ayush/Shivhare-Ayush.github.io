# Requirements Analysis

## 1. About Me Bio Refactor
- **Current Issues**: Phrase "finding the unnecessary constraint in a system" and "build things at every scale" sound informal or ambiguous for recruiters.
- **Requirement**: Restructure as a crisp "Tell Me About Yourself" elevator pitch highlighting systems engineering, cloud platform engineering at IBM, technical leadership at Nebula Labs & ACM, and CS background at UTD.

## 2. Quantifying Experience Points
- **Current Issues**: Bullet points focus on job responsibilities rather than measurable output/impact.
- **Requirement**: Update entries with metrics:
  - **IBM**: 100% self-service automation for custom OIDC/SAML IdP, zero manual SRE onboarding cycles.
  - **Nebula Labs (Head of Engineering)**: Standardized code review for 20+ engineers, supporting platforms serving 20,000+ UTD students.
  - **ACM Education**: Scaled mentorship program to peak engagement across student cohorts.
  - **Coppell ISD**: Web tools deployed across district schools.

## 3. Experience & Project Linking
- **Current Issues**: UTDTrends and API Workshop appear in both Experience and Projects, confusing visitors.
- **Requirement**: Add cross-links ("View Related Project ↗" or "Role: Head of Engineering @ Nebula Labs") connecting Experience entries directly to Project cards.

## 4. Expandable Card Discoverability
- **Current Issues**: The expand/collapse feature in `Card.jsx` relies solely on an isolated top-right chevron (`BsChevronDown`). Many users fail to notice cards are clickable.
- **Requirement**: Add explicit text affordances ("Expand details ▾" / "Show less ▴"), card-wide hover cues, and accessible keyboard focus indicators.
