# Dynamic Safety &amp; Mobility Verification for Heavy-Duty Freight in Evolving Work Zones

Project website for **Safety21 project #656** (US DOT BIL · Safety21 National University
Transportation Center, 2023–2028 · grant cycle 26–27) at Carnegie Mellon University, together with the
**Call &amp; Signal** interactive safety-training modules developed alongside it.

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
navigate an evolving work-zone geometry, and produces Safety, Mobility and Combined Safety–Mobility maps for
commercial fleets and the agencies that manage the corridors they run on.

Testbeds: the CTPW 140+ mile municipal network at the junction of I-76, I-79, US-19 and PA-228, and the
Clarience 185-mile instrumented commercial route through PennDOT Regions 2 and 3, with physical validation at
the PennSTART test track.

## Site contents

| Page | What it is |
| --- | --- |
| `index.html` | Project site — problem, approach, testbeds, work plan, outputs, prior work, team, partners |
| `training/index.html` | Hub for the four interactive training modules |
| `training/roadway.html` | 3D trainer: highway lane closure and two-lane flagging |
| `training/construction.html` | 3D trainer: crane girder delivery and excavator load-out |
| `training/crane-siting.html` | Interactive crane siting, costing and geometry-screening exercise |
| `training/truck-excavator.html` | Truck–excavator loading cycle, signals, danger zones and inspector checklist |
| `assets/css/site.css` | Shared stylesheet for the project pages |
| `assets/js/site.js` | Theme toggle and mobile navigation |

The four training modules are self-contained single-file HTML applications. They were written before this
site and keep their own styling; the only change made to them here is a "← All modules" link back to the hub.

## Running it locally

No build step — it is static HTML. Open `index.html` directly, or serve the folder so that relative paths
behave exactly as they will in production:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploying on GitHub Pages

1. Push this repository to GitHub.
2. In **Settings → Pages**, set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`.
3. The site goes live at `https://<username>.github.io/<repository>/`.

`.nojekyll` is present so GitHub Pages serves every file as-is rather than running it through Jekyll.

## Dependencies

Loaded from CDNs by the training modules, nothing installed or bundled:

- [three.js r128](https://threejs.org/) and `OrbitControls` — the two 3D trainers
- [Google Fonts](https://fonts.google.com/) — Barlow, Barlow Condensed, IBM Plex Mono / Sans

## Reference material cited in the modules

- OSHA 29 CFR 1926 — construction standards
- MUTCD, 11th Edition — temporary traffic control
- 49 CFR Subtitle B Chapter III — FMCSA motor carrier safety
- NIOSH struck-by and construction equipment visibility publications

## A note on scope

The training modules are teaching models. They are not lift plans, traffic control plans, or a substitute for
site-specific training. Where a module uses a site-specific procedure rather than a legal requirement — the
closed-loop read-back and the horn code, for example — it says so in place.

## Project record

The authoritative project record lives in CMU's Project Proposal Management System at
<https://ppms.cit.cmu.edu/projects/detail/656> (sign-in required).
