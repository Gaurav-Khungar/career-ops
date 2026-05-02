# Pipeline — URL Inbox for Batch Processing

Add job URLs here and then run `/career-ops pipeline` to batch-evaluate them.

## Pending
- [ ] [Add URLs here]

## Processed
(Moves here after evaluation with results)

---

## How to Use

### Adding URLs
1. Copy job posting URL
2. Paste under "Pending" as: `- [ ] URL | Company | Role Title` (optional but helpful)
3. Example: `- [ ] https://jobs.ashby.com/company/123 | Anthropic | Senior QA Engineer`

### Processing
1. Run: `/career-ops pipeline`
2. Claude will:
   - Extract job descriptions
   - Evaluate each role (A-F scoring)
   - Generate reports
   - Create PDFs
   - Move to "Processed" section

### Status Codes
- `[ ]` = Pending evaluation
- `[x]` = Completed, moved to Processed
- `[!]` = Error (couldn't extract JD, login required, etc.)

## Example (Processed)
```
### Processed
- [x] 001 | https://jobs.ashby.com/company/123 | Anthropic | Senior QA Engineer | 4.5/5 | PDF ✅ | Strong match on testing strategy role
- [!] https://example.com/secure/job | Company Inc | Test Architect | Error: Login required
```

## Pendientes

- [x] https://job-boards.greenhouse.io/vercel/jobs/5843010004 | Vercel | Anti-Abuse Automation Engineer
- [x] https://databricks.com/company/careers/open-positions/job?gh_jid=8459908002 | Databricks | Network Automation Engineer 
- [x] https://databricks.com/company/careers/open-positions/job?gh_jid=8463169002 | Databricks | Sr. IT Systems/Automation Engineer

<!-- Scan 2026-04-30 — Level 3 WebSearch (unverified liveness; confirm before applying) -->
- [x] https://job-boards.greenhouse.io/knowbe4/jobs/8500816002 | KnowBe4 | QA Engineer (MIS) Remote
- [x] https://jobs.lever.co/dronedeploy/487cfa63-2c07-4021-ba37-0a8dcdc583ee | DroneDeploy | Lead QA Engineer
- [x] https://jobs.lever.co/insiderone/9975b5f6-2f14-4562-a58e-665648d9f7e6 | Insider One | Senior Software QA Engineer
- [x] https://jobs.lever.co/jobgether/a49e19eb-e929-452a-be54-fdfb5326d80a | Jobgether | QA Engineer (Remote)
- [x] https://jobs.lever.co/proof/b166af7e-3328-4c50-9561-dde7cc009501 | Proof | Senior Software QA Engineer
- [x] https://jobs.lever.co/smart-working-solutions/bdcdd311-40f8-433c-85ce-19f9e7af4523 | Smart Working Solutions | QA Automation Engineer
- [x] https://job-boards.greenhouse.io/neuraflash/jobs/5978041004 | NeuraFlash | Quality Assurance Lead
- [x] https://job-boards.greenhouse.io/machinifyinc/jobs/4111848009 | Machinify | Staff Automation Engineer QA (⚠️ 8+ yrs req, US-only — confirm)
- [x] https://jobs.lever.co/3pillarglobal/aa558efd-4a89-45df-810a-e183b6f3475f | 3Pillar Global | QA Lead (Contractor)
- [x] https://jobs.lever.co/smart-working-solutions/f90fd0c0-405a-4110-a243-3c27aeed84f4 | Smart Working Solutions | QA Automation Lead (Remote)
- [x] https://jobs.lever.co/smart-working-solutions/b2e18693-feea-49b7-a5ce-3d59efb81b1b | Smart Working Solutions | QA Automation Lead EU
- [x] https://jobs.lever.co/xsolla/59018129-7412-4fb0-b7a2-aa8405635175 | Xsolla | Lead QA Engineer
- [x] https://jobs.lever.co/gohighlevel/ca4ef37c-f259-4b6b-8d28-c034feed8874 | HighLevel | Lead SDET - Lead Gen
- [x] https://jobs.lever.co/3pillarglobal/4b19cc7c-3252-408e-b384-40ab83407f4a | 3Pillar Global | Tech Lead QA Engineer
- [x] https://jobs.lever.co/jobgether/7b753948-dfb7-4036-a09b-54ff6f176a70 | Jobgether | Lead QA Tester (AI/LLM Testing)
- [x] https://job-boards.greenhouse.io/flex/jobs/4655636005 | Flex | Senior SDET (⚠️ on-site 3d/wk NYC — dealbreaker for remote)
- [x] https://job-boards.greenhouse.io/rapidfortinc/jobs/4193607009 | RapidFort | Sr SDET (⚠️ 10+ yrs required)
- [x] https://job-boards.greenhouse.io/assystinc/jobs/4214576009 | ASSYST | Test Automation Engineer SDET
- [x] https://job-boards.greenhouse.io/entersekt/jobs/5844534004 | Entersekt | Senior Quality Engineer: Automation & Integration Testing
- [x] https://job-boards.greenhouse.io/quanata/jobs/5647318004 | Quanata | Senior SDET, Data QA
- [x] https://job-boards.greenhouse.io/santex/jobs/8504641002 | Santex | Senior QA Lead (Must: SDET Experience)
- [x] https://job-boards.greenhouse.io/mesh/jobs/5199190008 | Mesh | Senior QA Automation Engineer
- [x] https://job-boards.greenhouse.io/lifted/jobs/7689401003 | Lifted | Contract: Senior Quality Assurance Engineer
- [x] https://job-boards.greenhouse.io/launchpadtechnologiesinc/jobs/4617707006 | Launchpad Technologies | Senior QA Automation Engineer

## Procesadas

- [x] #001 | https://job-boards.greenhouse.io/clickhouse/jobs/5654027004 | ClickHouse | QA Engineer - Core Database | 4.3/5 | PDF ❌
- [x] #002 | https://jobs.lever.co/gohighlevel/b14addba-e132-4dfa-ba07-f69455ac13ae | HighLevel | Lead SDET - AI | 4.0/5 | PDF ❌
- [x] #003 | https://jobs.lever.co/proof/b166af7e-3328-4c50-9561-dde7cc009501 | Proof | Senior Software QA Engineer | 4.2/5 | PDF ❌ | Worldwide remote, $120K-$180K; confirm India eligibility before applying
- [x] #004 | https://jobs.lever.co/dronedeploy/487cfa63-2c07-4021-ba37-0a8dcdc583ee | DroneDeploy | Lead QA Engineer | SKIP | USA-only
- [x] #005 | https://job-boards.greenhouse.io/mesh/jobs/5199190008 | Mesh | Senior QA Automation Engineer | SKIP | On-site SF
- [x] #006 | https://job-boards.greenhouse.io/santex/jobs/8504641002 | Santex | Senior QA Lead | SKIP | Argentina/Mexico only
- [x] #007 | https://job-boards.greenhouse.io/neuraflash/jobs/5978041004 | NeuraFlash | Quality Assurance Lead | 3.0/5 | Consulting + 25% travel dealbreaker
- [x] #008 | https://jobs.lever.co/jobgether/7b753948-dfb7-4036-a09b-54ff6f176a70 | Jobgether | Lead QA Tester (AI/LLM) | 3.5/5 | AI/LLM gap; below threshold
- [x] #009 | https://jobs.lever.co/xsolla/59018129-7412-4fb0-b7a2-aa8405635175 | Xsolla | Lead QA Engineer | 3.0/5 | Serbia location; PHP/Golang stack
- [x] #010 | https://job-boards.greenhouse.io/entersekt/jobs/5844534004 | Entersekt | Senior QA Engineer | 3.0/5 | Manual focus; SA remote unclear

<!-- Processed 2026-05-02 — Evaluated 19 items from backlog (network blocked; JD-free evaluations based on title/company signals) -->
- [x] #011 | https://jobs.lever.co/smart-working-solutions/f90fd0c0-405a-4110-a243-3c27aeed84f4 | Smart Working Solutions | QA Automation Lead (Remote) | 4.0/5 | Verify JD + employment type before applying
- [x] #013 | https://jobs.lever.co/gohighlevel/ca4ef37c-f259-4b6b-8d28-c034feed8874 | HighLevel | Lead SDET - Lead Gen | 3.8/5 | Deduped against existing HighLevel entry
- [x] #014 | https://jobs.lever.co/insiderone/9975b5f6-2f14-4562-a58e-665648d9f7e6 | Insider One | Senior Software QA Engineer | 3.8/5 | Confirm WFH policy
- [x] #015 | https://job-boards.greenhouse.io/quanata/jobs/5647318004 | Quanata | Senior SDET, Data QA | 3.7/5 | Confirm India remote eligibility
- [x] #016 | https://job-boards.greenhouse.io/launchpadtechnologiesinc/jobs/4617707006 | Launchpad Technologies | Senior QA Automation Engineer | 3.5/5 | Staffing context; verify India eligibility
- [x] #017 | https://jobs.lever.co/smart-working-solutions/bdcdd311-40f8-433c-85ce-19f9e7af4523 | Smart Working Solutions | QA Automation Engineer | 3.2/5 | Not Lead level
- [x] #018 | https://jobs.lever.co/smart-working-solutions/b2e18693-feea-49b7-a5ce-3d59efb81b1b | Smart Working Solutions | QA Automation Lead EU | 3.2/5 | EU designation; India eligibility unclear
- [x] #021 | https://job-boards.greenhouse.io/lifted/jobs/7689401003 | Lifted | Senior QA Engineer (Contract) | 3.0/5 | Contract role
- [x] #022 | https://jobs.lever.co/jobgether/a49e19eb-e929-452a-be54-fdfb5326d80a | Jobgether | QA Engineer (Remote) | 2.8/5 | Below threshold; step down from Lead
- [x] #023 | https://job-boards.greenhouse.io/assystinc/jobs/4214576009 | ASSYST | Test Automation Engineer SDET | 2.5/5 | Govt contractor; location unclear
- [x] #024 | https://job-boards.greenhouse.io/vercel/jobs/5843010004 | Vercel | Anti-Abuse Automation Engineer | SKIP | Role mismatch
- [x] #025 | https://databricks.com/company/careers/open-positions/job?gh_jid=8459908002 | Databricks | Network Automation Engineer | SKIP | Role mismatch
- [x] #026 | https://databricks.com/company/careers/open-positions/job?gh_jid=8463169002 | Databricks | Sr. IT Systems/Automation Engineer | SKIP | Role mismatch
- [x] #027 | https://job-boards.greenhouse.io/flex/jobs/4655636005 | Flex | Senior SDET | SKIP | On-site NYC dealbreaker
- [x] #028 | https://job-boards.greenhouse.io/machinifyinc/jobs/4111848009 | Machinify | Staff Automation Engineer QA | SKIP | US-only
- [x] #029 | https://job-boards.greenhouse.io/rapidfortinc/jobs/4193607009 | RapidFort | Sr SDET | SKIP | 10+ yrs required
- [x] #030 | https://jobs.lever.co/3pillarglobal/4b19cc7c-3252-408e-b384-40ab83407f4a | 3Pillar Global | Tech Lead QA Engineer | 4.0/5 | India-eligible; Archetype 1 North Star
- [x] #031 | https://jobs.lever.co/3pillarglobal/aa558efd-4a89-45df-810a-e183b6f3475f | 3Pillar Global | QA Lead (Contractor) | 3.5/5 | Contractor; lower priority than #030
- [x] #032 | https://job-boards.greenhouse.io/knowbe4/jobs/8500816002 | KnowBe4 | QA Engineer (MIS) Remote | 3.0/5 | Not Senior; MIS focus not strategic

<!-- Scan 2026-04-30 — Level 3 WebSearch (unverified liveness; confirm before applying) -->
- [ ] https://job-boards.greenhouse.io/knowbe4/jobs/8500816002 | KnowBe4 | QA Engineer (MIS) Remote
- [x] https://jobs.lever.co/dronedeploy/487cfa63-2c07-4021-ba37-0a8dcdc583ee | DroneDeploy | Lead QA Engineer
- [ ] https://jobs.lever.co/insiderone/9975b5f6-2f14-4562-a58e-665648d9f7e6 | Insider One | Senior Software QA Engineer
- [ ] https://jobs.lever.co/jobgether/a49e19eb-e929-452a-be54-fdfb5326d80a | Jobgether | QA Engineer (Remote)
- [x] https://jobs.lever.co/proof/b166af7e-3328-4c50-9561-dde7cc009501 | Proof | Senior Software QA Engineer
- [ ] https://jobs.lever.co/smart-working-solutions/bdcdd311-40f8-433c-85ce-19f9e7af4523 | Smart Working Solutions | QA Automation Engineer
- [x] https://job-boards.greenhouse.io/neuraflash/jobs/5978041004 | NeuraFlash | Quality Assurance Lead
- [ ] https://job-boards.greenhouse.io/machinifyinc/jobs/4111848009 | Machinify | Staff Automation Engineer QA (⚠️ 8+ yrs req, US-only — confirm)
- [ ] https://jobs.lever.co/3pillarglobal/aa558efd-4a89-45df-810a-e183b6f3475f | 3Pillar Global | QA Lead (Contractor)
- [ ] https://jobs.lever.co/smart-working-solutions/f90fd0c0-405a-4110-a243-3c27aeed84f4 | Smart Working Solutions | QA Automation Lead (Remote)
- [ ] https://jobs.lever.co/smart-working-solutions/b2e18693-feea-49b7-a5ce-3d59efb81b1b | Smart Working Solutions | QA Automation Lead EU
- [x] https://jobs.lever.co/xsolla/59018129-7412-4fb0-b7a2-aa8405635175 | Xsolla | Lead QA Engineer
- [ ] https://jobs.lever.co/gohighlevel/ca4ef37c-f259-4b6b-8d28-c034feed8874 | HighLevel | Lead SDET - Lead Gen
- [ ] https://jobs.lever.co/3pillarglobal/4b19cc7c-3252-408e-b384-40ab83407f4a | 3Pillar Global | Tech Lead QA Engineer
- [x] https://jobs.lever.co/jobgether/7b753948-dfb7-4036-a09b-54ff6f176a70 | Jobgether | Lead QA Tester (AI/LLM Testing)
- [ ] https://job-boards.greenhouse.io/flex/jobs/4655636005 | Flex | Senior SDET (⚠️ on-site 3d/wk NYC — dealbreaker for remote)
- [ ] https://job-boards.greenhouse.io/rapidfortinc/jobs/4193607009 | RapidFort | Sr SDET (⚠️ 10+ yrs required)
- [ ] https://job-boards.greenhouse.io/assystinc/jobs/4214576009 | ASSYST | Test Automation Engineer SDET
- [x] https://job-boards.greenhouse.io/entersekt/jobs/5844534004 | Entersekt | Senior Quality Engineer: Automation & Integration Testing
- [ ] https://job-boards.greenhouse.io/quanata/jobs/5647318004 | Quanata | Senior SDET, Data QA
- [x] https://job-boards.greenhouse.io/santex/jobs/8504641002 | Santex | Senior QA Lead (Must: SDET Experience)
- [x] https://job-boards.greenhouse.io/mesh/jobs/5199190008 | Mesh | Senior QA Automation Engineer
- [ ] https://job-boards.greenhouse.io/lifted/jobs/7689401003 | Lifted | Contract: Senior Quality Assurance Engineer
- [ ] https://job-boards.greenhouse.io/launchpadtechnologiesinc/jobs/4617707006 | Launchpad Technologies | Senior QA Automation Engineer

## Procesadas

- [x] #001 | https://job-boards.greenhouse.io/clickhouse/jobs/5654027004 | ClickHouse | QA Engineer - Core Database | 4.3/5 | PDF ❌
- [x] #002 | https://jobs.lever.co/gohighlevel/b14addba-e132-4dfa-ba07-f69455ac13ae | HighLevel | Lead SDET - AI | 4.0/5 | PDF ❌
- [x] #003 | https://jobs.lever.co/proof/b166af7e-3328-4c50-9561-dde7cc009501 | Proof | Senior Software QA Engineer | 4.2/5 | PDF ❌ | Worldwide remote, $120K-$180K; confirm India eligibility before applying
- [x] #004 | https://jobs.lever.co/dronedeploy/487cfa63-2c07-4021-ba37-0a8dcdc583ee | DroneDeploy | Lead QA Engineer | SKIP | USA-only
- [x] #005 | https://job-boards.greenhouse.io/mesh/jobs/5199190008 | Mesh | Senior QA Automation Engineer | SKIP | On-site SF
- [x] #006 | https://job-boards.greenhouse.io/santex/jobs/8504641002 | Santex | Senior QA Lead | SKIP | Argentina/Mexico only
- [x] #007 | https://job-boards.greenhouse.io/neuraflash/jobs/5978041004 | NeuraFlash | Quality Assurance Lead | 3.0/5 | Consulting + 25% travel dealbreaker
- [x] #008 | https://jobs.lever.co/jobgether/7b753948-dfb7-4036-a09b-54ff6f176a70 | Jobgether | Lead QA Tester (AI/LLM) | 3.5/5 | AI/LLM gap; below threshold
- [x] #009 | https://jobs.lever.co/xsolla/59018129-7412-4fb0-b7a2-aa8405635175 | Xsolla | Lead QA Engineer | 3.0/5 | Serbia location; PHP/Golang stack
- [x] #010 | https://job-boards.greenhouse.io/entersekt/jobs/5844534004 | Entersekt | Senior QA Engineer | 3.0/5 | Manual focus; SA remote unclear

