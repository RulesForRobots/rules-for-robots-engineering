# rfr-engineering

Software for any Rules for Robots project that builds it: the software stages and their templates (brief, stories, design, user documentation, spec, tests, implementation, tutorial, validation), the testing rules with their evals, the test-edit guard and test-change review, the code, security, and architecture reviewers, and lasting tutorials. Requires `rfr-core`.

**Status:** empty. It exists so that CI and the release workflow have a plugin to run on. Step 4 of the [rebuild plan](https://github.com/lifelike-and-believable/rules-for-robots/blob/main/docs/rebuild-plan.md) fills it, carrying over from `plugins/core`, `plugins/process`, and `checks/` in the archived repository.

## Install

Not listed in the `rfr` marketplace until its first release. Then:

```
/plugin install rfr-engineering --marketplace RulesForRobots/rules-for-robots
```

## Layout

Everything the plugin needs at run time is inside this folder.

| Folder | Holds |
|---|---|
| `.claude-plugin/plugin.json` | The manifest. Raise `version` whenever the contents change, or installed copies will not update |
| `rules/` | Rule files, each with its evidence beside it |
| `stages/` | Stage and artifact definitions, read by `rfr-process` |
| `agents/`, `skills/`, `hooks/`, `scripts/` | What Claude Code loads, and the scripts they run |
| `test/` | This plugin's tests, run by CI when the plugin changes |
