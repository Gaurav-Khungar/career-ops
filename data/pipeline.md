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

- [ ] https://job-boards.greenhouse.io/vercel/jobs/5843010004 | Vercel | Anti-Abuse Automation Engineer
- [ ] https://databricks.com/company/careers/open-positions/job?gh_jid=8459908002 | Databricks | Network Automation Engineer 
- [ ] https://databricks.com/company/careers/open-positions/job?gh_jid=8463169002 | Databricks | Sr. IT Systems/Automation Engineer

