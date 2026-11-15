<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/RulesForRobots/.github/raw/main/brand/lockups/engineering-dark.svg">
  <img src="https://github.com/RulesForRobots/.github/raw/main/brand/lockups/engineering-light.svg" alt="Rules for Robots Engineering" height="64">
</picture>

# Rules for Robots Engineering

Building software with agents: the Rules for Robots plugins for any software project, and for web, Unreal Engine, and Android in particular.

Rules for Robots lets one person direct agents through a whole project by approving decisions, never commands. Start at the front door, [RulesForRobots/rules-for-robots](https://github.com/RulesForRobots/rules-for-robots), for the charter, which plugins to install, and the `rfr` marketplace. This repository is where the Engineering plugins are made; you install them from the marketplace, not from here.


## Plugins

| Plugin | For | Status |
|---|---|---|
| `rfr-engineering` | Any software. The software stages and templates, TEST-001, TEST-003, and TEST-004 with their evals, the test-edit guard and test-change review, the code, security, and architecture reviewers, `review-pr`, `security-audit`, `plan-feature`, `lookup-api`, lasting tutorials and the tutorial runner, the docs lint. | Empty; step 4 |
| `rfr-web` | Websites and web apps. The web packs, `web-engineer`, the accessibility, performance, and UX reviewers, audits, Vercel and database guards, the web tutorial runner and previews. | Step 5 |
| `rfr-unreal` | Unreal Engine plugins. The Unreal pack, `unreal-engineer`, packaging and profiling, Tier 1 checks and their reusable workflow, `RfrSample` as its CI fixture. | Step 6 |
| `rfr-android` | Android apps. The adb guard, and a pack when there is evidence for one. | Step 6 |

Open work is in [ROADMAP.md](ROADMAP.md).

## Working on this repository

Node 22 or later; there is nothing to install.

```
npm run verify
```

[AGENTS.md](AGENTS.md) has the layout and conventions, for people and agents alike. Contributing and security reports follow the organization's defaults in [RulesForRobots/.github](https://github.com/RulesForRobots/.github).

## Licence

[MIT](LICENSE).
