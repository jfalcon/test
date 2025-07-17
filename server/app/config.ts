export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export interface Config {
  env: Environment;
  port: number;
}

/**
 * Configuration object.
*/
export const config: Config = {
  env: Environment[(process.env.NODE_ENV || 'development') as keyof typeof Environment],
  port: parseInt(process.env.DEFAULT_PORT ?? '3000', 10) || 3000,
};

export default config;
