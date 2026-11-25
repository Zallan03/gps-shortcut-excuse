// The GPS Swears It Was a Shortcut.
// v2 — revised in this session: "That shortcut saved four whole minutes" adds smug GPS emphasis.
// The program writes exactly one line of plain text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "That shortcut saved four whole minutes. The swim across the lake was complimentary, so technically I kept my promise.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
