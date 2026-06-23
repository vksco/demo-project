# councilor-demo

Throwaway target repo for the **Councilor cost spike** (see `../SPIKE.md`).

Each `src/<name>.ts` is an **unimplemented stub** (`throw new Error("not implemented")`).
Each `tests/<name>.test.ts` is the **spec**.

The coding agent's job per spike run: implement one stub so its test passes.

## Layout

| Issue id (= function) | Stub | Spec | Difficulty |
|---|---|---|---|
| `slugify` | src/slugify.ts | tests/slugify.test.ts | easy |
| `chunk` | src/chunk.ts | tests/chunk.test.ts | easy |
| `flatten` | src/flatten.ts | tests/flatten.test.ts | easy |
| `title-case` | src/title-case.ts | tests/title-case.test.ts | medium |
| `parse-query` | src/parse-query.ts | tests/parse-query.test.ts | medium |
| `roman` | src/roman.ts | tests/roman.test.ts | medium |

## Run a single spec (what the harness does)

```bash
npm ci
npx vitest run tests/slugify.test.ts
```

## Run all

```bash
npm test
```

> All specs fail until implemented — that's the point. Add more stub+spec pairs to grow the batch
> toward the spike's ideal of 10–20 issues.
