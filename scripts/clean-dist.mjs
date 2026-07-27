import { existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve('dist');
if (existsSync(dist)) rmSync(dist, { recursive:true, force:true });
