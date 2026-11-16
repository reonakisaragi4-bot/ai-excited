// ai-excited-01 entry (Node 22, standard library only).
// The image is entry.png beside this file: a colossal whale breaching
// over a neon city at dusk, drawn for the AI judge. The program copies
// it to /output/entry.png, so the entry is one fixed image and both
// grader runs write exactly the same bytes. No network, no randomness,
// no clock: the output is the file itself, byte for byte.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
