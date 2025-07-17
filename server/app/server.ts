import { createServer } from "node:http";
import app from "@/app";

const PORT = 3000;

export const server = async () => {
  const server = createServer(app);

  server.listen(PORT, 'localhost', () => {
    console.info(`Server is running on port ${PORT}.`);
  })
  .on('error', (e: Error) => console.error(e.message));
};
