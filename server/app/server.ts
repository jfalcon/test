import { createServer } from "node:http";
import config from '@/config';
import app from "@/app";

export const server = async () => {
  const server = createServer(app);

  server.listen(config.port, 'localhost', () => {
    console.info(`Server is running on port ${config.port}.`);
  })
  .on('error', (e: Error) => console.error(e.message));
};
