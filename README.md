# Dynamic Safety &amp; Mobility Verification for Heavy-Duty Freight in Evolving Work Zones

Project website for **Safety21 project #656** — US DOT BIL · Safety21 National University Transportation
Center, 2023–2028 · grant cycle 26–27 · research, applied — at Carnegie Mellon University.

**Principal investigator:** Pingbo Tang (CMU School of Engineering)
**Co-principal investigator:** Peter (Yun) Zhang (CMU Heinz College)
**Status:** proposal under review

---

## What the project is

A **Safety &amp; Mobility Verification Digital Twin (SMVDT)** that fuses proprietary smart-trailer telematics
from Clarience Technologies with real-time infrastructure feeds from Cranberry Township Public Works — and
potentially PennDOT — to quantify safety risks such as underride exposure alongside mobility impacts such as
delay, on the same road segments and in the same time windows.

The twin does not only monitor conditions. It *verifies* whether a specific vehicle configuration can safely
navigate an evolving work-zone geometry, producing Safety, Mobility and Combined Safety–Mobility maps for
commercial fleets and for the agencies that manage the corridors they run on.

### Three pillars

1. **A library of evolving work-zone and HDV risk scenarios**, with rigorous definitions for underride
   exposure, blind-zone conflicts, merge/queue risk, stability anomalies, intrusion probability and
   barrier-strike risk from off-tracking.
2. **A dual testbed** — the CTPW 140+ mile municipal network at the junction of I-76, I-79, US-19 and PA-228,
   and the Clarience 185-mile instrumented commercial route through PennDOT Regions 2 and 3 — with physical
   validation at the PennSTART test track.
3. **A Communication Risk Detection Interface** that maps TOC-to-field-crew communication against protocol and
   surfaces reasoning gaps at network, section and work-zone levels.

### Year-one deliverables

| Quarter | Deliverable |
| --- | --- |
| Q1 | SMVDT architecture specification and safety-metrics definition document |
| Q2 | SMVDT v1 prototype and initial rare-event scenario bank |
| Q3 | Validated simulation library and draft Communication Risk Detection Interface |
| Q4 | Live SMVDT dashboard, Communication Risk Detection Interface, policy brief, public dataset |

## Site contents

| Path | What it is |
| --- | --- |
| `index.html` | The project site — problem, approach, safety metrics, testbeds, work plan, outputs, team, partners |
| `assets/css/site.css` | Stylesheet, including light and dark themes |
| `assets/js/site.js` | Theme toggle and mobile navigation |

No build step, no framework, no dependencies to install. The architecture diagram is inline SVG; the only
external request is to Google Fonts.

## Running it locally

Open `index.html` directly, or serve the folder so relative paths behave exactly as they will in production:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploying on GitHub Pages

1. Push this repository to GitHub.
2. In **Settings → Pages**, set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`.
3. The site goes live at `https://<username>.github.io/<repository>/`.

`.nojekyll` is present so GitHub Pages serves every file as-is rather than running it through Jekyll.

## Project record

The authoritative project record lives in CMU's Project Proposal Management System at
<https://ppms.cit.cmu.edu/projects/detail/656> (sign-in required).
