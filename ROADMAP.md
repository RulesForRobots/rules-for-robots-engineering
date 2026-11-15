# Roadmap

Open work in this repository only. Work across repositories, and the order of the steps, is in the [front door's roadmap](https://github.com/RulesForRobots/rules-for-robots/blob/main/ROADMAP.md). Steps are those of the [rebuild plan](https://github.com/lifelike-and-believable/rules-for-robots/blob/main/docs/rebuild-plan.md), section 8.

## Step 4: rfr-engineering

- The software stages and templates (brief, stories, design, user documentation, spec, tests, implementation, tutorial, validation), as `rfr-process`'s first set of stages.
- TEST-001, TEST-003, and TEST-004 with their evals; the test-edit guard and test-change review.
- `code-reviewer`, `security-reviewer`, `software-architect`, `review-pr`, `security-audit`, `plan-feature`, `lookup-api`.
- Lasting tutorials and the tutorial runner; the docs lint (Vale).
- From the archive's `plugins/core`, `plugins/process`, and `checks/`.

## Step 5: rfr-web, with XR Studio In A Box

- The web packs, `web-engineer`, `accessibility-reviewer`, `performance-reviewer`, `ux-reviewer`, the audits, the Vercel and database guards, the web tutorial runner and previews, from `plugins/web` and `rules/packs`.
- XR Studio In A Box moves to the new marketplace and delivers its next packet on the new plugins: the acceptance test of the rebuild.

## Step 6: rfr-unreal and rfr-android

- `rfr-unreal`: the Unreal pack, `unreal-engineer`, packaging and profiling, Tier 1 checks and their reusable workflow in `.github/workflows/`, `RfrSample` in `examples/` as its CI fixture. With Open3DPuppet.
- `rfr-android`: the adb guard; a pack when there is evidence for one.
- Kettlebird website moves with `rfr-web`.

## Backlog carried from the archive

- Teach the tutorial runner to choose a file.
- The leftovers of the lasting-tutorials spec: the `security-reviewer` text for tutorial sign-in, the release check for tutorial `needs:`, a faster way to a starting state.
- Trial mutation and complexity tools inside a delivery run.
