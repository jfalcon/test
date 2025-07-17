import { Request, Response } from 'express';
import fs from 'node:fs';
import readline from 'node:readline';

let priceIterator: AsyncGenerator<string, void, unknown> | undefined;

interface PriceResponse {
  price: string | null;
  message?: string;
}

interface ErrorResponse {
  error: string;
}

export async function init(filePath: string): Promise<AsyncGenerator<string, void, unknown>> {
  priceIterator = get(filePath);
  return priceIterator;
}

export async function* get(filePath: string): AsyncGenerator<string, void, unknown> {
  try {
    const stream = fs.createReadStream(filePath);

    const lines = readline.createInterface({
      input: stream,
      crlfDelay: Infinity
    });

    for await (const line of lines) {
      yield line;
    }

    stream.close();
  } catch (ex) {
    console.error(ex);
  }
}

export async function index(req: Request, res: Response) {
  if (priceIterator) {
    const { value, done } = await priceIterator.next();

    if (done) {
      res.status(200).json({ line: null, message: 'End of data reached.' });
    } else {
      res.status(200).json({ line: value as string });
    }
  } else {
    res.status(404).json({ message: 'Not initialized.' });
  }
}
