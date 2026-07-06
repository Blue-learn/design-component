# Contributing to `@blue-learn/design-component`

## Getting set up

```bash
npm ci
```

## Checks this repo gates on

CI runs these on every push. Run them locally before opening a PR —
they are the same commands, so a green local run means a green build.

| What | Command |
|---|---|
| Lint | `npm run lint` |
| Format | `npm run format` |
| Tests | `npm run test` |
| Tests + coverage gate | `npm run test:coverage` |
| Build | `npm run build` |

## Known baselines

This repo is clean: `tsc --noEmit` reports **0 errors** and `eslint`
reports **0 errors**. Keep it that way — any new number is a regression
your change introduced.

Do not close a gap with `@ts-ignore`, `@ts-expect-error`, `as any`, an
`eslint-disable`, or by loosening tsconfig/eslint config. Fix the underlying
type, or leave it and say why in the PR. Do not downgrade a dependency to
make a type error disappear — that reverts a real release to hide a symptom.

## Conventions

- Keep source files under 500 lines. Past that, split out the static data,
  the independent components, or a hook — whichever the file is actually
  made of.
- New behaviour needs a test that would fail without it. Tests that only
  restate what the code says about itself are not worth the maintenance.

