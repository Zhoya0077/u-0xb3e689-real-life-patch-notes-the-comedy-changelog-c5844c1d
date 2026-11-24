import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "v6.0.0: fixed a bug where a 12-second jingle looped in the brain for 6 hours with no skip button, no mute, and no uninstall.";

// The gate counts characters, so the entry is written exactly as-is:
// one line, 124 characters, no trailing newline.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
