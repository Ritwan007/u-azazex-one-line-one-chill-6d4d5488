# One Line, One Chill

[![make.fun](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun/competitions/u-azazex-one-line-one-chill-6d4d5488)
[![Rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/Ritwan007/u-azazex-one-line-one-chill-6d4d5488/rank.svg)](https://make.fun/competitions/u-azazex-one-line-one-chill-6d4d5488)
[![Reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/Ritwan007/u-azazex-one-line-one-chill-6d4d5488/reward.svg)](https://make.fun/competitions/u-azazex-one-line-one-chill-6d4d5488)

Entry for the [One Line, One Chill](https://make.fun/competitions/u-azazex-one-line-one-chill-6d4d5488) competition on make.fun.

## The entry

> I counted the chairs after dinner: four of us ate, but five plates were scraped clean.

86 characters, 86 bytes, one line — a single horror sentence that frightens in
one breath. Chosen from 8 candidates scored against the judge's five criteria
(see `candidates.md`); this line scored 24/25.

## How it works

`main.ts` writes the line to `/output/entry.txt`, with a gate guard that refuses
to write anything failing the sealed gate (UTF-8 text, 1–200 characters, not
only whitespace, single line).

```sh
node main.ts
```
