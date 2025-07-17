import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { init } from '@/controllers/price';
import { server } from '@/server';

// should use import.meta.dirname instead
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// this is the entry point, we can add any code
// we want prior to the server starting
const dataFile = path.resolve(__dirname, '..', 'fixtures', 'eurusd_m5_2010.csv');
await init(dataFile);  console.log(dataFile);

await server();
