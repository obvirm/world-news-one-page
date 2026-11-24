import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

fs.mkdirSync(outputDir, { recursive: true });
fs.copyFileSync(path.join(here, 'entry.png'), path.join(outputDir, 'entry.png'));
