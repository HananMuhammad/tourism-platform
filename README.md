# Tourism Platform

Built per the Master Specification v1.0 — atomic, tested, secure pieces, one level at a time.

## Status: LEVEL 0 — FOUNDATION ✅ (unverified — see below)

### What's in this commit
- Next.js 15 + React 19 + TypeScript (strict mode)
- Tailwind CSS
- ESLint (with `eslint-plugin-security` for injection/XSS pattern detection)
- Prettier
- Vitest + Testing Library for unit/integration tests
- Playwright installed for future E2E (Level 1+)
- `.env.example` documenting every required secret — **no real secrets committed**
- GitHub Actions CI: lint → typecheck → format check → unit tests → dependency audit
- One smoke test proving the pipeline actually renders and asserts something

### ⚠️ Not yet verified by execution
This was built in a sandboxed environment with no package registry access, so
`npm install` and `npm run verify` have **not actually been run** by me. Per the
project's own AI coding rule, I'm not claiming a test passed that didn't run.

**Before you trust this as "done," run on your own machine or in CI:**

```bash
npm install
npm run verify   # lint + typecheck + format check + unit tests
```

If `verify` passes clean, Level 0 is genuinely done and you can commit it as
the foundation. If it fails, that's normal — fix, re-run, and only move to
Level 1 once green, per the "each step must work before the next begins" rule.

### Commit this milestone
```bash
git add .
git commit -m "Level 0: foundation — Next.js, TS strict, lint, test framework, CI"
```

## Next: LEVEL 1 — ONE PAGE
Header, hero, one destination, footer. Will not start until you confirm
Level 0's `npm run verify` is green on your end.
