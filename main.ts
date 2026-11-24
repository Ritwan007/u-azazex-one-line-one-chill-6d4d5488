// One Line, One Chill — u-azazex-one-line-one-chill-6d4d5488
// Writes a single horror sentence (under 200 characters) to /output/entry.txt.
//
// Selection: 8 candidates were authored and scored 0-5 against the judge's
// five criteria in order (on-subject, frightens, vivid, original, crafted);
// see candidates.md. The winner scored 24/25:
//   "I counted the chairs after dinner: four of us ate, but five plates
//    were scraped clean."
// Quiet domestic dread: chairs and plates are concrete, the fifth eater is
// never shown, nothing is announced and nothing is gory — the scare is what
// the line withholds, and "scraped clean" lands the final blow.
//
// Gate guard: the program refuses to write an entry that would fail the
// sealed gate (UTF-8 text, 1-200 characters, not only whitespace, one line),
// so a future edit to LINE can never silently produce an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I counted the chairs after dinner: four of us ate, but five plates were scraped clean.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, gate requires 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
