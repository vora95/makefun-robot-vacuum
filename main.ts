// The Robot Vacuum's Best Excuse — make.fun entry (program/v1).
// Deterministic: writes one excuse line to <OUTPUT_DIR>/entry.txt.
// No clock, no randomness, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My lidar classified the sock as a small, sleeping animal, so I cleaned around it. I am not a monster.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
