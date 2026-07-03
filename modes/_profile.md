# _profile.md — Your Narrative, Archetypes & Evaluation Rules

> This file customizes career-ops behavior for YOUR specific story, archetypes, and evaluation criteria. It overrides defaults in `_shared.md`. Never auto-updated — keep updating it as your career evolves.
>
> **Rebuilt 2026-07-03 from the real resume (Gaurav_Khungar_Resume_Senior_QA_Engineer.docx).** The previous version contained placeholder metrics that were never true (framework architecture, mentoring 5 engineers, CI/CD ownership). Never resurrect those claims.

---

## Your Story

### Who You Are (Headline)
**Senior QA Engineer** — 5+ years of product-focused QA across web, SaaS, and mobile. Deep domain expertise in cloud telephony/CCaaS and CRM integrations, with a growing automation practice (Cypress, Playwright, Maestro). Proven remote freelancer for international clients (Dubai, Tel Aviv).

### Your Superpowers
1. **CCaaS / telephony domain depth** — IVR trees, ACD logic, agent states, call flows, WebSocket real-time events, webhook validation. 3 years at Ziwo. Very few QA candidates have this.
2. **CRM integration testing at scale** — E2E integration testing with 8 platforms (Dynamics 365, Salesforce, Zoho, Zendesk, Freshdesk, HubSpot, Pipedrive, Odoo), across sandbox AND production
3. **Mobile QA (Android/iOS)** — VoIP call handling, push notifications, background modes, connectivity stability; Maestro-driven UI automation
4. **API & event-driven testing** — Postman, Swagger, REST, webhooks, WebSocket event validation
5. **Ownership & self-direction** — sole QA at Datanitiv (complete QA process); trusted freelance QA for remote product teams

### The Problems You Solve
- **For product teams**: releases that don't break — regression, sanity, and E2E coverage across web, mobile, and integrations
- **For support/on-call**: fast production issue triage with root-cause collaboration and verified fixes
- **For integration-heavy products**: confidence that CRM/third-party integrations actually work in production, not just in sandbox

### Key Achievements (truthful — from cv.md)
- **Sole QA ownership** — managed the complete QA process alone at Datanitiv for 1.5 years
- **8 CRM platforms integration-tested** — sandbox and production, including API syncs, click-to-call, caller ID mapping
- **Maestro mobile automation** — introduced UI automation flows for Ziwo's Android/iOS telephony apps
- **Telephony edge-case expertise** — exploratory testing for network drops, jitter, packet loss
- **Playwright E2E suite** — built and maintains one for personal portfolio site (proof of hands-on automation skill)

---

## Your Archetypes (Target Roles)

### Archetype 1: Senior QA Engineer / SDET ⭐ PRIMARY
**Your bullseye.** Product-focused senior IC roles: manual + automation, E2E/regression/API testing, web + SaaS + mobile.

**Scoring weight in evaluation:** 50%

**Green flags:**
- Web/SaaS/mobile product testing with E2E and regression focus
- Cypress or Playwright in the stack (or willingness to adopt)
- API/integration testing is a core part of the role
- Telephony, communications, CRM, or integration-heavy products (domain match!)
- Remote-first, async-friendly teams

**Red flags:**
- Hard requirement for framework architecture from scratch as day-1 expectation
- Python or Java as mandatory primary language (real languages: JavaScript, PHP, C/C++)
- Performance/load testing as a core responsibility (certificate-level exposure only)

**Framing your experience for this role:**
- Lead with domain depth (CCaaS, CRM integrations) and product breadth (web + mobile + API)
- Emphasize production triage and E2E ownership
- Show automation trajectory: Cypress certified → Playwright portfolio suite → Maestro mobile automation in production use

**Success look:** Senior IC scope, modern automation stack, integration-heavy product, remote

---

### Archetype 2: QA Automation Engineer (SECONDARY)
**Growth path.** Roles centered on building/extending automation with Cypress, Playwright, or Maestro.

**Scoring weight in evaluation:** 30%

**Green flags:**
- JavaScript/TypeScript automation stack (Cypress/Playwright)
- Mobile automation (Maestro, Appium-adjacent)
- Existing framework to extend (vs. green-field architecture mandate)
- Pairing/collaborative automation culture

**Red flags:**
- "10 years building frameworks from scratch" requirements
- Selenium/Java legacy-only stacks
- Automation metrics theater (case counts over quality)

**Framing your experience for this role:**
- Lead with Maestro automation at Ziwo + Playwright portfolio suite + Cypress/Cucumber certifications
- Be honest: automation is the growth edge on top of a strong manual/exploratory foundation

**Success look:** Hands-on automation growth with mentorship available, JS-first stack

---

### Archetype 3: QA Lead / Test Lead (ADJACENT — stretch)
**Step-up option.** Hands-on lead roles at smaller companies that value domain depth and ownership over prior management scars.

**Scoring weight in evaluation:** 15%

**Green flags:**
- "Player-coach" hands-on lead roles
- Small teams (1-3 QAs) where the lead still tests daily
- Sole-QA-building-the-function roles (matches Datanitiv experience)

**Red flags:**
- "X+ years managing QA teams" as hard requirement — no formal leadership on CV; expect screen-out
- Large-team management, budget/hiring authority expectations
- Roles scored 4.0+ ONLY because of leadership language — that was the old (fabricated) profile's bullseye, not yours

**Framing your experience for this role:**
- Sole-QA ownership at Datanitiv is the leadership proxy: process ownership, prioritization, stakeholder communication
- Status reporting to Team Lead and business executives at CXG

**Success look:** Hands-on lead scope with room to grow into formal leadership

---

## Archetype Detection & Scoring Rules

| Archetype | JD Keywords | Detection |
|-----------|-------------|-----------|
| **Senior QA / SDET** | "QA Engineer", "SDET", "E2E", "regression", "API testing", "mobile", "manual + automation" | Senior IC product-testing scope |
| **QA Automation** | "automation engineer", "Cypress", "Playwright", "Maestro", "test automation" | Automation-centric IC scope |
| **QA Lead (stretch)** | "lead", "player-coach", "first QA hire", "own the QA process" | Hands-on lead, small/no team |

**Scoring:** After identifying archetype, scale global score based on fit:
- **Primary match**: No reduction; use full scoring logic
- **Secondary match**: Reduce global score by 0.2
- **Adjacent match**: Reduce by 0.4 — and flag any "years of leadership" requirement explicitly as screen risk
- **No match**: Reduce by 0.5+

**Domain boosts (NEW — reflect real differentiators):**
- Telephony/CCaaS/communications product → +0.3
- CRM/integration-heavy product → +0.2
- Mobile app testing in scope → +0.2
- JavaScript automation stack (Cypress/Playwright) → +0.2
- Python/Java mandatory as primary language → -0.3
- "Architect a framework from scratch" as day-1 core mandate → -0.3

---

## CV Framing & Positioning Rules

### For "Senior QA Engineer / SDET" Roles
**Lead with:** Domain depth (CCaaS, CRM), E2E ownership, production triage, mobile coverage
- Bullets: real scope ("8 CRM platforms", "IVR/ACD/WebSocket validation", "Android + iOS")
- Never claim: framework architecture, team mentoring, CI/CD pipeline ownership

### For "QA Automation Engineer" Roles
**Lead with:** Maestro automation in production use, Playwright portfolio suite, Cypress + Cucumber certifications
- Be transparent about the manual-to-automation trajectory; frame it as deliberate upskilling

### For "QA Lead" (stretch) Roles
**Lead with:** Sole-QA process ownership at Datanitiv, exec-facing status reporting at CXG
- Do NOT inflate into "led a team of N" — there is no team-leadership claim available

---

## Proof Points & Metrics (from cv.md)

- **5+ years** product-focused QA (Dec 2020 – present)
- **8 CRM/ticketing platforms** integration-tested end-to-end (sandbox + production)
- **3 years** CCaaS/cloud telephony testing (Ziwo)
- **2 mobile apps** tested across Android/iOS (Ziwo Agent, CXG EV) incl. Maestro automation
- **Sole QA** for the full product QA process (Datanitiv, 1.5 years)
- **3 certifications**: Cucumber with JavaScript, Introduction to Cypress, Performance & Load Testing tools/techniques

Always extract metrics from cv.md/article-digest.md; never invent.

---

## Your Non-Negotiables & Preferences

### Must-Haves
✅ **Remote capable** — fully remote or hybrid with real flexibility (proven remote freelancer)
✅ **Product-focused QA** — testing a product, not staff-augmentation body-shopping
✅ **Modern tooling** — Cypress/Playwright-era automation, not legacy-only Selenium/Java
✅ **India-eligible** — role must actually hire in India (biggest historical waste: US-only listings)

### Nice-to-Haves
🌟 **Communications/CRM/integration-heavy products** — domain depth transfers directly
🌟 **Mobile in scope** — differentiator most web QAs lack
🌟 **Automation growth support** — mentorship or time to deepen Playwright/Cypress
🌟 **Scale-up environment** — 100-5K people

### Deal-Breakers (Reduce Score by 0.5+)
❌ **On-site mandatory** — no remote flexibility
❌ **Python/Java-only hard requirement** — not on the real CV
❌ **"Manager of managers" scope** — no leadership history to support it
❌ **Very early-stage startup** — <20 people, no QA culture or budget

---

## Evaluation Adjustments

| Dimension | Boost (+) | Reduce (-) |
|-----------|-----------|-----------|
| **Match with CV** | "5+ years QA" → +0.2; manual+automation mix → +0.2 | "8+ years" / "framework architect" → -0.3 |
| **Domain** | Telephony/CCaaS/CRM/integrations → +0.3 | Deep niche mismatch (chips, C++ infra, big data) → -0.3 |
| **Stack** | Cypress/Playwright/JS → +0.2; Maestro/mobile → +0.2 | Python/Java mandatory → -0.3 |
| **Comp** | ₹28L+ → +0.2 | <₹25L → -0.5 |
| **Location** | India remote confirmed → +0.2 | India eligibility unconfirmed → -0.3; US/EU-only → SKIP |
| **Level** | Senior IC / hands-on → +0.2 | "years managing teams" required → -0.4 |

---

## Interview Prep: Your STAR Stories (real)

### Story 1: "Tell me about complex integration testing you've done"
**S:** Ziwo's CCaaS platform integrated with 8 CRM/ticketing systems (Dynamics 365, Salesforce, Zoho, Zendesk, Freshdesk, HubSpot, Pipedrive, Odoo)
**T:** Validate every integration end-to-end — in sandbox AND production — without breaking live customer telephony
**A:** Built E2E integration test passes covering API-based CRM syncs, contact lookups, ticket pop-ups, click-to-call flows, and caller ID mapping; validated data consistency between front-end, backend APIs, and CRM systems
**R:** Reliable integrations across all 8 platforms; caught data-sync discrepancies before customers did
*Key markers:* 8 platforms, sandbox+production, API-level validation

### Story 2: "Describe testing something hard to test"
**S:** Real-time telephony: WebSocket-driven agent presence, live call monitoring, dashboard syncing — where timing bugs hide
**T:** Validate real-time event correctness under realistic network conditions
**A:** Designed exploratory test scenarios for network drops, jitter, and packet loss; validated WebSocket events for calls, agents, and dashboards; verified webhook triggers for call events, dispositions, and recordings
**R:** Real-time reliability issues surfaced pre-release instead of in customer war rooms
*Key markers:* WebSocket validation, network edge cases, event-driven testing

### Story 3: "Tell me about owning quality end-to-end"
**S:** Datanitiv had no QA function — I was the sole QA Engineer
**T:** Stand up and run the complete QA process alone for workforce-management products
**A:** Owned manual functional and E2E testing, API testing via Swagger, backend/frontend data validation, and defect lifecycle with the dev team
**R:** A functioning QA process run single-handedly for 1.5 years across 3 product lines (OneView, Lifeworks, Capability)
*Key markers:* sole QA, full ownership, API testing, 3 products

### Story 4: "What's your automation experience?"
**S:** Strong manual/exploratory foundation; deliberate move into automation
**T:** Build automation skills that hold up in production use, not just tutorials
**A:** Earned Cypress and Cucumber-with-JavaScript certifications; introduced Maestro-driven UI automation for Ziwo's Android/iOS apps; built a Playwright E2E suite for my portfolio site
**R:** Mobile UI automation running against production apps + a public Playwright suite anyone can review
*Key markers:* Maestro in production, Playwright portfolio, honest trajectory

### Story 5: "How do you handle production issues?"
**S:** Poptin (SaaS) shipped fast; production issues needed same-day triage
**T:** Triage, reproduce, root-cause, and verify fixes without blocking releases
**A:** Collaborated with developers and support to isolate root causes, verified hotfixes, and ran targeted regression on every hotfix to prevent regressions
**R:** Production incidents closed with verified fixes and no repeat regressions
*Key markers:* triage speed, root-cause collaboration, hotfix regression discipline

---

## Negotiation Notes

### Baseline Negotiation Strategy
- **Target:** ₹28L
- **Floor:** ₹25L (absolute minimum)
- **Reality check:** India market for Senior QA (manual+automation, 5 yrs) is ~₹12-20L; ₹25L+ requires either strong automation positioning, international remote (USD/AED/EUR contracts — already proven), or domain-premium roles (CCaaS/CRM). Freelance international contracts may beat local FTE offers.
- **Priorities:** remote > comp > title

### Questions to Ask Before Accepting
1. "What's the split between manual and automation work in this role?"
2. "What does the current automation stack look like, and who maintains it?"
3. "How does QA get involved in requirements and design reviews?"
4. "How are production issues triaged, and what's QA's role?"
5. "What growth path exists toward automation-heavy or lead scope?"

---

## Keep This Updated

As you:
- **Evaluate offers:** Note which archetypes applied and how accurate the scoring was
- **Complete interviews:** Add new STAR stories to this file
- **Learn:** Update proof points with new metrics — but only real ones, sourced from cv.md
- **Grow:** When you gain leadership or framework-architecture experience, promote Archetype 3 and update cv.md first

This file is YOUR unique career compass. Let it evolve with you.
